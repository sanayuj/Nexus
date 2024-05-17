import React, { useEffect, useState } from 'react'
import './ViewFeedback.css'
import { Link } from 'react-router-dom'
import { fetchUserFeedback } from '../../../Services/adminApi'

export default function ViewFeedback() {
    const [feedbackData,setfeedbackData]=useState([])
    useEffect(()=>{
        fetchUserFeedback().then((value)=>{
            console.log(value?.data?.feedbackData,"FEEDBACK");
            if(value?.data?.status){
setfeedbackData(value?.data?.feedbackData)
            }
        })
    },[])
  return (

    <div>
        
        <div class="div2" id='div2'>
            <section>
                <div class="container">
                    <div class="row">
                            <h2>Feedback</h2>
                            {feedbackData.length>0?(
                                feedbackData.map((value,index)=>(
                                    <div id='box3'>
                                <input type="text" id='vft1' value={value?.userId?.username} readOnly/>
                                <input type="text" id='vft2' value={value?.category} readOnly/>
                                <Link to='/admin/feedback/${value?._id}'><input type="button" id='vfb1' value={"View"}/></Link>
                            </div>
                                ))
                               ):(<p>No User's feedback</p>)}
                            
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
