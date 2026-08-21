export declare class HttpError extends Error {
    readonly statusCode: number;
    readonly details?: Record<string, unknown> | undefined;
    constructor(statusCode: number, message: string, details?: Record<string, unknown> | undefined);
}
//# sourceMappingURL=http-errors.d.ts.map