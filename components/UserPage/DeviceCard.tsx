import { IconType } from 'react-icons';

interface DeviceCardProps {
  label: string;
  Icon: IconType;
}

export const DeviceCard: React.FC<DeviceCardProps> = ({ Icon, label }) => {
  return (
    <div className="flex flex-col w-56 h-56 bg-blue-700 rounded-lg">
      <div className="flex justify-center items-center w-full h-2/3">
        <Icon color="white" size={96} />
      </div>
      <div className="flex justify-center items-center text-white font-bold text-lg w-full">
        <h3>{label}</h3>
      </div>
    </div>
  );
};
