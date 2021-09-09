import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

interface MedicationProps {
  name: string;
  description: string;
}

export const Medication: React.FC<MedicationProps> = ({
  name,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      layout="position"
      onClick={toggleOpen}
      className="w-1/2 bg-gray-100 overflow-hidden rounded cursor-pointer p-3 box-border"
    >
      <motion.div className="flex items-center justify-between h-8">
        <p className="text-sm font-bold">{name}</p>
        <div
          className={`${
            isOpen ? 'bg-red-500' : 'bg-green-500'
          } text-sm text-white font-bold p-1 rounded`}
        >
          {isOpen ? 'Fechar' : 'Abrir'}
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center text-xs">
              <p>{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
