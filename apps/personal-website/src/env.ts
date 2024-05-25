import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    TELEGRAM_SUBSCRIPTIONS_BOT_TOKEN: z.string(),
    TELEGRAM_CHAT_ID_NIKITA: z.string(),
    SUBSCRIPTIONS_GOOGLE_SHEET_ID: z.string(),
    SUBSCRIPTIONS_GOOGLE_SHEET_MONTHLY: z.string(),
    SUBSCRIPTIONS_GOOGLE_SHEET_ANUAL: z.string(),
    GCP_SERVICE_ACCOUNT_CREDENTIALS_JSON: z.string(),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {},
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    TELEGRAM_SUBSCRIPTIONS_BOT_TOKEN: process.env.TELEGRAM_SUBSCRIPTIONS_BOT_TOKEN,
    TELEGRAM_CHAT_ID_NIKITA: process.env.TELEGRAM_CHAT_ID_NIKITA,
    SUBSCRIPTIONS_GOOGLE_SHEET_ID: process.env.SUBSCRIPTIONS_GOOGLE_SHEET_ID,
    SUBSCRIPTIONS_GOOGLE_SHEET_MONTHLY: process.env.SUBSCRIPTIONS_GOOGLE_SHEET_MONTHLY,
    SUBSCRIPTIONS_GOOGLE_SHEET_ANUAL: process.env.SUBSCRIPTIONS_GOOGLE_SHEET_ANUAL,
    GCP_SERVICE_ACCOUNT_CREDENTIALS_JSON: process.env.GCP_SERVICE_ACCOUNT_CREDENTIALS_JSON,
  },
});
