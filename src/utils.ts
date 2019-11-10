import { join } from "path";
export function targetPath(...args: string[]) {
	if (process.env.KAENCLI === 'true') {
		args.splice(0, 0, 'src');
	}
	return join(process.cwd(), ...args);
}
export function targetPathNoSrc(...args: string[]) {
	return join(process.cwd(), ...args);
}
export function parseHeader(header: string = '') {
	return header.split(';').map(p => p.trim());
}
export function parseWithQValues(header: string = '') {
	let chunks = {};
	return header.split(',').map(function parseQuality(chunk: string) {
		const [value, q = '1'] = chunk.split(';q=');
		const quality = parseFloat(q);
		chunks[value] = quality;
		return value;
	}).filter(lang => {
		return chunks[lang] > 0;
	}).sort(function shortParameters(a, b) {
		return chunks[b] - chunks[a];
	});
}
export function toXMl(json: any) {
	let result = '';
	for (const key of Object.getOwnPropertyNames(json)) {
		result += `<${key}>`;
		if (json[key] instanceof Array) {
			result += json[key].map(value => toXMl({ value }));
		} else if (false && json[key] && typeof json[key] === 'object') {
			result += toXMl(json[key]);
		} else {
			result += json[key] || '';
		}
		result += `</${key}>`;
	}
	return result;
}
