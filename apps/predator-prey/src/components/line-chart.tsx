import React from "react";
import { Line } from "react-chartjs-2";

import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Chart as ChartJS,
  ChartDataset,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type LineChartProps = {
  preys: any;
  predators: any;
  labels: any;
};

export const LineChart = ({ preys, predators, labels }: LineChartProps) => {
  const datasets: ChartDataset<"line", any>[] =
    localStorage.getItem("isPreyOnly") === "0"
      ? [
          {
            label: "Жертвы",
            data: preys,
            backgroundColor: "#e9c46a",
            borderColor: "#e9c46a",
          },
          {
            label: "Хищники",
            data: predators,
            backgroundColor: "#e76f51",
            borderColor: "#e76f51",
          },
        ]
      : [
          {
            label: "Жертвы",
            data: preys,
            backgroundColor: "#e9c46a",
            borderColor: "#e9c46a",
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
                family: "Roboto Mono",
              }),
            },
          },
        },
      }}
    />
  );
};
