import {createLogger} from '@chatapp/common/src/logger.js';
import type { Logger } from '@chatapp/common';

export const logger: Logger = createLogger({name: "auth-service"});