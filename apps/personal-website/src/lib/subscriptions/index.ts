/* eslint-disable no-console */
import { add, parse, startOfTomorrow } from 'date-fns';

import { env } from '@/env';

import { getSpreadsheetData } from './sheets-api';
import { Subscription } from './types';

export const getTomorrowAnualSubscriptions = async (): Promise<Subscription[]> => {
  const result = [] as Subscription[];
  try {
    const reply = await getSpreadsheetData(
      env.SUBSCRIPTIONS_GOOGLE_SHEET_ID,
      env.SUBSCRIPTIONS_GOOGLE_SHEET_ANUAL
    );

    if (!reply) return [];

    // Remove headers
    reply.shift();

    if (!reply.length) {
      console.log('No data found.');
      return [];
    }

    for (const row of reply) {
      const [name, amount, date, _, email] = row;

      const tomorrowDate = startOfTomorrow();
      const parsedDate = parse(date, 'dd LLL', tomorrowDate).setFullYear(
        tomorrowDate.getFullYear()
      );

      if (new Date(parsedDate) <= add(tomorrowDate, { days: 1 })) continue;

      result.push({
        name,
        email,
        amount,
      });
    }
  } catch {}

  return result;
};

export const getTomorrowMonthlySubscriptions = async (): Promise<Subscription[]> => {
  const result = [] as Subscription[];
  try {
    const reply = await getSpreadsheetData(
      env.SUBSCRIPTIONS_GOOGLE_SHEET_ID,
      env.SUBSCRIPTIONS_GOOGLE_SHEET_MONTHLY
    );

    if (!reply) return [];

    // Remove headers
    reply.shift();

    if (!reply.length) {
      console.log('No data found.');
      return [];
    }

    for (const row of reply) {
      const [name, amount, date, _, email] = row;

      const tomorrowDate = startOfTomorrow().getDate();
      const parsedDate = Number(date.split(' ')[0]);

      if (tomorrowDate !== parsedDate) continue;

      result.push({
        name,
        email,
        amount,
      });
    }
  } catch {}

  return result;
};

export type { Subscription };
export * from './telegram-bot';
