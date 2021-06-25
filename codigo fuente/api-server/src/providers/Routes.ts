/**
 * Define todas las rutas
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */

import { Application } from 'express';
import Locals from './Locals';
import Log from '../middlewares/Log';

import apiRouter from './../routes/Api';
import swaggerRouter from './../routes/Swagger';

class Routes {
	public mountApi(express: Application): Application {
		const apiPrefix = Locals.config().apiPrefix;
		Log.info('Montando rutas API...');

		return express.use(`/${apiPrefix}`, apiRouter);
	}

	public mountSwagger(express: Application): Application {
		Log.info('Montando rutas SWAGGER...');

		return express.use('/swagger', swaggerRouter);
	}
}

export default new Routes;
