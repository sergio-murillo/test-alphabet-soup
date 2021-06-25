import { expect } from 'chai';
import AlphabetService from '../../src/services/Alphabet';

describe('Tests AlphabetService', () => {
	it('should return 3 coincidences', () => {
		const matrix = [
			['O', 'I', 'E'],
			['I', 'I', 'X'],
			['E', 'X', 'E']
		];
		const word = 'OIE';
		const alphabeteService = new AlphabetService(matrix);
		const amount = alphabeteService.solve(word);
		expect(amount).to.equal(3);
	});

	it('should return 4 coincidences', () => {
		const matrix = [
			['E', 'I', 'O', 'I', 'E', 'I', 'O', 'E', 'I', 'O']
		];
		const word = 'OIE';
		const alphabeteService = new AlphabetService(matrix);
		const amount = alphabeteService.solve(word);
		expect(amount).to.equal(4);
	});

	it('should return 8 coincidences', () => {
		const matrix = [
			['E', 'A', 'E', 'A', 'E'],
			['A', 'I', 'I', 'I', 'A'],
			['E', 'I', 'O', 'I', 'E'],
			['A', 'I', 'I', 'I', 'A'],
			['E', 'A', 'E', 'A', 'E']
		];
		const word = 'OIE';
		const alphabeteService = new AlphabetService(matrix);
		const amount = alphabeteService.solve(word);
		expect(amount).to.equal(8);
	});

	it('should return 3 coincidences', () => {
		const matrix = [
			['O', 'X'],
			['I', 'O'],
			['E', 'X'],
			['I', 'I'],
			['O', 'X'],
			['I', 'E'],
			['E', 'X']
		];
		const word = 'OIE';
		const alphabeteService = new AlphabetService(matrix);
		const amount = alphabeteService.solve(word);
		expect(amount).to.equal(3);
	});

	it('should return 0 coincidences', () => {
		const matrix = [
			['E']
		];
		const word = 'OIE';
		const alphabeteService = new AlphabetService(matrix);
		const amount = alphabeteService.solve(word);
		expect(amount).to.equal(0);
	});

	it('should return coincidences greater than 1', () => {
		const matrix = [];
		for (let i = 0; i < 50; i++) {
			matrix.push([...Array(100)].map(i => (~~(Math.random() * 36)).toString(36)));
		}
		matrix[0][80] = 'O';
		matrix[0][81] = 'I';
		matrix[0][82] = 'E';

		matrix[49][80] = 'O';
		matrix[49][81] = 'I';
		matrix[49][82] = 'E';

		const word = 'OIE';
		const alphabeteService = new AlphabetService(matrix);
		const amount = alphabeteService.solve(word);
		expect(amount).to.greaterThanOrEqual(1);
	});

	it('should return 3 coincidences and ignore case', () => {
		const matrix = [
			['o', 'i', 'E'],
			['i', 'I', 'X'],
			['E', 'X', 'e']
		];
		const word = 'OIE';
		const alphabeteService = new AlphabetService(matrix);
		const amount = alphabeteService.solve(word);
		expect(amount).to.equal(3);
	});
});
