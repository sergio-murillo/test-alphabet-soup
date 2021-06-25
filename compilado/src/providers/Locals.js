"use strict";
/**
 * Define variables de configuracion a nivel de aplicación
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const dotenv = require("dotenv");
class Locals {
    static config() {
        dotenv.config({ path: path.join(__dirname, '../../.env') });
        const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
        const port = process.env.PORT || 4040;
        const isCORSEnabled = process.env.CORS_ENABLED || true;
        const apiPrefix = process.env.API_PREFIX || 'api';
        return {
            apiPrefix,
            isCORSEnabled,
            port,
            url
        };
    }
    /**
     * Inyecta la configuración a los locales
     */
    static init(_express) {
        _express.locals.app = this.config();
        return _express;
    }
}
exports.default = Locals;
//# sourceMappingURL=Locals.js.map