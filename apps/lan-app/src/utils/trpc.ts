import { httpBatchLink } from '@trpc/client';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { createWSClient, wsLink } from '@trpc/client/links/wsLink';
import { createTRPCNext } from '@trpc/next';
import { NextPageContext } from 'next';
import getConfig from 'next/config';

import type { AppRouter } from '@/backend/routers/_app';

const { publicRuntimeConfig } = getConfig();

const { APP_URL, WS_URL } = publicRuntimeConfig;

function getEndingLink(ctx: NextPageContext | undefined) {
  if (typeof window === 'undefined') {
    return httpBatchLink({
      url: `${APP_URL}/api/trpc`,
      headers() {
        if (ctx?.req) {
          const token = localStorage.getItem('jwt') || '';

          // on ssr, forward client's headers to the server
          return {
            ...ctx.req.headers,
            Authorization: token,
            'x-ssr': '1',
          };
        }
        return {};
      },
    });
  }
  const client = createWSClient({
    url: WS_URL,
  });
  return wsLink<AppRouter>({
    client,
  });
}

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links: [
        // adds pretty logs to your console in development and logs errors in production
        loggerLink({
          enabled: (opts) =>
            // eslint-disable-next-line turbo/no-undeclared-env-vars
            (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        getEndingLink(ctx),
      ],
    };
  },
  ssr: false,
});
