import { NextApiRequest, NextApiResponse } from 'next';

export interface UserProfile {
  name: string;
  age: number;
  sex: string;
  cep: string;
  currentHeight: number;
  currentBodyFat: number;
  address: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const profile: UserProfile = {
    name: 'Fulano da Silva',
    age: 17,
    sex: 'Masculino',
    currentHeight: 1.72,
    currentBodyFat: 0.134,
    address: 'Rua Senador Vergueiro, Flamengo',
    cep: '22230-001',
  };

  res.status(200).json({ ...profile });
}
