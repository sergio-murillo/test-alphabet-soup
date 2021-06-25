/**
 * Crea logs
 */

import * as fs from 'fs';
import * as path from 'path';

class Log {
	public baseDir: string;
	public fileName: string;
	public linePrefix: string;

	public today: Date = new Date();

	constructor() {
		let _dateString = `${this.today.getFullYear()}-${(this.today.getMonth() + 1)}-${this.today.getDate()}`;
		let _timeString = `${this.today.getHours()}:${this.today.getMinutes()}:${this.today.getSeconds()}`;

		this.baseDir = path.join(__dirname, '../../.logs/');

		this.fileName = `${_dateString}.log`;
		this.linePrefix = `[${_dateString} ${_timeString}]`;
	}

	// Agrega prefijo INFO al mensaje
	public info(text: string): void {
		this.addLog('INFO', text);
	}

	// Agrega prefijo WARN al mensaje
	public warn(text: string): void {
		this.addLog('WARN', text);
	}

	// Agrega prefijo ERROR al mensaje
	public error(text: string): void {
		console.log('\x1b[31m%s\x1b[0m', '[ERROR] :: ' + text.split(/r?\n/)[0]);

		this.addLog('ERROR', text);
	}

	/**
	 * Crea el archivo si no existe
	 */
	private addLog(type: string, text: string): void {
		const _that = this;
		type = type.toUpperCase();

		fs.open(`${_that.baseDir}${_that.fileName}`, 'a', (_err, _fileDescriptor) => {
			if (!_err && _fileDescriptor) {
				// Append to file and close it
				fs.appendFile(_fileDescriptor, `${_that.linePrefix} [${type}] ${text}\n`, (_err) => {
					if (! _err) {
						fs.close(_fileDescriptor, (_err) => {
							if (! _err) {
								return true;
							} else {
								return console.log('\x1b[31m%s\x1b[0m', 'Error cerrando log');
							}
						});
					} else {
						return console.log('\x1b[31m%s\x1b[0m', 'Error agregando texto al log');
					}
				});
			} else {
				return console.log('\x1b[31m%s\x1b[0m', 'Error abriendo el log');
			}
		});
	}
}

export default new Log;
