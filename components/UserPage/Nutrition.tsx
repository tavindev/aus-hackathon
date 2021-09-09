import { NutritionChart } from 'components/UserPage/NutritionChart';

export const Nutrition: React.FC = () => {
  return (
    <div className="p-8 h-full overflow-hidden overflow-y-auto w-full">
      <div>
        <h2 className="text-lg font-bold">Dieta</h2>
      </div>
      <div className="mt-5">
        <NutritionChart label="Carboidratos" color="#119FFF" percentage="70%" />
        <NutritionChart label="Gorduras" color="#22FA31" percentage="20%" />
        <NutritionChart label="Proteínas" color="#B81111" percentage="44%" />
        <NutritionChart label="Vitaminas" color="#B811F1" percentage="8%" />
      </div>
    </div>
  );
};
