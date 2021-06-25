/**
 * Configura el servidor Express
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */

import * as express from 'express';

import Locals from './Locals';
import Routes from './Routes';
import Bootstrap from '../middlewares/Kernel';
import ExceptionHandler from '../exception/Handler';

class Express {
	public express: express.Application;

	/**
	 * Inicializa el servidor EXPRESS
	 */
	constructor() {
		this.express = express();

		this.mountDotEnv();
		this.mountMiddlewares();
		this.mountRoutes();
	}

	private mountDotEnv(): void {
		this.express = Locals.init(this.express);
	}

	/**
	 * Monta todos los middlewares
	 */
	private mountMiddlewares(): void {
		this.express = Bootstrap.init(this.express);
	}

	/**
	 * Monta todas las rutas definidas
	 */
	private mountRoutes(): void {
		this.express = Routes.mountApi(this.express);
		this.express = Routes.mountSwagger(this.express);
	}

	public init(): any {
		const port: number = Locals.config().port;

		// Registra manejador de errores
		this.express.use(ExceptionHandler.logErrors);

		// Inicializa el servidor en el puerto especifico
		this.express.listen(port, () => {
			return console.log('\x1b[33m%s\x1b[0m', `Servidor corriendo en @ 'http://localhost:${port}'`);
		}).on('error', (error) => {
			console.log('Error: ', error);
		});
	}
}

export default new Express();
