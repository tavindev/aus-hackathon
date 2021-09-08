import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

interface MedicationProps {
  name: string;
}

export const Medication: React.FC<MedicationProps> = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      layout
      onClick={toggleOpen}
      className="h-10 w-1/3 bg-gray-100 overflow-hidden rounded"
    >
      <div className="flex items-center h-full mx-4">
        <p className="text-sm font-bold">{name}</p>
      </div>
    </motion.div>
  );
};
