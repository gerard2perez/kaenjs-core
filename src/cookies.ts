import * as Cookies from 'cookies';
import { configuration } from './configuration';

export function initCookes(req:any, res:any) {
	const {authentication = {} as any} = configuration;
	// const {authentication:{Session:{cookie:secure}} = {Session:{cookie:{secure:false}}} } = configuration;
	const {Keys =[],Session={}} = authentication;
	const {cookie:{secure}={secure:false}} = Session;
	return new Cookies(req,  res, {
		keys: Keys,
		secure
	});
}
