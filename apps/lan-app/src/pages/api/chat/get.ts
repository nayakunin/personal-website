import type { NextApiRequest, NextApiResponse } from 'next';

import { database } from '@/backend/database';
import { Message, WithId } from '@/backend/types';

type Data = {
  messages: WithId<Message>[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ messages: database.chat });
}
