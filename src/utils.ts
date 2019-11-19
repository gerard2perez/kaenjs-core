import { join } from "path";
export function targetPath(...args: string[]) {
	/* istanbul ignore next */
	if (process.env.KAENCLI === 'true') {
		args.splice(0, 0, 'src');
	}
	return join(process.cwd(), ...args);
}
export function targetPathNoSrc(...args: string[]) {
	return join(process.cwd(), ...args);
}
export function parseHeader(header: string = '') {
	let [media, ...charsetorboundary] = header.split(';').map(p => p.trim());
	let charset = charsetorboundary.filter(cb=>cb.includes('charset'))[0] || '';
	let boundary = charsetorboundary.filter(cb=>cb.includes('boundary'))[0] || '';
	charset =charset.split('=')[1] || '';
	boundary =boundary.split('=')[1] || '';
	return [media, charset, boundary];
}
export function parseWithQValues(header: string = '') {
	let chunks = {};
	return header.split(',').map(function parseQuality(chunk: string) {
		const [value, q = '1'] = chunk.split(';q=');
		const quality = parseFloat(q);
		chunks[value.trim()] = quality;
		return value.trim();
	})
	.filter(lang =>chunks[lang] > 0)
	.sort(function shortParameters(a, b) {
		return chunks[b] - chunks[a];
	});
}
export function toXMl(json: any) {
	let result = '';
	for (const key of Object.getOwnPropertyNames(json)) {
		result += `<${key}>`;
		if (json[key] instanceof Array) {
			result += json[key].map(value => toXMl({ value }));
		} else if (json[key] && typeof json[key] === 'object') {
			result += toXMl(json[key]);
		} else {
			result += json[key] || '';
		}
		result += `</${key}>`;
	}
	return result;
}
