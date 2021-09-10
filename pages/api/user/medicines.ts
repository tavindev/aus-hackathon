import { NextApiRequest, NextApiResponse } from 'next';

export type Medicine = { name: string; description: string; next: string };

export interface Medicines {
  medicines: Medicine[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const medicines: Medicines = {
    medicines: [
      {
        name: 'Paracetamol',
        description: 'Remédio para X (de 8 em 8 horas)',
        next: '15:30',
      },
    ],
  };

  res.status(200).json({ ...medicines });
}
