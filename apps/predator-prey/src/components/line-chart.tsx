import {
  CategoryScale,
  Chart as ChartJS,
  ChartDataset,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type LineChartProps = {
  preys: number[];
  predators: number[];
  labels: string[];
};

export const LineChart = ({ preys, predators, labels }: LineChartProps) => {
  const datasets: ChartDataset<'line', unknown>[] =
    localStorage.getItem('isPreyOnly') === '0'
      ? [
          {
            label: 'Жертвы',
            data: preys,
            backgroundColor: '#e9c46a',
            borderColor: '#e9c46a',
          },
          {
            label: 'Хищники',
            data: predators,
            backgroundColor: '#e76f51',
            borderColor: '#e76f51',
          },
        ]
      : [
          {
            label: 'Жертвы',
            data: preys,
            backgroundColor: '#e9c46a',
            borderColor: '#e9c46a',
          },
        ];

  return (
    <Line
      data={{
        labels,
        datasets,
      }}
      options={{
        plugins: {
          legend: {
            labels: {
              font: () => ({
                family: 'Roboto Mono',
              }),
            },
          },
        },
      }}
    />
  );
};
