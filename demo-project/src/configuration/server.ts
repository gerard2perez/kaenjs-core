import { IServerConfiguration, LocalizationMode } from '../../../src/configuration/server';
export default {
	name: 'test-project',
	subdomainOffset: 3,
	port: 62626,
	host: {
		dev:'test-project.loc',
		prod: 'test-project.com'
	},
	https: {

	},
	Keys: {
		dev: [
		'f6e50a32de0b0a6ba84e848a49687827a5e174047ee5cb35c195e7be324a414b764ee31fd052527d',
		'390f9c9e9aa5ad9c07e16d6787470be56da3ab2ae364afdf733ba3aaea5844f5852429044cd56d84',
		'41096cc066408fa69bf642e6da5b41f8c11e810e555765df4f0ff6366f02a628f96ed8b97fdc0ae7',
		'6b7a41bf5e4384b9a7501be45a55f7d68bd4f1f23920621bd3a3f7fce503dee7b96daf9b60ab6a37'
		],
		prod:[
			'6fb421b3d2f60b92f2bc04b8ca8f4b9aca19eb77a64fba0e9de28d4c772381e4448f9e6fd11cc414',
			'8f2a2d3617a44b5b161dc060171d2cdad7883565e382d68724c473469dfec25795aa0d3d323e960a',
			'cf652ba61c2a146fd8c85bf68575aaf1925fc1f6675940cfc96eac2a0fb6abb2cbfeaf25ba30213e',
			'b969719fc9568931b37d727b514bca2d4ca4822646d692192d55d1f80bedc69033508eaa4ef91bc2'
		]
	},
	client_max_body_size: '1M',
	localization: {
		directory: './locales',
		queryKey: 'locale',
		default: 'en',
		cookie:'locale',
		objectNotation: false,
		fallbacks: {},
		modes: [
			LocalizationMode.query,
			LocalizationMode.subdomain,
			LocalizationMode.cookie,
			LocalizationMode.url,
			LocalizationMode.tld,
			LocalizationMode.header
		]

	}
} as IServerConfiguration;
