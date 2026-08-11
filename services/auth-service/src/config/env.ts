import "dotenv/config";

import { createEnv, z } from "@chatapp/common";

const envSchema = z.object({
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
    AUTH_SERVICE_PORT: z.coerce.number().int().default(4000),
});