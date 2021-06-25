import { IRequest } from '../interfaces/IRequest';
import AlphabetService from '../services/Alphabet';

/**
 * Define controlador para la sopa de letras
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */

class Alphabet {

	public static perform(req: any, res: any): any {
		const errors = req.validationErrors();
		if (errors) {
			return res.json({
				errors
			});
		}

		const body = req.body as IRequest;
		const matrix = body.matrix;
		const word = body.word;

		const alphabeteService = new AlphabetService(matrix);
		const amount = alphabeteService.solve(word);
		res.json({
			response: amount
		});
	}
}

export default Alphabet;
