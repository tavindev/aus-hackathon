import { Medication } from 'components/UserPage/Medication';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React, { useState } from 'react';

const items = [
  {
    name: 'Paracetamol',
    description: 'Dummy description',
  },
  {
    name: 'Novalgina',
    description: 'Tomar de 8 em 8 horas',
  },
  {
    name: 'Soro',
    description: 'Tomar de noite',
  },
];

export const MedicationList: React.FC = () => {
  return (
    <div className="flex flex-col p-6 h-full overflow-hidden w-full">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Medicamentos</h2>
      </div>
      <div className="w-full flex-grow">
        <AnimateSharedLayout>
          <motion.div
            layout
            className="flex flex-col flex-wrap h-full overflow-y-hidden overflow-x-scroll gap-2"
          >
            {items.map(({ name, description }, i) => {
              return (
                <Medication key={i} name={name} description={description} />
              );
            })}
          </motion.div>
        </AnimateSharedLayout>
      </div>
    </div>
  );
};
