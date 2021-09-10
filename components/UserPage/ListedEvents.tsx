import { AnimatePresence, motion } from 'framer-motion';
import moment from 'moment';
import Image from 'next/image';
import React, { useState } from 'react';

interface ListedEventsProps {
  name: string;
  description: string;
  date: Date;
  i: number;
}

export const ListedEvents: React.FC<ListedEventsProps> = ({
  name,
  date,
  description,
  i,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      layout
      onClick={toggleOpen}
      className={`flex items-center px-4 w-full cursor-pointer overflow-hidden ${
        i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
      }`}
    >
      <motion.div
        layout="position"
        className="relative h-4 w-4"
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        <Image src="/plus_icon.svg" layout="fill" />
      </motion.div>
      <motion.div className="flex-grow overflow-hidden ml-3">
        <motion.div
          className="flex flex-grow justify-between items-center h-12"
          layout="position"
        >
          <p>{name}</p>
          <p>{moment(date).format('D MMM, YYYY')}</p>
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm pb-2"
            >
              <p>{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
