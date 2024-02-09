import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface barChartProps {
  horizontal?: boolean;
  data1: number[];
  data2: number[];
  title1: string;
  title2: string;
  bgColor: string;
  bgColor2: string;
  labels?: string[];
}
const months = ["January", "February", "March", "April", "May", "June", "July"];

export const BarChart = ({
  data1,
  data2,
  title1,
  title2,
  bgColor,
  bgColor2,
  horizontal = false,
  labels = months,
}: barChartProps) => {
  const options: ChartOptions<"bar"> = {
    indexAxis: horizontal ? "y" : "x",
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title1,
        data: data1,
        backgroundColor: bgColor,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
      {
        label: title2,
        data: data2,
        backgroundColor: bgColor2,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
interface DoughnutChartProps {
  labels: string[];
  data: number[];

  bgColor: string[];
  cutout?: number | string;
  legends?: boolean;
  offset?: number[];
}

export const DoughnutChart = ({
  labels,
  data,
  bgColor,
  cutout,
  legends = true,
  offset,
}: DoughnutChartProps) => {
  const doughnutData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: bgColor,
        borderWidth: 0,
        offset,
      },
    ],
  };

  const doughnutOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: "bottom",
        labels: {
          padding: 39,
        },
      },
    },
    cutout,
  };

  return <Doughnut data={doughnutData} options={doughnutOptions} />;
};
