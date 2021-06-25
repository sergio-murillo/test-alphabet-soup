/**
 * Define handlers
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */

import Log from '../middlewares/Log';

class Handler {
	/**
	 * Registra errores/excepciones
	 */
	public static logErrors(err, req, res, next): any {
		Log.error(err.stack);

		return next(err);
	}
}

export default Handler;
