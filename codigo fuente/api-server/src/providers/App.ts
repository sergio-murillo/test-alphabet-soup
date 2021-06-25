/**
 * Carga variables de entorno y Express
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */

import * as path from 'path';
import * as dotenv from 'dotenv';

import Express from './Express';

import Log from '../middlewares/Log';

class App {
	// Limpiar la consola
	public clearConsole (): void {
		process.stdout.write('\x1B[2J\x1B[0f');
	}

	// Cargar el archivo dotenv
	public loadConfiguration (): void {
		Log.info('Inicializando configuración dotenv.');

		dotenv.config({ path: path.join(__dirname, '../../.env') });
	}

	// Cargar el servidor
	public loadServer (): void {
		Log.info('Cargando servidor API');

		Express.init();
	}
}

export default new App;
