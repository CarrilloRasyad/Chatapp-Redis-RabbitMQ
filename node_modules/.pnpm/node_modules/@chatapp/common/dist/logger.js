import pino from 'pino';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
export const createLogger = (options) => {
    const { name, ...rest } = options;
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
    });
};
//# sourceMappingURL=logger.js.map