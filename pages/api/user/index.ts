import { NextApiRequest, NextApiResponse } from 'next';

export interface UserProfile {
  name: string;
  age: number;
  birthDate: Date;
  sex: string;
  cep: string;
  currentHeight: number;
  currentBodyFat: number;
  address: string;
  bloodType: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const profile: UserProfile = {
    name: 'Fulano da Silva',
    age: 17,
    sex: 'Masculino',
    birthDate: new Date('2010-12-29'),
    currentHeight: 1.72,
    currentBodyFat: 0.134,
    address: 'Rua Senador Vergueiro, Flamengo',
    cep: '22230-001',
    bloodType: 'A+',
  };

  res.status(200).json({ ...profile });
}
