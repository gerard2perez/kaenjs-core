// import 'mocha';
import {expect} from 'chai';
import { bodyType } from '../src/contenxt';
import { targetPath, toXMl } from '../src/utils';
// console.log(describe);
describe('demo', ()=>{
	it('success', ()=>{
		// bodyType('');
		toXMl({hi:true});
		targetPath('r');
		expect(true).to.be.equal(true);
	});
	it('fails', ()=>{
		// bodyType('');
		expect(true).to.be.equal(true);
	});
	it('suucces2', ()=>{
		// bodyType('');
		expect(true).to.be.equal(true);
	});
});
