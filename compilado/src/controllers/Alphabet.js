"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Alphabet_1 = require("../services/Alphabet");
/**
 * Define controlador para la sopa de letras
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */
class Alphabet {
    static perform(req, res) {
        const errors = req.validationErrors();
        if (errors) {
            return res.json({
                errors
            });
        }
        const body = req.body;
        const matrix = body.matrix;
        const word = body.word;
        const alphabeteService = new Alphabet_1.default(matrix);
        const amount = alphabeteService.solve(word);
        res.json({
            response: amount
        });
    }
}
exports.default = Alphabet;
//# sourceMappingURL=Alphabet.js.map