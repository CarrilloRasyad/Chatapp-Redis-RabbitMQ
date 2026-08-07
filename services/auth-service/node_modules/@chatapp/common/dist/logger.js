"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogger = void 0;
const pino_1 = __importDefault(require("pino"));
const createLogger = (options) => {
    const { name, ...rest } = options;
    const transport = process.env.NODE_ENV === "development"
        ? {
            target: "pino-pretty",
            options: {
                colorsize: true,
                translateTime: "SYS:standard",
            },
        }
        : undefined;
    return (0, pino_1.default)({
        name,
        level: process.env.LOG_LEVEL || "info",
        ...rest,
        transport,
    });
};
exports.createLogger = createLogger;
//# sourceMappingURL=logger.js.map