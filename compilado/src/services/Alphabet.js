"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Log_1 = require("../middlewares/Log");
/**
 * Lógica para calcular cantidad de coincidencias de una palabra
 * en la sopa de letras utilizando Backtracking
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */
class Alphabet {
    constructor(matriz) {
        this.matrix = matriz;
    }
    setMatrix(matrix) {
        this.matrix = matrix;
    }
    /**
     * Retorna la cantidad de coincidencias de la palabra en la sopa de letras
     * @param word Palabra a buscar
     * @returns Cantidad de coincidencias
     */
    solve(word) {
        word = word === null || word === void 0 ? void 0 : word.toUpperCase();
        const solutions = this.findPossibleSolutions(word);
        let amount = 0;
        solutions.forEach((value, index) => {
            // Buscar horizontalmente hacia derecha.
            amount += Number(this.wordInMatrix(solutions[index], word.length, 0, 1) === word);
            // Buscar horizontalmente hacia izquierda.
            amount += Number(this.wordInMatrix(solutions[index], word.length, 0, -1) === word);
            // Buscar verticalmente hacia abajo.
            amount += Number(this.wordInMatrix(solutions[index], word.length, 1, 0) === word);
            // Buscar verticalmente hacia arriba.
            amount += Number(this.wordInMatrix(solutions[index], word.length, -1, 0) === word);
            // Buscar diagonal superior derecha.
            amount += Number(this.wordInMatrix(solutions[index], word.length, -1, 1) === word);
            // Buscar diagonal superior izquierda.
            amount += Number(this.wordInMatrix(solutions[index], word.length, -1, -1) === word);
            // Buscar diagonal inferior derecha.
            amount += Number(this.wordInMatrix(solutions[index], word.length, 1, 1) === word);
            // Buscar diagonal inferior izquierda.
            amount += Number(this.wordInMatrix(solutions[index], word.length, 1, -1) === word);
        });
        Log_1.default.info(`La cantidad de coincidencias para la palabra ${word} son ${amount}`);
        return amount;
    }
    findPossibleSolutions(word) {
        const firstCharacter = word.charAt(0);
        const positions = [];
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j].toUpperCase() === firstCharacter) {
                    positions.push([i, j]);
                }
            }
        }
        return positions;
    }
    wordInMatrix(posInicial, charactersNumber, moveInRow, moveInColumn) {
        let word = '';
        let path = 0;
        let row = posInicial[0];
        let column = posInicial[1];
        while ((path < charactersNumber) &&
            (row < this.matrix.length && column < this.matrix[0].length) &&
            (row > -1 && column > -1)) {
            word += this.matrix[row][column].toUpperCase();
            row = row + moveInRow;
            column = column + moveInColumn;
            path++;
        }
        return word;
    }
}
exports.default = Alphabet;
//# sourceMappingURL=Alphabet.js.map