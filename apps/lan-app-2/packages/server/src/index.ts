import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';

import { createContext } from './context.js';
import { appRouter } from './server.js';
import { startServer } from './utils.js';

const app = express();
const port = 8080;
const optionsHost: string | boolean | undefined =
  process.argv[2] === '--host' ? process.argv[3] || true : undefined;

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

startServer(app, port, optionsHost);
