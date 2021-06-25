/**
 * Inicializar aplicación
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */

import App from './providers/App';

/**
 * Limpiar la consola antes de inicializar la aplicación
 */
App.clearConsole();

/**
 * Cargar configuración
 */
App.loadConfiguration();

/**
 * Cargar servidor
 */
App.loadServer();
