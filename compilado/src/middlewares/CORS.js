"use strict";
/**
 * Habilita CORS
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const Log_1 = require("./Log");
const Locals_1 = require("../providers/Locals");
class CORS {
    mount(express) {
        Log_1.default.info('Inicializando CORS...');
        const options = {
            origin: Locals_1.default.config().url,
            optionsSuccessStatus: 200
        };
        express.use(cors(options));
        return express;
    }
}
exports.default = new CORS;
//# sourceMappingURL=CORS.js.map