import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  
} from "chart.js";
import { Line } from "react-chartjs-2";

import React, { useState, useEffect } from "react";
ChartJS.register(
  CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
);
export default function Cryptochartmodal(charter,name,color) {
  const [chartData, setChartData] = useState({
      datasets: [],
    });
    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
      console.log(charter);
      setChartData({
        labels: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"],
        datasets: [
          {
            label: "",
            data: charter,
            borderColor: 'green',
            backgroundColor: color,
          },
        ],
      });
      setChartOptions({
      maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: name,
          },
          label: {
            display: false,
            text: "",
          },
        },
        scales: {
          x: {
            ticks: {
              display: true,
            },
      
            grid: {
              drawBorder: false,
              display: false,
              
            },
          },
          y: {
            ticks: {
              display: true,
              beginAtZero: true,
            },
            grid: {
              drawBorder: false,
              display: false,
            },
          },
        },
        layout: {
          margin: {
            right: 0
          }
        },
      
      });
    }, []);
   
  return (
      <div>
           <Line options={chartOptions} data={chartData} />
      </div>
  )
}
