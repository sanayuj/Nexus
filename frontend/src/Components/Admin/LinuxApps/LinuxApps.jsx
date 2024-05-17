import React, { useEffect,useState } from 'react'
import './LinuxApps.css'
import { fetchAllLinuxApps } from '../../../Services/adminApi'

export default function LinuxApps() {
const [linuxApp,setLinuxApp]=useState([])
  useEffect(()=>{
    fetchAllLinuxApps().then((value)=>{
      if(value?.data?.status){
        setLinuxApp(value?.data?.data)
      }
    },[])
  },[])
  return (
    <div>
      <div id='div2'>
            <h2 id='th2'>Apps for Linux</h2>
            <table class="table table-striped table-hover" id='tlinux'>
                <thead>
                    <tr>
                    <th scope="col">SL.No</th>
                    <th scope="col">Icon</th>
                    <th scope="col">App Name</th>
                    <th scope="col">Category</th>
                    </tr>
                </thead>
                <tbody>
                {linuxApp.length>0?(
                  linuxApp.map((value,index)=>(
                    <tr>
                    <th scope="row">{index+1}</th>
                    <td><img id='timg' src={`http://localhost:4000/img/${value.appIcon}`} alt="App icon" /></td>
                    <td>{value?.appName}</td>
                    <td>{value?.Category}</td>
                    </tr>
                  ))
                  
                ):(<p>Empty</p>)}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}
