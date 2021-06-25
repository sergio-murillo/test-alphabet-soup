"use strict";
/**
 * Configura el servidor Express
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Locals_1 = require("./Locals");
const Routes_1 = require("./Routes");
const Kernel_1 = require("../middlewares/Kernel");
const Handler_1 = require("../exception/Handler");
class Express {
    /**
     * Inicializa el servidor EXPRESS
     */
    constructor() {
        this.express = express();
        this.mountDotEnv();
        this.mountMiddlewares();
        this.mountRoutes();
    }
    mountDotEnv() {
        this.express = Locals_1.default.init(this.express);
    }
    /**
     * Monta todos los middlewares
     */
    mountMiddlewares() {
        this.express = Kernel_1.default.init(this.express);
    }
    /**
     * Monta todas las rutas definidas
     */
    mountRoutes() {
        this.express = Routes_1.default.mountApi(this.express);
        this.express = Routes_1.default.mountSwagger(this.express);
    }
    init() {
        const port = Locals_1.default.config().port;
        // Registra manejador de errores
        this.express.use(Handler_1.default.logErrors);
        // Inicializa el servidor en el puerto especifico
        this.express.listen(port, () => {
            return console.log('\x1b[33m%s\x1b[0m', `Servidor corriendo en @ 'http://localhost:${port}'`);
        }).on('error', (error) => {
            console.log('Error: ', error);
        });
    }
}
exports.default = new Express();
//# sourceMappingURL=Express.js.map