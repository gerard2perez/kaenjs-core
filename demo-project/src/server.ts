import { KaenServer } from '../../src';
const server = new KaenServer();
	// .add(Subdomains('www'))
	// .add(StaticContent())
	// .add(BodyParser({
	// 	files: ['image/png', 'image/jpg', 'image/jpeg']
	// }))
	// .add(Localization)
	// .add(Session())
	// .add(Passport(Router))
	// .add(Views)
	// .add(Routes())
	// .ready(async () => {
	// 	await Databases;
	// 	await Seed();
	// })
export {server};
