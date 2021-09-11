import { NextApiRequest, NextApiResponse } from 'next';

export type Medicine = { name: string; description: string; next: string };

export interface Medicines {
  medicines: Medicine[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const medicines: Medicines = {
    medicines: [
      {
        name: 'Insulina',
        description: 'Remédio para o controle de glicose na corrente sanguínea',
        next: 'Após refeição',
      },
    ],
  };

  res.status(200).json({ ...medicines });
}
