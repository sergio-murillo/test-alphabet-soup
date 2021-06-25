"use strict";
/**
 * Crea logs
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
class Log {
    constructor() {
        this.today = new Date();
        let _dateString = `${this.today.getFullYear()}-${(this.today.getMonth() + 1)}-${this.today.getDate()}`;
        let _timeString = `${this.today.getHours()}:${this.today.getMinutes()}:${this.today.getSeconds()}`;
        this.baseDir = path.join(__dirname, '../../.logs/');
        this.fileName = `${_dateString}.log`;
        this.linePrefix = `[${_dateString} ${_timeString}]`;
    }
    // Agrega prefijo INFO al mensaje
    info(text) {
        this.addLog('INFO', text);
    }
    // Agrega prefijo WARN al mensaje
    warn(text) {
        this.addLog('WARN', text);
    }
    // Agrega prefijo ERROR al mensaje
    error(text) {
        console.log('\x1b[31m%s\x1b[0m', '[ERROR] :: ' + text.split(/r?\n/)[0]);
        this.addLog('ERROR', text);
    }
    /**
     * Crea el archivo si no existe
     */
    addLog(type, text) {
        const _that = this;
        type = type.toUpperCase();
        fs.open(`${_that.baseDir}${_that.fileName}`, 'a', (_err, _fileDescriptor) => {
            if (!_err && _fileDescriptor) {
                // Append to file and close it
                fs.appendFile(_fileDescriptor, `${_that.linePrefix} [${type}] ${text}\n`, (_err) => {
                    if (!_err) {
                        fs.close(_fileDescriptor, (_err) => {
                            if (!_err) {
                                return true;
                            }
                            else {
                                return console.log('\x1b[31m%s\x1b[0m', 'Error cerrando log');
                            }
                        });
                    }
                    else {
                        return console.log('\x1b[31m%s\x1b[0m', 'Error agregando texto al log');
                    }
                });
            }
            else {
                return console.log('\x1b[31m%s\x1b[0m', 'Error abriendo el log');
            }
        });
    }
}
exports.default = new Log;
//# sourceMappingURL=Log.js.map