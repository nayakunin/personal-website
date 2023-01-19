import { inferAsyncReturnType } from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { NodeHTTPCreateContextFnOptions } from '@trpc/server/dist/adapters/node-http';
import { IncomingMessage } from 'http';
import jwt from 'jsonwebtoken';
import ws from 'ws';

export async function createContext({
  req,
}: trpcNext.CreateNextContextOptions | NodeHTTPCreateContextFnOptions<IncomingMessage, ws>) {
  async function getUserFromHeader() {
    if (req.headers.authorization) {
      const token = req.headers.authorization;
      try {
        const decoded = jwt.verify(token, 'secret');
        return decoded;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log('here', err);
      }
    }
    return null;
  }
  const user = await getUserFromHeader();

  return {
    user,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
