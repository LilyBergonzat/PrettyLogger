import LoggerDesigner from './LoggerDesigner';

export class Logger {
    public static info(log: string)
    {
        console.info(LogStyle.FOREGROUND_GREEN + LoggerDesigner.design(log, LogLevel.INFO) + LogStyle.RESET);
    }

    public static error(log: string | Error)
    {
        console.info(LogStyle.FOREGROUND_RED + LoggerDesigner.design(log, LogLevel.ERROR) + LogStyle.RESET);
    }

    /**
     * @param {String} log
     */
    public static warning(log: string)
    {
        console.info(LogStyle.FOREGROUND_YELLOW + LoggerDesigner.design(log, LogLevel.WARNING) + LogStyle.RESET);
    }

    /**
     * @param {String} log
     */
    public static notice(log: string)
    {
        console.info(LogStyle.FOREGROUND_BLUE + LoggerDesigner.design(log, LogLevel.NOTICE) + LogStyle.RESET);
    }

    /**
     * @param {Error} error
     */
    public static exception(error: Error) {
        console.error('', LogStyle.BOLD_ON);
        console.error(LoggerDesigner.design('Exception log', LogLevel.EXCEPTION));
        console.error(`${LogStyle.BACKGROUND_RED}                              `);
        console.error(` Ugh. What... What happenned? ${LogStyle.BACKGROUND_RESET}${LogStyle.RESET} `);
        console.error(`${LogStyle.BACKGROUND_RED}                              ${LogStyle.RESET} `);
        console.error(' ', error, '');
    }

    public static debug(element: any) {
        console.log('', LogStyle.BOLD_ON);
        console.log(LoggerDesigner.design('Debug log', LogLevel.DEBUG));
        console.log(`${LogStyle.BACKGROUND_GREEN}                                        `);
        console.log(` Wait, I wanna see that more clearly... ${LogStyle.BACKGROUND_RESET}${LogStyle.RESET} `);
        console.log(`${LogStyle.BACKGROUND_GREEN}                                        ${LogStyle.RESET} `);
        console.log(' ', element, '');
    }
}

export default Logger;

enum LogLevel {
    INFO = 'info',
    WARNING = 'warning',
    ERROR = 'error',
    NOTICE = 'notice',
    EXCEPTION = 'exception',
    DEBUG = 'debug'
}

enum LogStyle {
    RESET = '\x1b[0m',
    BOLD_ON = '\x1b[1m',
    BOLD_OFF = '\x1b[22m',
    INVERSE_ON = '\x1b[7m',
    FOREGROUND_BLACK = '\x1b[30m',
    FOREGROUND_RED = '\x1b[31m',
    FOREGROUND_GREEN = '\x1b[32m',
    FOREGROUND_YELLOW = '\x1b[33m',
    FOREGROUND_BLUE = '\x1b[34m',
    FOREGROUND_MAGENTA = '\x1b[35m',
    FOREGROUND_CYAN = '\x1b[36m',
    FOREGROUND_WHITE = '\x1b[33m',
    BACKGROUND_RESET = '\x1b[49m',
    BACKGROUND_RED = '\x1b[41m',
    BACKGROUND_GREEN = '\x1b[42m'
}
