"use strict";
/**
 * Carga variables de entorno y Express
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const dotenv = require("dotenv");
const Express_1 = require("./Express");
const Log_1 = require("../middlewares/Log");
class App {
    // Limpiar la consola
    clearConsole() {
        process.stdout.write('\x1B[2J\x1B[0f');
    }
    // Cargar el archivo dotenv
    loadConfiguration() {
        Log_1.default.info('Inicializando configuración dotenv.');
        dotenv.config({ path: path.join(__dirname, '../../.env') });
    }
    // Cargar el servidor
    loadServer() {
        Log_1.default.info('Cargando servidor API');
        Express_1.default.init();
    }
}
exports.default = new App;
//# sourceMappingURL=App.js.map