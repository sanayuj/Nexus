import React, { useEffect,useState } from 'react';
import "./PiChart.css"
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
}from "chart.js"  
import { getPieChartDetails } from '../../../Services/adminApi';

ChartJS.register(ArcElement, Tooltip, Legend, Title);


const PiChart = () => {

    const [totalAppCount,setTotalAppCount]=useState("")
    const [totalGameCount,setTotalGameCount]=useState("")
    const [totalUtility,setTotalUtility]=useState("")
    const [totalMac,setTotalMac]=useState("")
    const [totalWindows,setTotalWindows]=useState("")
    const [totalLinux,setTotalLinux]=useState("")
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
        label: 'Counts',
        data: [totalAppCount, totalGameCount, totalUtility, totalMac, totalWindows, totalLinux],
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




  useEffect(()=>{
getPieChartDetails().then((value)=>{
    console.log(value?.data,"ggggGGGGGG");
    if(value?.data?.status){
        setTotalAppCount(value?.data?.totalApps)
        setTotalGameCount(value?.data?.gamesApps)
        setTotalUtility(value?.data?.utilityApps)
        setTotalMac(value?.data?.macApps)
        setTotalWindows(value?.data?.windowsApps)
        setTotalLinux(value?.data?.linuxApps)
    }
})
  },[])

  return (
    <div>
      <div className="pie-chart-wrapper">
      <Pie data={data} options={options} />
      </div>
     
    </div>
  );
};

export default PiChart;
