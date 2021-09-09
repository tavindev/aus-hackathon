import moment from 'moment';

interface ExamCardProps {
  label: string;
  date: Date;
  status: number;
  i: number;
}

const STATUS_CODES = { 1: 'Agendado', 2: 'Pendente', 3: 'Entregue' };

export const ExamCard: React.FC<ExamCardProps> = ({
  date,
  label,
  status,
  i,
}) => {
  return (
    <div
      className={`flex justify-between items-center mb-4 ${
        i % 2 === 0 && 'bg-gray-50'
      }`}
    >
      <div>
        <div>
          <h3 className="text-md font-bold">{label}</h3>
        </div>
        <div className="mt-1">
          <p className="text-xs">{moment(date).format('DD MMM, YYYY HH:mm')}</p>
        </div>
      </div>
      <div className="flex items-center rounded h-8 px-2">
        <p>{STATUS_CODES[status]}</p>
      </div>
    </div>
  );
};
