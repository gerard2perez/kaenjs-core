import { existsSync, readdirSync, readFileSync, statSync } from 'fs';
import { Server } from 'http';
import { Http2SecureServer } from 'http2';
import { Server as HTTPS_Server } from 'https';
import './configuration';
import { configuration } from './configuration';
import { bodyType, KaenContext, __BaseKNCTX } from './contenxt';
import debug, { drequest } from './debug';
import { StandardResponseHeaders } from './headers';
import { targetPath } from './utils';
export { ErrorToHTML } from './error';
export { HTTPVerbs } from './httpverbs';
export { inflector } from './inflector';
export { KaenContext, KaenServer, KaenServer as default };
export type Middleware = (context:KaenContext, ...args:any[]) => Promise<void>
function heartbeat() {
	this.isAlive = true;
}
export function getTimeMSFloat() {
	var hrtime = process.hrtime();
	return (hrtime[0] * 1000000 + hrtime[1] / 1000) / 1000;
}
class KaenServer {
	private server: Server | HTTPS_Server | Http2SecureServer
	private wss: any
	public ws_ping_interval: number = 30000
	middleware: Array<(ctx: KaenContext) => Promise<void>> = []
	add(fn: (ctx: KaenContext) => Promise<void>): KaenServer {
		this.middleware.push(fn);
		return this;
	}
	async callback(req, res) {
		let time = getTimeMSFloat();
		let time2 = time;
		let times = [];
		res.once('close', () => {
			time2 = Math.round((getTimeMSFloat() - time2) * 10000) / 10000;
			drequest(`<-- ${req.url} [TTFB: ${time}] [${time2} ms]`);
			// times.map( ([name, t1, t2]) => console.log(name, Math.round((t2 - t1) * 10000) / 10000));
		})
		drequest(`--> ${req.url}`);
		let context = new __BaseKNCTX(req, res, this.wss) as any;
		try {
			for (const middle of this.middleware) {
				// let tmiddle = getTimeMSFloat();
				await middle(context as KaenContext);
				// times.push([middle.name, tmiddle, getTimeMSFloat()]);
				if (res.finished || context.body) break;
			}
			if (context.req.method.toUpperCase() !== "OPTIONS" && !context.res.headersSent)
				context.headers[StandardResponseHeaders.ContentType] = context.type;
			// context.res.flushHeaders();
			time = Math.round((getTimeMSFloat() - time) * 10000) / 10000;
			let end = true;
			let writeBody:string;
			switch (bodyType(context.body)) {
				case 'html':
				case 'string':
					writeBody = context.body;
					// res.write(context.body);
					break;
				case 'buffer':
					break;
				case 'stream':
					end = false;
					break;
				case 'object':
					let vaultmodel = context.body instanceof Array ? context.body[0] : context.body;
					let isvaultmodel = vaultmodel && vaultmodel.__proto__ && vaultmodel.__proto__.__proto__ &&
						vaultmodel.__proto__.__proto__.constructor && vaultmodel.__proto__.__proto__.constructor.name === 'Model';
					if (isvaultmodel) {
						if (context.body instanceof Array) {
							writeBody = JSON.stringify(await Promise.all(context.body.map(o => o.json())));
						} else {
							writeBody = JSON.stringify(await context.body.json());
						}
					} else {
						writeBody = JSON.stringify(context.body);
					}

					break;
				default:
					// end = false;
					// res.end();
					// console.log('No conocido', typeof context.body);
					break;
			}
			if(end){
				// context.headers[StandardResponseHeaders.TransferEncoding] = 'identity';
				// context.headers[StandardResponseHeaders.ContentLength] = writeBody.length.toString();
				res.end(writeBody, 'utf-8');
			};
		} catch (ex) {
			console.log(ex);
			res.writeHead(500, { 'Content-Type': 'text/plain' });
			res.write(ex.stack);
			res.end();
		}
	}
	onRequest(req, res) {
		// detects if it is a HTTPS request or HTTP/2
		const { socket: { alpnProtocol } } = req.httpVersion === '2.0' ?
			req.stream.session : req;
		res.writeHead(200, { 'content-type': 'application/json' });
		res.end(JSON.stringify({
			alpnProtocol,
			httpVersion: req.httpVersion
		}));
	}
	constructor() {
		let { server: {
			https: { http2 = false, cert = '', key = '' } = {}
		} } = configuration;
		let createServer = ((cert && key) ? (http2 ? require('http2').createSecureServer : require('https').createServer) : require('http').createServer);
		process.env.KAEN_INTERNAL_SUBDOMAIN = '';
		if (existsSync(targetPath('./routes')) && statSync(targetPath('./routes')).isDirectory()) {
			for (const file of readdirSync(targetPath('./routes'))) {
				if (/\.map$/.exec(file) === null) {
					let subdomain = file.replace(/\..*$/g, '');
					process.env.KAEN_INTERNAL_SUBDOMAIN = subdomain;
					require(targetPath('routes', file));
				}
			}
		} else {
			console.log(targetPath('./routes'));
			require(targetPath('./routes'));
		}
		let params: any[] = [];
		if (cert && key) {
			params.push({
				allowHTTP1: true,
				key: readFileSync(key),
				cert: readFileSync(cert)
			});
		}
		params.push(this.callback.bind(this));
		this.server = createServer(...params);
		this.server.on('error', (err) => console.error(err));
		// this.setUpWSS(router);
	}
	ready(fn:()=>Promise<any>) {
		this.Wait = fn;
		return this;
	}
	private Wait:()=>Promise<any>
	async listen(cb?: Function) {
		// if(!router_called)this.middleware.push(Router.execute);
		let { server: { port = 62626 } } = configuration;
		await this.Wait();
		this.server.listen(port, () => {
			debug(`kaen Server Listenning on port ${port}`);
			if (cb) cb();
		});

	}
}

