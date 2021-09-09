interface ExamCardProps {
  label: string;
  date: string;
}

export const ExamCard: React.FC<ExamCardProps> = ({ date, label }) => {
  return (
    <div className="flex justify-between mb-4">
      <div>
        <div>
          <h3 className="text-md font-bold">{label}</h3>
        </div>
        <div className="mt-1">
          <p className="text-xs">{date}</p>
        </div>
      </div>
      <div className="flex items-center rounded h-8 bg-green-600 p-1">
        <p>Entregue</p>
      </div>
    </div>
  );
};
