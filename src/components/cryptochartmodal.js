import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  
} from "chart.js";
import { Line } from "react-chartjs-2";

import React, { useState, useEffect } from "react";
ChartJS.register(
  CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Filler,
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
            fill: true,
            label: "",
            data: charter,
            borderColor: color,
            backgroundColor: `${color},0.5)`,
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
            color: 'white',
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
              color: 'white',
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
              color: 'white',
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
