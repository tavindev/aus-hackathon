import { NextApiRequest, NextApiResponse } from 'next';

export interface UserProfile {
  name: string;
  age: number;
  birthDate: Date;
  sex: string;
  cep: string;
  currentHeight: number;
  currentBodyFat: number;
  currentWeight: number;
  address: string;
  bloodType: string;
  skinType: string;
  medical: {
    diagnosedDeseases: string[];
    geneticBias: string[];
    psychiatricConditions: string[];
    alergies: string[];
    cirurgies: string[];
  };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const profile: UserProfile = {
    name: 'Fulano da Silva',
    age: 38,
    sex: 'Masculino',
    birthDate: new Date('2010-12-29'),
    currentWeight: 79,
    currentHeight: 1.74,
    currentBodyFat: 0.145,
    address: 'Rua Senador Vergueiro, Flamengo',
    cep: '22230-001',
    bloodType: 'B-',
    skinType: 'Negra',
    medical: {
      diagnosedDeseases: ['Diabete Tipo I'],
      geneticBias: ['Arritimia Cardíaca', 'Hipotiroidismo'],
      psychiatricConditions: ['Esquizofrenia'],
      alergies: ['Rinite Alérgica', 'Abelha', 'Cloridrato de Amiodarona'],
      cirurgies: ['Remoção de Amígdalas'],
    },
  };

  res.status(200).json({ ...profile });
}
