import { NutritionChart } from 'components/UserPage/NutritionChart';
import { DietObject } from 'pages/api/user/metrics';

interface NutritionProps {
  diet: DietObject;
}

export const Nutrition: React.FC<NutritionProps> = ({ diet }) => {
  return (
    <div className="p-8 h-full overflow-hidden overflow-y-auto w-full">
      <div>
        <h2 className="text-lg font-bold">Dieta</h2>
      </div>
      <div className="mt-5">
        <NutritionChart
          label="Carboidratos"
          color="#119FFF"
          percentage={diet.carbs}
        />
        <NutritionChart
          label="Gorduras"
          color="#22FA31"
          percentage={diet.fat}
        />
        <NutritionChart
          label="Proteínas"
          color="#B81111"
          percentage={diet.prot}
        />
        <NutritionChart
          label="Vitaminas"
          color="#B811F1"
          percentage={diet.vitam}
        />
      </div>
    </div>
  );
};
