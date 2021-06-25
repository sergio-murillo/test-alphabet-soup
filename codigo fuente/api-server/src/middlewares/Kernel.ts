/**
 * Registra middlewares
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */

import { Application } from 'express';

import CORS from './CORS';
import Http from './Http';

import Locals from '../providers/Locals';

class Kernel {
	public static init(express: Application): Application {
		// Verifica si los CORS estan habilitados
		if (Locals.config().isCORSEnabled) {
			// Monta el middleware de CORS
			express = CORS.mount(express);
		}

		// Monta el middleware de HTTP
		express = Http.mount(express);

		return express;
	}
}

export default Kernel;
