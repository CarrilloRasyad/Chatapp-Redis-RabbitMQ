npm install --save-dev pino-pretty (untuk production di logger pino nya logger.ts)
pnpm --filter ./services/auth-service/ dev (untuk running port auth service)
pnpm add cors helmet --filter ./services/auth-service/ (install helmet & cors for auth service)
pnpm --filter ./packages/common/ build (setiap ada penambahan jalankan untuk di build ulang)