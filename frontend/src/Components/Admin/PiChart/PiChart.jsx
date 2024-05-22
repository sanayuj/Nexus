import React from 'react';
import "./PiChart.css"
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
}from "chart.js"  

ChartJS.register(ArcElement, Tooltip, Legend, Title);


const PiChart = () => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Applications Details',
          },
        },
      };
  const data = {
    labels: ['Total Apps', 'Games Apps ', 'Utility Apps', 'MAC Apps', 'Windows Apps', 'Linux Apps'],
    datasets: [
      {
        label: 'Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div className="pie-chart-wrapper">
      <Pie data={data} options={options} />
      </div>
     
    </div>
  );
};

export default PiChart;
