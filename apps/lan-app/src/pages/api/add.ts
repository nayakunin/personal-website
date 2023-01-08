// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { database } from '../../backend/database';

type Data = {
  buffer: number[];
};

let count = 0;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  database.buffer.push(count++);
  res.status(200).json({ buffer: database.buffer });
}
