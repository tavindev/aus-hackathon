import { Medication } from 'components/UserPage/Medication';
import { AnimateSharedLayout, motion } from 'framer-motion';

export const MedicationList: React.FC = () => {
  return (
    <div className="p-8 h-full overflow-hidden w-full">
      <div>
        <h2 className="text-lg font-bold">Medicamentos</h2>
      </div>
      <div className="mt-5">
        <AnimateSharedLayout>
          <motion.div
            layout
            className="flex gap-4 min-h-full overflow-y-scroll"
          >
            <Medication name="Paracetamol" />
            <Medication name="Novalgina" />
            <Medication name="Soro" />
          </motion.div>
        </AnimateSharedLayout>
      </div>
    </div>
  );
};
