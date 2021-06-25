"use strict";
/**
 * Se definen las rutas para los servicios API
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Alphabet_1 = require("../controllers/Alphabet");
const Alphabet_2 = require("../validators/Alphabet");
const router = express_1.Router();
router.post('/alphabet/validate', Alphabet_2.default.validate(), Alphabet_1.default.perform);
exports.default = router;
//# sourceMappingURL=Api.js.map