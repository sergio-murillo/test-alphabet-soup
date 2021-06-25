"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const res = require('express/lib/response');
const Alphabet_1 = require("../../src/controllers/Alphabet");
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
        const mockReq = {
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
        Alphabet_1.default.perform(mockReq, res);
        expect(res.json).to.have.been.calledOnceWith({
            response: 4
        });
    });
});
//# sourceMappingURL=Alphabet.spec.js.map