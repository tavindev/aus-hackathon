import { motion } from 'framer-motion';
import { MetricObject, UserMetrics } from 'pages/api/user/metrics';
import React from 'react';
import { Line } from 'react-chartjs-2';

interface ChartProps {
  color: string;
  dataset: MetricObject[];
  measurement: string;
  noTension?: boolean;
  offset?: number;
}

export const AUSChart: React.FC<ChartProps> = ({
  color,
  dataset,
  measurement,
  noTension = false,
  offset = 0,
}) => {
  // May cause performance issues when used with big datasets
  const orderedDataset = Array.from(dataset.values()).sort(
    (a, b) => a.value - b.value
  );
  const orderedDatasetLen = orderedDataset.length;

  const min = orderedDataset[0].value;
  const max = orderedDataset[orderedDatasetLen - 1].value + offset;

  const options = {
    responsive: true,
    tension: noTension ? null : 0.5,
    scales: {
      x: { display: false },
      y: {
        min: 0,
        max: max + max / 2,
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: { display: false },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const getChartData = (canvas) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 350);

    gradient.addColorStop(0, color);
    gradient.addColorStop(0.95, `${color}00`);

    const data = {
      labels: dataset.map((a) => a.id),
      datasets: [
        {
          data: dataset.map((a) => a.value + offset),
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
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center justify-center absolute bottom-10 2xl:bottom-12 right-1/3 h-11 w-1/3 rounded-md"
        style={{ background: color }}
      >
        <p
          className="text-lg font-bold text-white"
          style={{ color: 'white !important' }}
        >
          {dataset[dataset.length - 1].value + ' ' + measurement}
        </p>
      </motion.div>
    </div>
  );
};
