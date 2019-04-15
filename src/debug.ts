const kaen = require('debug')('kaen');

function debug(namespace:string):(text:string)=>void {
	return kaen.extend(namespace);
}

const drequest = debug('request');
const drouter = debug('router');
const info = debug('info');

export {drequest, drouter, info, debug, debug as default};
