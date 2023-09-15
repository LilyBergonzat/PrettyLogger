const pad = (n: number, width: number) => {
    const stringified = n.toString();

    return stringified.length >= width ? stringified : `${new Array(width).join('0')}${n}`.slice(-width);
};

class LoggerDesigner {
    private static instance: LoggerDesigner;
    private static PREFIX_LENGTH = 35;

    constructor()
    {
        if (LoggerDesigner.instance !== null) {
            return LoggerDesigner.instance;
        }

        LoggerDesigner.instance = this;
    }

    public design(log: Error | string, level: string)
    {
        const error = typeof log === 'string' ? null : log;
        const message = log.toString();

        const date = new Date();
        let dateString = date.getFullYear() + '-' + pad(date.getMonth() + 1, 2) + '-' + pad(date.getDate(), 2) + ' ';
        dateString += pad(date.getHours(), 2) + ':' + pad(date.getMinutes(), 2) + ':' + pad(date.getSeconds(), 2);

        let prefix = dateString + ' - ' + level.toUpperCase();
        let logLines = message.split('\n');

        if (error && error.stack) {
            const stack = error.stack.split('\n');

            stack.shift();

            const relevantLine = stack.find(line => !line.includes('node_modules') && !line.includes('node:internal'));

            logLines.push(relevantLine ?? stack[0]);
        }

        for (let i = prefix.length; i < LoggerDesigner.PREFIX_LENGTH; i++) {
            prefix += ' ';
        }

        logLines = logLines.map(function (line) {
            return prefix + ' | ' + line;
        });

        return logLines.join('\n');
    }
}

export default new LoggerDesigner();
