import { NextApiRequest, NextApiResponse } from 'next';

export type Exam = {
  label: string;
  date: Date;
  status: number;
};

export interface ExamsResponse {
  exams: Exam[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const exams: Exam[] = [
    {
      label: 'Eletrocardiograma',
      date: new Date('2051-12-17T13:29:51'),
      status: 2,
    },
    {
      label: 'Exame de Sangue',
      date: new Date('2046-12-01T08:19:11'),
      status: 3,
    },
    {
      label: 'Exame de Sequenciamento Genético',
      date: new Date('2032-07-09T08:07:45'),
      status: 3,
    },
    {
      label: 'Ressonância Magnética',
      date: new Date('2032-01-10T19:56:43'),
      status: 3,
    },
    {
      label: 'Raio X',
      date: new Date('2032-09-25T10:07:45'),
      status: 3,
    },
  ];

  res.status(200).json({ exams });
}
