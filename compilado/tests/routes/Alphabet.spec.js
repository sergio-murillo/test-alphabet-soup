"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const request = require('supertest');
const Express_1 = require("../../src/providers/Express");
const express = Express_1.default;
express.init();
const server = express.express;
describe('POST /alphabet/validate', () => {
    it('responds 200', () => {
        const body = {
            matrix: [['a', 'b'], ['a', 'b']],
            word: 'ab',
            rows: 2,
            columns: 2
        };
        return request(server)
            .post('/api/alphabet/validate')
            .send(body)
            .set('Accept', 'application/json')
            .expect(200)
            .then(resp => chai_1.expect(resp.body.response).to.equal(4));
    });
    it('responds errors with rows equal to 0 and columns equal to 101', () => {
        const body = {
            matrix: [['a', 'b'], ['a', 'b']],
            word: 'ab',
            rows: 0,
            columns: 101
        };
        return request(server)
            .post('/api/alphabet/validate')
            .send(body)
            .set('Accept', 'application/json')
            .then(resp => {
            const errors = resp.body.errors;
            const msgs = ['La cantidad de filas debe ser entero, mayor a cero y menor que 100',
                'El tamaño de la matriz no coincide con las filas y/o columnas',
                'La cantidad de columnas debe ser entero, mayor a cero y menor que 100'];
            errors.forEach((val, index) => {
                chai_1.expect(msgs.includes(val.msg)).to.equal(true);
            });
            chai_1.expect(resp.body.errors.length).to.equal(3);
        });
    });
    it('responds errors with matrix resize', () => {
        const body = {
            matrix: [['a'], ['a', 'b'], ['a', 'c']],
            word: 'ab',
            rows: 3,
            columns: 2
        };
        return request(server)
            .post('/api/alphabet/validate')
            .send(body)
            .set('Accept', 'application/json')
            .then(resp => {
            const errors = resp.body.errors;
            const msgs = ['El tamaño de la matriz no coincide con las filas y/o columnas'];
            errors.forEach((val, index) => {
                chai_1.expect(msgs.includes(val.msg)).to.equal(true);
            });
        });
    });
});
//# sourceMappingURL=Alphabet.spec.js.map