const LogStyle = require('./LogStyle');
const LoggerDesigner = require('./LoggerDesigner');
const LogLevel = require('./LogLevel');

class Logger {
    /**
     * @param {String} log
     */
    static info(log)
    {
        console.info(LogStyle.FOREGROUND_GREEN + LoggerDesigner.getInstance().design(log, LogLevel.INFO) + LogStyle.RESET);
    }

    /**
     * @param {String} log
     */
    static error(log)
    {
        console.info(LogStyle.FOREGROUND_RED + LoggerDesigner.getInstance().design(log, LogLevel.ERROR) + LogStyle.RESET);
    }

    /**
     * @param {String} log
     */
    static warning(log)
    {
        console.info(LogStyle.FOREGROUND_YELLOW + LoggerDesigner.getInstance().design(log, LogLevel.WARNING) + LogStyle.RESET);
    }

    /**
     * @param {String} log
     */
    static notice(log)
    {
        console.info(LogStyle.FOREGROUND_BLUE + LoggerDesigner.getInstance().design(log, LogLevel.NOTICE) + LogStyle.RESET);
    }

    /**
     * @param {Error} error
     */
    static exception(error) {
        console.error('', LogStyle.BOLD_ON);
        console.error(LogStyle.BACKGROUND_RED, '                             ');
        console.error(' Ugh. What... What happenned? ');
        console.error('                             ', LogStyle.RESET);
        console.error(' ', error, '');
    }

    static debug(element) {
        console.log('', LogStyle.BOLD_ON);
        console.log(LogStyle.BACKGROUND_GREEN, '                                       ');
        console.log(' Wait, I wanna see that more clearly... ');
        console.log('                                       ', LogStyle.RESET);
        console.log(' ', element, '');
    }
}

module.exports = Logger;
