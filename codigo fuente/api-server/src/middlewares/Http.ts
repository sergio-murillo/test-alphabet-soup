/**
 * Define los requisitos para HTTP
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */

import * as cors from 'cors';
import { Application } from 'express';
import * as compress from 'compression';
import * as bodyParser from 'body-parser';
import * as expressValidator from 'express-validator';

import Log from './Log';

class Http {
	public static mount(express: Application): Application {
		Log.info('Inicializando HTTP...');

		// Habilitar el parser del body
		express.use(bodyParser.json());

		// Habilitar el validador de Express
		express.use(expressValidator());

		// Habilitar CORS
		express.use(cors());

		// Habilitar la compresión "gzip" / "deflate" para respuestas
		express.use(compress());

		return express;
	}
}

export default Http;
