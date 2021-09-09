import { Medication } from 'components/UserPage/Medication';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { Medicines } from 'pages/api/user/medicines';
import React, { useState } from 'react';

interface MedicationListProps {
  medicines: Medicines;
}

export const MedicationList: React.FC<MedicationListProps> = ({
  medicines,
}) => {
  return (
    <div className="flex flex-col p-6 h-full overflow-hidden w-full">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Medicamentos</h2>
      </div>
      <div className="w-full flex-grow">
        <AnimateSharedLayout>
          <motion.div
            layout
            className="flex flex-col flex-wrap h-full overflow-hidden overflow-x-auto gap-2"
          >
            {medicines.medicines.map(({ name, description }, i) => {
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
