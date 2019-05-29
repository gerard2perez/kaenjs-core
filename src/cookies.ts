import * as Cookies from 'cookies';
import { configuration } from './configuration';

export function initCookes(req:any, res:any) {
	const { server = {} as any} = configuration;
	const {Keys =[],Session={}} = server;
	const {cookie:{secure}={secure:false}} = Session;
	return new Cookies(req,  res, {
		keys: Keys,
		secure
	});
}
