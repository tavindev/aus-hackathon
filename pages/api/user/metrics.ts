import { NextApiRequest, NextApiResponse } from 'next';

type Nutrients = 'carbs' | 'prot' | 'fat' | 'vitam';

export interface MetricObject {
  id: number;
  value: number;
}

export type DietObject = {
  [key in Nutrients]: number;
};

export interface UserMetrics {
  weight: MetricObject[];
  bpm: MetricObject[];
  exercices: MetricObject[];
  sleep: MetricObject[];
  diet: DietObject;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const metrics: UserMetrics = {
    weight: [
      { id: 1, value: 61 },
      { id: 2, value: 62 },
      { id: 3, value: 60 },
      { id: 4, value: 63 },
      { id: 5, value: 61 },
      { id: 6, value: 66 },
      { id: 7, value: 63 },
      { id: 8, value: 62 },
      { id: 9, value: 63 },
      { id: 10, value: 66 },
    ],
    bpm: [
      { id: 1, value: 90 },
      { id: 2, value: 110 },
      { id: 3, value: 79 },
      { id: 4, value: 89 },
      { id: 5, value: 82 },
      { id: 6, value: 94 },
      { id: 7, value: 101 },
      { id: 8, value: 98 },
      { id: 9, value: 83 },
      { id: 10, value: 90 },
    ],
    exercices: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 3 },
      { id: 4, value: 2 },
      { id: 5, value: 0 },
      { id: 6, value: 1 },
      { id: 7, value: 4 },
      { id: 8, value: 3 },
      { id: 9, value: 2 },
      { id: 10, value: 2 },
    ],
    sleep: [
      { id: 1, value: 7 },
      { id: 2, value: 8 },
      { id: 3, value: 8 },
      { id: 4, value: 7 },
      { id: 5, value: 9 },
      { id: 6, value: 6 },
      { id: 7, value: 10 },
      { id: 8, value: 8 },
      { id: 9, value: 9 },
      { id: 10, value: 8 },
    ],
    diet: { carbs: 0.7, fat: 0.2, prot: 0.44, vitam: 0.08 },
  };

  res.status(200).json({ ...metrics });
}
