import { createApp } from "@/app.js";
import { createServer } from "http";
import { env } from "@/config/env.js";

const main = async()=> {
    try {
        const app = createApp();
        const server = createServer(app);

        const port = env.AUTH_SERVICE_PORT
    } catch (error) {

    }
}

main();