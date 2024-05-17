import React, { useEffect,useState } from 'react'
import './TotalOtherApps.css'
import { fetchAllUtilityApps } from '../../../Services/adminApi'

export default function TotalOtherApps() {
const [utilityApp,setUtilityApp]=useState([])
  useEffect(()=>{
fetchAllUtilityApps().then((value)=>{
  console.log(value?.data,"%%%");
  if(value?.data?.status){
    setUtilityApp(value?.data?.data)
  }
})
  },[])
  return (
    <div>
      <div id='div2'>
            <h2 id='th2'>Utility Apps Details</h2>
            <table class="table table-striped table-hover" id='tutil'>
                <thead>
                    <tr>
                    <th scope="col">SL.No</th>
                    <th scope="col">Icon</th>
                    <th scope="col">App Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">OS</th>
                    </tr>
                </thead>
                <tbody>
                {utilityApp.map((value,index)=>(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td><img id='timg' src={`http://localhost:4000/img/${value.appIcon}`} alt="App icon" /></td>
                    <td>{value?.appName}</td>
                    <td>{value?.Category}</td>
                    <td>{value?.OS}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
