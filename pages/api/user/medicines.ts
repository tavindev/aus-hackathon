import { NextApiRequest, NextApiResponse } from 'next';

export type Medicine = { name: string; description: string };

export interface Medicines {
  medicines: Medicine[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const medicines: Medicines = {
    medicines: [
      {
        name: 'Paracetamol',
        description: 'Dummy Description',
      },
    ],
  };

  res.status(200).json({ ...medicines });
}
