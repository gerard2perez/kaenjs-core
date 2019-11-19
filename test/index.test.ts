// import 'mocha';
import {expect} from 'chai';
import { targetPath, toXMl, parseHeader, targetPathNoSrc } from '../src/utils';
import { KaenServer } from '../src';
import { resolve } from 'path';
import axios from 'axios';
import { StandardRequestHeaders } from '../src/headers';
process.chdir('./demo-project');
process.env.KAENCLI = 'true';
let server:KaenServer ;
let configuration;
describe('demo', ()=>{
	it('server starts', async ()=>{
		({server} = require(resolve('./src/server')));
		server.ready(()=>new Promise(resolve=>setTimeout(resolve,500)));
		await server.listen();

		// bodyType('');
		toXMl({hi:true});
		targetPath('r');
		expect(true).to.be.equal(true);
	});
	it('test some utils', async ()=>{
		toXMl({hi:true});
		toXMl({hi:[{value:1},{value:2},{value:3}]});
		expect(targetPath('r')).to.not.be.undefined;
		expect(targetPathNoSrc('r')).to.not.be.undefined;
	});
	it('add a middleware to the server', ()=>{
		expect(server.middleware).to.have.lengthOf(0);
		server.add(async ctx=> {
			ctx.body = {reaches: true};
		});
		expect(server.middleware).to.have.lengthOf(1);
	});
	it('handles a server request', async ()=>{
		({configuration} = require(resolve('../src/configuration')));
		let {data} = await axios.get(`http://localhost:${configuration.server.port}`);
		expect(data).to.have.property('reaches').equal(true);
	});
	it('it finish response on body set', async ()=>{
		expect(server.middleware).to.have.lengthOf(1);
		server.add(async ctx=> {
			ctx.body = '{reaches: true}';
		});
		let {data} = await axios.get(`http://localhost:${configuration.server.port}`);
		expect(data).to.have.property('reaches').equal(true);
		expect(server.middleware).to.have.lengthOf(2);
	});
	it('reads accepts header', async ()=>{
		server.middleware = [];
		server.add(async ctx=> {
			ctx.body = ctx.accepts('text/html', 'application/json');
		});
		let {data} = await axios.get(`http://localhost:${configuration.server.port}`, {
			headers: {
				accept: 'text/html, application/xhtml+xml, application/json;q=1, */*;q=0.8'
			}
		});
		expect(data).equal('text/html');
		({data} = await axios.get(`http://localhost:${configuration.server.port}`, {
			headers: {
				accept: 'application/xhtml+xml;q=0.7, application/json;q=1, */*;q=0.8'
			}
		}));
		expect(data).equal('application/json');
		({data} = await axios.get(`http://localhost:${configuration.server.port}`, {
			headers: {
				accept: 'text/*;q=0.8'
			}
		}));
		expect(data).equal('text/*');
	});
	it('reads validates content type', async ()=>{
		server.middleware = [];
		server.add(async ctx=> {
			let [media, charset, boundary] = parseHeader(ctx.headers[StandardRequestHeaders.ContentType])
			ctx.body = {media, charset, boundary};
		});
		let {data} = await axios.get(`http://localhost:${configuration.server.port}`, {
			headers: {
				'content-type': 'text/html; charset=utf-8'
			}
		});
		let DATA = expect(data);
		DATA.to.have.property('media').equal('text/html');
		DATA.to.have.property('charset').equal('utf-8');
		DATA.to.have.property('boundary').equal('');


		({data} = await axios.get(`http://localhost:${configuration.server.port}`));
		DATA = expect(data);
		DATA.to.have.property('media').equal('');
		DATA.to.have.property('charset').equal('');
		DATA.to.have.property('boundary').equal('');


	});

	it('return an html response', async ()=>{
		server.middleware = [];
		server.add(async ctx=> {
			ctx.body = '<html><head></header><body></body></html>';
			ctx.status = ctx.status;
		});
		let {data, headers} = await axios.get(`http://localhost:${configuration.server.port}`, {
			headers: {
				accept: 'text/html, application/xhtml+xml, application/json;q=1, */*;q=0.8'
			}
		});
		expect(headers).to.have.property('content-type').equals('text/html');
	});


	after(async ()=>{
		await server.close();
	});
});
