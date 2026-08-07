"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEnv = void 0;
const createEnv = (schema, options = {}) => {
    const { source = process.env, serviceName = "service" } = options;
    const parsed = schema.safeParse(source);
    if (!parsed.success) {
        const formattedErrors = parsed.error.format();
        throw new Error(`[${serviceName}] Environment variable validation failed: ${JSON.stringify(formattedErrors)}`);
    }
    return parsed.data;
};
exports.createEnv = createEnv;
//# sourceMappingURL=env.js.map