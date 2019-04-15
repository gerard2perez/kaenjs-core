import { ReadStream } from "fs";
import { IncomingMessage, ServerResponse, STATUS_CODES } from "http";
import { parse } from 'url';
import * as WebSocket from 'ws';
import { configuration } from "./configuration";
import debug from "./debug";
import { NonStandardRequestHeaders, NonStandardResponseHeaders, StandardRequestHeaders, StandardResponseHeaders } from "./headers";
import { MimeType } from './mime-types';
import { initCookes } from "./cookies";
import * as Cookies from 'cookies';
import { Entities } from "./htmlentities";
import { parseWithQValues, targetPathNoSrc } from "./utils";

function isOfTye(st, en) {
	for (const key of Object.keys(en)) {
		if (en[key] === st) {
			return true;
		}
	}
	return false;
}
const HeaderProxyHandler = {
	get({ req, res }, name:string) {
		if (isOfTye(name, StandardRequestHeaders) || isOfTye(name, NonStandardRequestHeaders)) {
			return req.headers[name];
		}

		if (isOfTye(name, StandardResponseHeaders) || isOfTye(name, NonStandardResponseHeaders)) {
			return (res as ServerResponse).getHeader(name);
		}
		return req.headers[name.toLowerCase()] || res.getHeader(name.toLowerCase()) || undefined;
	},
	set({ req, res }, name: StandardRequestHeaders | StandardResponseHeaders | NonStandardRequestHeaders | NonStandardResponseHeaders, value, receiver) {
		if (isOfTye(name, StandardResponseHeaders) || isOfTye(name, NonStandardResponseHeaders)) {
			if (value) {
				(res as ServerResponse).setHeader(name, value);
			} else {
				(res as ServerResponse).removeHeader(name);
			}
		} else if (isOfTye(name, StandardRequestHeaders) || isOfTye(name, NonStandardRequestHeaders)) {
			debug(`This headers (${name}) cannot be set beacuase is for the request`);
		}
		return true;
	}
};

declare global {
	namespace KaenExtensible {
		interface KaenContext { }
		interface KaenParameters {
			query?: any
			url?: any
		}
	}
}

export function bodyType(data: any) {
	if (typeof data === 'string') {
		return /^\s*</.test(data) ? 'html' : 'string';
	} else if (Buffer.isBuffer(data)) {
		return 'buffer';
	} else if (data instanceof ReadStream) {
		return 'stream';
	} else {
		return typeof data;
	}
}
export class __BaseKNCTX<T=any> {
	htmlentities: {
		encode(html: string): string
		decode(html: string): string
		encodeNonUTF(html: string): string
		encodeNonASCII(html: string): string
	}
	url: {
		path: string,
		full: string,
		search?: string
	}
	domain: string
	subdomain: string = ''
	finished: boolean = false
	private _body: any;
	type: MimeType = MimeType.text
	ws: WebsocketServer
	params: KaenExtensible.KaenParameters
	cookies: Cookies
	get body() {
		return this._body;
	}
	set body(data: any) {
		this.res.statusCode = 200;
		switch (bodyType(data)) {
			case 'html':
				this.type = MimeType[".html"];
				break;
			case 'buffer':
				this.headers[StandardResponseHeaders.ContentType] = MimeType[".bin"];
				this.headers[StandardResponseHeaders.ContentLength] = data.length;
				break;
			case 'stream':
				this.headers[StandardResponseHeaders.ContentType] = MimeType[".bin"];
				data.on('data', (chunk) => {
					this.res.write(chunk);
				});
				data.on('close', () => {
					this.res.end();
				})
				this.res.once('close', () => data.destroy());
				break;
			case 'string':
				this.type = MimeType.text;
				break;
			case 'object':
				this.type = MimeType[".json"];
				break;
			default:
				this.res.statusCode = 404;
				console.log('No conocido');
				break;
		}
		this._body = data;
	}
	set status(status: number) {
		this.res.statusCode = status;
	}
	get status() {
		return this.res.statusCode;
	}
	state: T = {} as T
	req: IncomingMessage
	res: ServerResponse
	headers: StandardRequestHeaders | StandardResponseHeaders | NonStandardRequestHeaders | NonStandardResponseHeaders
	constructor(req: IncomingMessage, res: ServerResponse, wss: any) {
		this.domain = req.headers.host || req.headers[':authority'] as string;
		this.ws = new WebsocketServer(wss);
		let parsed = parse(req.url, true, true);
		this.params = {
			query: parsed.query,
			url: {},
			// @ts-ignore
			body: {}
		};
		this.url = {
			path: parsed.pathname,
			full: parsed.path,
			search: parsed.search
		};
		this.req = req;
		this.res = res;
		let ctx: any = { req, res };
		this.headers = new Proxy(ctx, HeaderProxyHandler);
		this.res.statusCode = 404;
		// @ts-ignore
		req.cookies = this.cookies = initCookes(req, res);
		this.htmlentities = Entities;
	}
	redirect(url: string)
	redirect(back: 'back', alt_url: String)
	redirect(url: string, alt?: string) {
		if (url === 'back') url = this.req.headers[StandardRequestHeaders.Referer] as string || alt || '/';
		this.headers[StandardResponseHeaders.Location] = url;
		this.status = 302;
		this.finished = true;
		// this.res.end();
	}
	accepts(...mime_types:string[]) {
		let types = parseWithQValues(this.req.headers[StandardRequestHeaders.Accept]);
		let lookfor = mime_types.map(m=>m.split('/')).reduce((prev, current)=>{
			prev[current[0]] = prev[current[0]] || [];
			prev[current[0]].push(current[1]);
			return prev;
		}, {}) as {[p:string]:string[]};
		for(const mime of types) {
			let [cat, type] = mime.split('/');
			if(lookfor[cat]) {
				if(lookfor[cat].includes(type) || lookfor[cat].includes('*')) {
					return mime;
				}
			}
		}
		return false;
	}
}
export class WebsocketServer {
	private server: any
	constructor(wss: any) {
		this.server = wss;
	}
	broadcast(channel: string, message: any) {
		this.server.clients.forEach(function each(client) {
			//@ts-ignore
			if (client.readyState === WebSocket.OPEN) {
				client.send(JSON.stringify({ channel, message }));
			}
		});
	}
}
interface KKC<T> extends __BaseKNCTX<T>, KaenExtensible.KaenContext { }
export type KaenContext<T=any> = {
	[P in keyof KKC<T>]: KKC<T>[P];
}
