import winston from 'winston';
import dateformat from 'dateformat';
import expressWinston from 'express-winston';

const levelConfig = {
  levels: { error: 0, warn: 1, info: 2, database: 3, debug: 4, verbose: 5, input: 6 },
  colors: { error: 'red', warn: 'yellow', info: 'green', database: 'magenta', debug: 'blue', verbose: 'cyan', input: 'grey' },
};

winston.addColors(levelConfig.colors);

export const activityTransport = new winston.transports.Console({
  name: 'all-console',
  level: 'input',
  colorize: true,
  timestamp: () => {
    return dateformat(new Date(), 'isoUtcDateTime');
  },
  formatter: (options) => {
    if (options.level !== 'error') {
      return `${winston.config.colorize(options.level, options.level.toUpperCase())} | ${options.timestamp()} | ${options.message || JSON.stringify(options.meta)}`;
    }
    return `${winston.config.colorize(options.level, options.level.toUpperCase())} | ${options.timestamp()} | error occured`;
  },
});

export const winstonExpressTransport = new winston.transports.Console({
  name: 'all-console',
  level: 'debug',
  colorize: true,
  timestamp: () => {
    return dateformat(new Date(), 'isoUtcDateTime');
  },
  formatter: (options) => {
    return `${winston.config.colorize(options.level, options.level.toUpperCase())} | ${options.timestamp()} | ${options.message} | ${options.meta.responseTime} ms | ${options.meta.res.statusCode}`;
  },
});

export const errorTransport = new winston.transports.Console({
  name: 'error-console',
  level: 'error',
  colorize: true,
});

export const activityFileTransport = new winston.transports.File({
  name: 'all-file',
  level: 'debug',
  json: true,
  filename: './logs/activity.log',
  maxsize: 5 * 1024 * 1024,
  maxFiles: 10,
});

export const errorFileTransport = new winston.transports.File({
  name: 'error-file',
  level: 'error',
  json: true,
  filename: './logs/error.log',
  maxsize: 5 * 1024 * 1024,
  maxFiles: 10,
});

export const expressLogger = expressWinston.logger({
  transports: [winstonExpressTransport, activityFileTransport],
});

export const expressErrorLogger = expressWinston.errorLogger({
  transports: [errorTransport, errorFileTransport],
});

export const logger = new winston.Logger({
  levels: levelConfig.levels,
  transports: [activityTransport, errorTransport],
  exitOnError: false,
});