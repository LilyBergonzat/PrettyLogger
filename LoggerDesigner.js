/**
 * @param {Number} n
 * @param {Number} width
 * @returns {String}
 */
const pad = (n, width) => {
    n = n.toString();

    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
};

class LoggerDesigner {
    constructor()
    {
        LoggerDesigner.instance = this;
    }

    static getInstance() {
        if (LoggerDesigner.instance === null) {
            LoggerDesigner.instance = new LoggerDesigner();
        }

        return LoggerDesigner.instance;
    }

    /**
     * @param {String} log
     * @param {String} level
     */
    design(log, level)
    {
        const date = new Date();
        let dateString = date.getFullYear() + '-' + pad(date.getMonth() + 1, 2) + '-' + pad(date.getDate(), 2) + ' ';
        dateString += pad(date.getHours(), 2) + ':' + pad(date.getMinutes(), 2) + ':' + pad(date.getSeconds(), 2);
        log = log.toString();

        let prefix = dateString + ' - ' + level.toUpperCase();
        let logLines = log.split('\n');

        for (let i = prefix.length; i < LoggerDesigner.PREFIX_LENGTH; i++) {
            prefix += ' ';
        }

        logLines = logLines.map(function (line) {
            return prefix + ' | ' + line;
        });

        return logLines.join('\n ');
    }
}

LoggerDesigner.instance = null;
LoggerDesigner.PREFIX_LENGTH = 40;

module.exports = LoggerDesigner;
