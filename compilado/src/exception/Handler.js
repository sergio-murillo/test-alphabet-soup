"use strict";
/**
 * Define handlers
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Log_1 = require("../middlewares/Log");
class Handler {
    /**
     * Registra errores/excepciones
     */
    static logErrors(err, req, res, next) {
        Log_1.default.error(err.stack);
        return next(err);
    }
}
exports.default = Handler;
//# sourceMappingURL=Handler.js.map