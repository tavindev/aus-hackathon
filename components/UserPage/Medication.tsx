import { AnimatePresence, motion } from 'framer-motion';
import { Medicine } from 'pages/api/user/medicines';
import React, { useState } from 'react';

export const Medication: React.FC<Medicine> = ({ name, description, next }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      layout
      onClick={toggleOpen}
      className="w-1/2 bg-gray-100 overflow-hidden rounded cursor-pointer p-3 box-border"
    >
      <motion.div
        className="flex items-center justify-between h-8"
        layout="position"
      >
        <p className="text-sm font-bold">{name}</p>
        <motion.div
          layout
          className={`${
            isOpen ? 'bg-red-500' : 'bg-green-500'
          } text-sm text-white font-bold p-1 rounded`}
        >
          <motion.div layout="position">
            {isOpen ? 'Fechar' : 'Abrir'}
          </motion.div>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center text-xs">
              <p>{description}</p>
            </div>
            <div className="flex items-center text-xs font-bold">
              <p>Próxima dose: {next}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
