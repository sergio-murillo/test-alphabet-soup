/**
 * Define variables de configuracion a nivel de aplicación
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */

import { Application } from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';

class Locals {
	public static config(): any {
		dotenv.config({ path: path.join(__dirname, '../../.env') });

		const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
		const port = process.env.PORT || 4040;

		const isCORSEnabled = process.env.CORS_ENABLED || true;
		const apiPrefix = process.env.API_PREFIX || 'api';

		return {
			apiPrefix,
			isCORSEnabled,
			port,
			url
		};
	}

	/**
	 * Inyecta la configuración a los locales
	 */
	public static init(_express: Application): Application {
		_express.locals.app = this.config();
		return _express;
	}
}

export default Locals;
