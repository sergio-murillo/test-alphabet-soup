"use strict";
/**
 * Define todas las rutas
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Locals_1 = require("./Locals");
const Log_1 = require("../middlewares/Log");
const Api_1 = require("./../routes/Api");
const Swagger_1 = require("./../routes/Swagger");
class Routes {
    mountApi(express) {
        const apiPrefix = Locals_1.default.config().apiPrefix;
        Log_1.default.info('Montando rutas API...');
        return express.use(`/${apiPrefix}`, Api_1.default);
    }
    mountSwagger(express) {
        Log_1.default.info('Montando rutas SWAGGER...');
        return express.use('/swagger', Swagger_1.default);
    }
}
exports.default = new Routes;
//# sourceMappingURL=Routes.js.map