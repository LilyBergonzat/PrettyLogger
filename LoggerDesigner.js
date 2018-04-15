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
        const date = Date.now().toString();
        let prefix = date + ' - ' + level.toUpperCase();
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
