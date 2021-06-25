"use strict";
/**
 * Registra middlewares
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const CORS_1 = require("./CORS");
const Http_1 = require("./Http");
const Locals_1 = require("../providers/Locals");
class Kernel {
    static init(express) {
        // Verifica si los CORS estan habilitados
        if (Locals_1.default.config().isCORSEnabled) {
            // Monta el middleware de CORS
            express = CORS_1.default.mount(express);
        }
        // Monta el middleware de HTTP
        express = Http_1.default.mount(express);
        return express;
    }
}
exports.default = Kernel;
//# sourceMappingURL=Kernel.js.map