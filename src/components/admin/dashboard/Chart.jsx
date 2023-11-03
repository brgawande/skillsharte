import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

export const LineChart = ({ views = [] }) => {
  const labels = getLastYearMonths();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Yearly Views",
        color: "white",
      },
    },
  };

  const data = {
    labels,

    datasets: [
      {
        label: "Views",
        data: views,
        borderColor: "rgb(0 255 132)",
        backgroundColor: "#6b46c1",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export const DoughnutChart = ({ users = [] }) => {
  const data = {
    labels: ["Subscribed", "Not Subscribed"],

    datasets: [
      {
        label: "Users",
        data: users,
        borderColor: ["black", "black"],
        backgroundColor: ["white", "rgb(0 255 132)"],
      },
    ],
  };

  return <Doughnut data={data} />;
};

function getLastYearMonths() {
  const labels = [];

  const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonth = new Date().getMonth();
  // console.log(currentMonth);
  const remaningMonths = 11 - currentMonth;

  for (let i = currentMonth; i < months.length; i--) {
    const element = months[i];
    labels.unshift(element);
    if (i === 0) break;
  }

  // console.log(labels);

  for (let i = 11; i > remaningMonths; i--) {
    if (i === currentMonth) break;
    const element = months[i];
    labels.unshift(element);
  }
  // console.log(labels);

  return labels;
}

// getLastYearMonths();
