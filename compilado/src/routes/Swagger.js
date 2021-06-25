"use strict";
/**
 * Se definen las rutas para swagger
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../config/swagger');
const router = express_1.Router();
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDoc));
exports.default = router;
//# sourceMappingURL=Swagger.js.map