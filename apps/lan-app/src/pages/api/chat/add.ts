import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';

import { database } from '@/backend/database';
import { Message, WithId } from '@/backend/types';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = jwt.decode(req.body.token) as unknown as { name: string, id: string };

  const message: WithId<Message> = {
    id: crypto.randomUUID(),
    text: req.body.text,
    author: user,
    timestamp: Date.now(),
  };

  database.chat.push(message);
  res.status(200).end();
}
