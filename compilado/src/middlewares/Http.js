"use strict";
/**
 * Define los requisitos para HTTP
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const compress = require("compression");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const Log_1 = require("./Log");
class Http {
    static mount(express) {
        Log_1.default.info('Inicializando HTTP...');
        // Habilitar el parser del body
        express.use(bodyParser.json());
        // Habilitar el validador de Express
        express.use(expressValidator());
        // Habilitar CORS
        express.use(cors());
        // Habilitar la compresión "gzip" / "deflate" para respuestas
        express.use(compress());
        return express;
    }
}
exports.default = Http;
//# sourceMappingURL=Http.js.map