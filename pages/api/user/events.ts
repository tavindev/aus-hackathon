import { NextApiRequest, NextApiResponse } from 'next';

export interface Event {
  name: string;
  description: string;
  date: Date;
}

export interface EventsResposne {
  events: Event[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const events: Event[] = [
    {
      name: 'Exame de Sangue',
      description: 'Seu exame está agendado na clínica do Rio de Janeiro',
      date: new Date('2051-12-07'),
    },
    {
      name: 'Exame de Próstata',
      description: 'Seu exame está agendado na clínica do Rio de Janeiro',
      date: new Date('2051-02-09'),
    },
    {
      name: 'Vacinação contra Covid-52',
      description: 'Seu exame está agendado na clínica do Rio de Janeiro',
      date: new Date('2051-10-27'),
    },
    {
      name: 'Tumografia',
      description: 'Seu exame está agendado na clínica do Rio de Janeiro',
      date: new Date('2051-08-30'),
    },
  ];

  res.json({ events });
}
