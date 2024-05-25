// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  jwt.sign(
    { name: req.body.name, id: crypto.randomUUID() },
    'secret',
    { expiresIn: '6h' },
    (err, token) => {
      if (err) {
        res.status(500).end();
      } else {
        res.status(200).json({ token });
      }
    },
  );
}
