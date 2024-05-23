// BarChart.js
import React, { useEffect, useState } from 'react';
import "./Chart.css"
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { getBarChartDetails } from '../../../Services/adminApi';



// Register the necessary components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const Chart = () => {

  const [approvedApps,setApprovedApps]=useState()
  const [totalUser,setTotalUser]=useState()
  const [rejectedApps,setRejectedApps]=useState()
  const [totalReports,setTotalReports]=useState()
  const [feedback,setFeedback]=useState()
  const [wishlist,setWishlist]=useState()


  useEffect(()=>{
    getBarChartDetails().then((value)=>{
      console.log(value?.data,"BAR Data!!!!!!!");
      if(value?.data?.status){
        setTotalUser(value?.data?.userCount)
        setApprovedApps(value?.data?.approvedApps)
        setRejectedApps(value?.data?.rejectedApps)
        setTotalReports(value?.data?.totalReports)
        setFeedback(value?.data?.userFeedback)
        setWishlist(value?.data?.wishlistApps)
      }
    })
    },[])

  const data = {
    labels: ['Users', 'Approved Apps', 'Rejected Apps', 'Total Reports', 'User Feedback', 'Wishlist Apps'],
    datasets: [
      {
        label: 'Count',
        data: [totalUser, approvedApps, rejectedApps, totalReports, feedback, wishlist],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Details',
      },
    },
  };

  return (
    <div className="chart-container">
      <div className="bar-chart-wrapper">
      <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
