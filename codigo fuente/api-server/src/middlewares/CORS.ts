/**
 * Habilita CORS
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */

import * as cors from 'cors';
import { Application } from 'express';

import Log from './Log';
import Locals from '../providers/Locals';

class CORS {
	public mount(express: Application): Application {
		Log.info('Inicializando CORS...');

		const options = {
			origin: Locals.config().url,
			optionsSuccessStatus: 200
		};

		express.use(cors(options));

		return express;
	}
}

export default new CORS;
