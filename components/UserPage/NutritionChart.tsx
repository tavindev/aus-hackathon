interface NutritionChartProps {
  label: string;
  color: string;
  percentage: string;
}

export const NutritionChart: React.FC<NutritionChartProps> = ({
  color,
  label,
  percentage,
}) => {
  return (
    <div className="w-full pb-3">
      <div
        className="rounded h-6"
        style={{ background: color, width: percentage }}
      />
      <p className="text-sm pt-1">{label + ' - ' + percentage}</p>
    </div>
  );
};
