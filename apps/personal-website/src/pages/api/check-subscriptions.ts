/* eslint-disable no-console */
import type { NextApiRequest, NextApiResponse } from 'next';

import {
  alertSubscriptions,
  getTomorrowAnualSubscriptions,
  getTomorrowMonthlySubscriptions,
  Subscription,
} from '@/lib/subscriptions';

export default async function handler(req: NextApiRequest, res: NextApiResponse<void>) {
  const results = await Promise.allSettled([
    getTomorrowMonthlySubscriptions(),
    getTomorrowAnualSubscriptions(),
  ]);

  console.log(results);

  const subs = [] as Subscription[];

  for (const result of results) {
    if (result.status === 'rejected') {
      console.error(result.reason);
      return;
    }

    for (const subscription of result.value) {
      subs.push(subscription);
    }
  }

  if (!subs.length) {
    res.status(200).end();
    return;
  }

  alertSubscriptions(subs);

  console.log(JSON.stringify(subs, null, 2));

  res.status(200).end();
}
