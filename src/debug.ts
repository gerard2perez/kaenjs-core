import { HTTPVerbs } from "./httpverbs";

const kaen = require('debug')('kn');

function debug(namespace:string):(text:string)=>void {
	return kaen.extend(namespace);
}
const drouter = debug('router');
const info = debug('info');

export { drouter, info, debug, debug as default};
