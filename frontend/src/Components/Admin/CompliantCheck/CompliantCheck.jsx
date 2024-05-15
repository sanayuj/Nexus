import React, { useEffect,useState } from 'react'
import './CompliantCheck.css'
import { viewCompliant } from '../../../Services/adminApi'


export default function CompliantCheck() {
const [complaints,setComplaints]=useState([])
    useEffect(()=>{
       viewCompliant().then((value)=>{
        console.log(value.data,"%%%%%");
        if(value?.data?.status){
            setComplaints(value?.data?.complaintDetails)
        }
       })
    },[])

  return (
    <div>
        
        <div class="div2" id='div2'>
            <section>
                <div class="container">
                    <div class="row">
                            <h2>Compliants</h2>

                            {complaints.map((value,index)=>(
                                <div id='ccbox'>
                                
                                <input type="text" id='cct1' value={value?.userId?.username} readOnly/>
                                <input type="text" id='cct2' value={value?.userId?.email} readOnly/>
                                <input type="text" id='cct3' value={value?.feedbackStatus} readOnly/>
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" id='ccb1' aria-expanded="false" aria-controls="collapseOne">
                                    View Compliant<i class="bi bi-chevron-down" id='cci1'></i>
                                </button>
                                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>{value?.feedbackComment}</p>
                                    </div>
                                </div>
                            </div>
                            ))}
                          
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
