interface NutritionChartProps {
  label: string;
  color: string;
  percentage: number;
}

export const NutritionChart: React.FC<NutritionChartProps> = ({
  color,
  label,
  percentage,
}) => {
  const stringPercentage = (percentage * 100).toString() + '%';
  return (
    <div className="w-full pb-3">
      <div
        className="rounded h-6"
        style={{
          background: color,
          width: stringPercentage,
        }}
      />
      <p className="text-sm pt-1">{label + ' - ' + stringPercentage}</p>
    </div>
  );
};
