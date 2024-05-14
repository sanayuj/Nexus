import React, { useEffect,useState } from 'react'
import './AppManagement.css'
import {toast} from 'react-toastify';
import { approveApp, totalApplications } from '../../../Services/adminApi'

export default function AppManagement() {
    const [appDetails,setAppDetails]=useState([])

    useEffect(()=>{
        totalApplications().then((value)=>{
            setAppDetails(value.data.Data)
        })
    },[appDetails])
    const testApplication=(apkFile)=>{
        const fileUrl = `http://localhost:4000/img/${apkFile}`;
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', '');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const approveApplication=(appId)=>{
        approveApp(appId).then((value)=>{
            if(value?.data?.status){
                toast.success(value?.data?.message)
            }else{
                toast.error("Unable to approve")
            }
        })
    }

  return (
    <div>
              
        <div class="div2" id='div2'>
            <section>
                <div class="container">
                    <div class="row">
                            <h2>App Management</h2>
                            {appDetails.map((value,Index)=>(
                                <div id='ambox' key={Index}>
                                <input type="text" id='amt1' value={value?.appName} readOnly/>
                                <input type="text" id='amt2' value={value?.devName} readOnly/>
                                <input type="text" id='amt3' value={value?.userId?.email} readOnly/>
                                <button id='amb1' onClick={()=>{testApplication(value?.apkFile)}}><i class="bi bi-file-earmark-break"  id='ami1'></i>Test</button>
                                {value.verified?<span className='bi bi-clipboard-check approved' id='amb2'>Approved</span>: <button id='amb23' onClick={()=>{approveApplication(value?._id)}}><i class="bi bi-clipboard-check" id='ami1' ></i>Approve</button>}
                              
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
