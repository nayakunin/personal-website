import { router } from '../trpc';
import { auth } from './auth';
import { chat } from './chat';

export const appRouter = router({
  auth,
  chat,
});

// export type definition of API
export type AppRouter = typeof appRouter;
