const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const res = require('express/lib/response');

import AlphabetController from '../../src/controllers/Alphabet';

const expect = chai.expect;
const sandbox = sinon.createSandbox();
chai.use(sinonChai);

describe('Tests AlphabetController', () => {

	before(() => {
		sandbox.stub(res, 'json');
	});

	afterEach(() => {
		sandbox.reset();
	});

	after(() => {
		sandbox.restore();
	});

	it('should return response', () => {
		const mockReq: any = {
			validationErrors: () => false,
			body: {
				matrix: [
					['E', 'I', 'O', 'I', 'E', 'I', 'O', 'E', 'I', 'O']
				],
				word: 'OIE',
				rows: 1,
				columns: 10
			}
		};
		AlphabetController.perform(mockReq, res);
		expect(res.json).to.have.been.calledOnceWith({
			response: 4
		});
	});
});
