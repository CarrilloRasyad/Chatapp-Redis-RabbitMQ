import {z} from "zod";
import { HttpError } from "../errors/http-error.js";

import type {NextFunction, Request, Response} from "express";
import type { AnyZodObject, ZodError, ZodTypeAny } from "zod";

type Schema = AnyZodObject | ZodTypeAny;
type ParamsRecord = Record<string, string>;
type QueryRecord = Record<string, unknown>;

export interface RequestValidationSchemas {
    body?: Schema;
    params?: Schema;
    query?: Schema;
}