import React from 'react';
import { Line } from 'react-chartjs-2';

interface ChartProps {
  color: string;
  dataRange: number[];
  numberOfSets: number;
  measurement: string;
  noTension?: boolean;
  offset?: number;
}

const random = (range: number[]) => {
  return Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
};

const generateData = (range: number[], numberOfSets: number) => {
  return Array.apply(null, Array(numberOfSets)).map((_, i) => random(range));
};

export const AUSChart: React.FC<ChartProps> = ({
  color,
  dataRange,
  numberOfSets,
  measurement,
  noTension = false,
  offset = 0,
}) => {
  const min = dataRange[0] + offset;
  const max = dataRange[1] + offset;

  const options = {
    responsive: true,
    tension: noTension ? null : 0.5,
    scales: {
      x: { display: false },
      y: {
        min: 0,
        max: max + 50,
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: { display: false },
    },
  };

  const _data = generateData([min, max], numberOfSets);

  const getChartData = (canvas) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 350);

    gradient.addColorStop(0, color);
    gradient.addColorStop(0.95, `${color}00`);

    const data = {
      labels: Array.apply(null, Array(numberOfSets)).map((_, i) => i),
      datasets: [
        {
          data: _data,
          label: '',
          borderColor: color,
          backgroundColor: gradient,
          fill: true,
        },
      ],
    };

    return data;
  };

  return (
    <div className="absolute">
      <Line data={getChartData} options={options} height={350} width={500} />
      <div
        className="flex items-center justify-center absolute bottom-8 right-1/3 h-11 w-1/3 rounded-md"
        style={{ background: color }}
      >
        <p
          className="text-lg font-bold text-white"
          style={{ color: 'white !important' }}
        >
          {_data[dataRange.length - 1] - offset + ' ' + measurement}
        </p>
      </div>
    </div>
  );
};
