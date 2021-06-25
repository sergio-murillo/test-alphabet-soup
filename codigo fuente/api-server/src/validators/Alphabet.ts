import { check } from 'express-validator/check';

/**
 * Validar los datos de entrada para solucionar la sopa de letras
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */

class Alphabet {

	public static validate(): any {
		return [
			check('rows')
				.not()
				.isEmpty()
				.withMessage('La cantidad de filas no puede estar vacio')
				.custom((value) => this.checkNumber(value))
				.withMessage('La cantidad de filas debe ser entero, mayor a cero y menor que 100'),
			check('columns')
				.not()
				.isEmpty()
				.withMessage('La cantidad de columnas no puede estar vacio')
				.custom((value) => this.checkNumber(value))
				.withMessage('La cantidad de columnas debe ser entero, mayor a cero y menor que 100'),
			check('matrix')
				.not()
				.isEmpty()
				.withMessage('La matriz no puede estar vacia')
				.isArray()
				.withMessage('Debe ser una matriz')
				.not()
				.custom((value) => {
					return value.length > 0 && value.length <= 100 && value[0].length > 0 && value[0].length > 100;
				})
				.withMessage('La matriz debe ser de tamaño mínimo de 1x1 y máximo 100x100')
				.custom((value, { req }) => this.checkRowsColumnsMatrix(value, req))
				.withMessage('El tamaño de la matriz no coincide con las filas y/o columnas'),
			check('word')
				.not()
				.isEmpty()
				.withMessage('La palabra a buscar no puede estar vacia')
			];
	}

	private static checkNumber(value): boolean {
		return Number.isInteger(value) && value > 0 && value <= 100;
	}

	private static checkRowsColumnsMatrix(value, req): boolean {
		let isValid = true;
		const { rows, columns } = req.body;
		if (value.length !== rows) {
			isValid = false;
			return isValid;
		}

		for (let i = 0; i < value.length; i++) {
			if (value[i].length !== columns) {
				isValid = false;
				break;
			}
		}

		return isValid;
	}
}

export default Alphabet;
