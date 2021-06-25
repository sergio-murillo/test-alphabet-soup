/**
 * Define interfaz para la request de sopa de letras
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */

export interface IRequest {
	matrix: string[][];
	word: string;
	rows: number;
	columns: number;
}

export default IRequest;
