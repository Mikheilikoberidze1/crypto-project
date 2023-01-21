import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    
  } from "chart.js";
  import { Line } from "react-chartjs-2";

import React, { useState, useEffect } from "react";
ChartJS.register(
    CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  );
export default function Cryptochart(charter,color) {

    const [chartData, setChartData] = useState({
        datasets: [],
      });
    const [charterer,setCharterer] = useState([]);
      const [chartOptions, setChartOptions] = useState({});
      useEffect(() => {
       setCharterer(charter);
        setChartData({
          labels: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"],
          datasets: [
            {
              label: "",
              data: charterer,
              borderColor: color,
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
              display: false,
              text: "",
            },
            label: {
              display: false,
              text: "",
            },
          },
          scales: {
            x: {
              ticks: {
                display: false,
              },
        
              grid: {
                drawBorder: false,
                display: false,
                
              },
            },
            y: {
              ticks: {
                display: false,
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
      }, [charterer]);
     
    return (
        <div  style={{width: '80%', maxHeight : '70px', 'marginRight':'1px'}}>
             <Line options={chartOptions} data={chartData} />
        </div>
    )
}
