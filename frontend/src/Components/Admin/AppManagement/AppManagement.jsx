import React, { useEffect,useState } from 'react'
import './AppManagement.css'
import { totalApplications } from '../../../Services/adminApi'

export default function AppManagement() {
    const [appDetails,setAppDetails]=useState([])
    useEffect(()=>{
        totalApplications().then((value)=>{
            console.log(value.data.Data,"565656565656");
            setAppDetails(value.data.Data)
        })
    },[])
    const testApplication=(apkFile)=>{
        console.log(apkFile,"%%%%");
        const fileUrl = `http://localhost:4000/img/${apkFile}`;
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', '');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
  return (
    <div>
              
        <div class="div2" id='div2'>
            <section>
                <div class="container">
                    <div class="row">
                            <h2>App Management</h2>
                            {appDetails.map((value,Index)=>(
                                <div id='ambox'>
                                <input type="text" id='amt1' value={value?.appName} readOnly/>
                                <input type="text" id='amt2' value={value?.devName} readOnly/>
                                <input type="text" id='amt3' value={value?.userId?.email} readOnly/>
                                <button id='amb1'><i class="bi bi-file-earmark-break" onClick={()=>{testApplication(value?.apkFile)}} id='ami1'></i>Test</button>
                                <button id='amb2'><i class="bi bi-clipboard-check" id='ami1'></i>Approve</button>
                                <button id='amb3'><i class="bi bi-ban" id='ami1'></i>Block</button>
                            </div>
                            ))}
                           
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
