"use strict";
/**
 * Inicializar aplicación
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./providers/App");
/**
 * Limpiar la consola antes de inicializar la aplicación
 */
App_1.default.clearConsole();
/**
 * Cargar configuración
 */
App_1.default.loadConfiguration();
/**
 * Cargar servidor
 */
App_1.default.loadServer();
//# sourceMappingURL=index.js.map