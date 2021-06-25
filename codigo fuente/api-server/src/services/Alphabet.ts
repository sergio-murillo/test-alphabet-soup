import Log from '../middlewares/Log';

/**
 * Lógica para calcular cantidad de coincidencias de una palabra
 * en la sopa de letras utilizando Backtracking
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */

class Alphabet {

	private matrix: string[][];

	constructor(matriz: string[][]) {
		this.matrix = matriz;
	}

	public setMatrix(matrix: string[][]): void {
		this.matrix = matrix;
	}

	/**
	 * Retorna la cantidad de coincidencias de la palabra en la sopa de letras
	 * @param word Palabra a buscar
	 * @returns Cantidad de coincidencias
	 */
	public solve(word: string): number {
		word = word?.toUpperCase();
		const solutions = this.findPossibleSolutions(word);
		let amount = 0;
		solutions.forEach((value, index) => {
			// Buscar horizontalmente hacia derecha.
			amount += Number(this.wordInMatrix(solutions[index], word.length, 0, 1) === word);

			// Buscar horizontalmente hacia izquierda.
			amount += Number(this.wordInMatrix(solutions[index], word.length, 0, -1) === word);

			// Buscar verticalmente hacia abajo.
			amount += Number(this.wordInMatrix(solutions[index], word.length, 1, 0) === word);

			// Buscar verticalmente hacia arriba.
			amount += Number(this.wordInMatrix(solutions[index], word.length, -1, 0) === word);

			// Buscar diagonal superior derecha.
			amount += Number(this.wordInMatrix(solutions[index], word.length, -1, 1) === word);

			// Buscar diagonal superior izquierda.
			amount += Number(this.wordInMatrix(solutions[index], word.length, -1, -1) === word);

			// Buscar diagonal inferior derecha.
			amount += Number(this.wordInMatrix(solutions[index], word.length, 1, 1) === word);

			// Buscar diagonal inferior izquierda.
			amount += Number(this.wordInMatrix(solutions[index], word.length, 1, -1) === word);
		});

		Log.info(`La cantidad de coincidencias para la palabra ${word} son ${amount}`);
		return amount;
	}

	private findPossibleSolutions(word: string): number[][] {
		const firstCharacter = word.charAt(0);
		const positions: Array<number[]> = [];

		for (let i = 0; i < this.matrix.length; i++) {
			for (let j = 0; j < this.matrix[i].length; j++) {
				if (this.matrix[i][j].toUpperCase() === firstCharacter) {
					positions.push([i, j]);
				}
			}
		}

		return positions;
	}

	private wordInMatrix(posInicial: number[], charactersNumber: number, moveInRow: number, moveInColumn: number): String {
		let word = '';
		let path = 0;
		let row = posInicial[0];
		let column = posInicial[1];

		while ((path < charactersNumber) &&
				(row < this.matrix.length && column < this.matrix[0].length) &&
				(row > -1 && column > -1)) {
			word += this.matrix[row][column].toUpperCase();
			row = row + moveInRow;
			column = column + moveInColumn;
			path++;
		}

		return word;
	}
}

export default Alphabet;
