import TelegramBot from 'node-telegram-bot-api';

import { env } from '@/env';

import { Subscription } from './types';

const bot = new TelegramBot(env.TELEGRAM_SUBSCRIPTIONS_BOT_TOKEN);

const formatCurrency = (amount: string) => {
  return Number(amount).toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
  });
};

export const alertSubscriptions = (subs: Subscription[]) => {
  return new Promise((resolve, reject) => {
    try {
      bot.sendMessage(
        env.TELEGRAM_CHAT_ID_NIKITA,
        `Alert! Subscriptions to be deducted tomorrow:\n\n${subs
          .map(
            ({ name, email, amount }) =>
              `Name: ${name}\nEmail: ${email}\nAmount: ${formatCurrency(amount)}\n`
          )
          .join('\n')}`
      );
      console.log('Message sent');
      resolve(undefined);
    } catch {
      reject();
    }
  });
};
