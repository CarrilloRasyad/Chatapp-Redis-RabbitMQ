import pino from 'pino';

import { createRequire } from 'module';

import type { Logger, LoggerOptions } from 'pino';

const require = createRequire(import.meta.url);

type CreateLoggerOptions = LoggerOptions & {
    name: string;
};

export const createLogger = (options: CreateLoggerOptions): Logger => {
    const {name, ...rest} = options;
    
    const transport = process.env.NODE_ENV === "development"
    ? {
        target: require.resolve('pino-pretty'),
        options: {
            colorsize: true,
            translateTime: "SYS:standard",
        },
    }
    : undefined;

    return pino({
        name,
        level: process.env.LOG_LEVEL || "info",
        ...rest,
        transport,
    })
};