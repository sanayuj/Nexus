import React,{useEffect,useState} from 'react'
import './FeedbackCheck.css'
import { useParams } from 'react-router-dom'
import { fetchFeedDetails } from '../../../Services/adminApi'

export default function FeedbackCheck() {
    const [feedback,setFeedback]=useState()
    const FeedId=useParams().id
    console.log(FeedId,"&&&****&&&");
    useEffect(()=>{
        fetchFeedDetails(FeedId).then((value)=>{
            console.log(value?.data?.data,"&&&&");
            if(value?.data?.status){
                setFeedback(value?.data?.data)
            }
        })
    },[])


    const sendNotification=()=>{
        
    }
  return (
    <div>
        
        <div class="div2" id='div2'>
            <section>
                <div class="container">
                    <div class="row">
                            <h2>Feedback</h2>
                            <div id='fcbox'>
                                <label htmlFor="" id='fcl'>User Name:{feedback?.userId?.username} </label>
                                <input type="text" id='fct1' readOnly/><br/><br />
                                <label htmlFor="" id='fcl'>Reaction about the store: {feedback?.feedbackStatus}</label>
                                <input type="text" id='fct2' readOnly/><br/><br />
                                <label htmlFor="" id='fcl'>Feedback Category: {feedback?.category}</label>
                                <input type="text" id='fct3' readOnly /><br /><br />
                                <label htmlFor="" id='fcl'>User Feedback: {feedback?.feedbackComment}</label><br />
                                <textarea name="" id="fct4" cols="30" rows="10" readOnly></textarea><br /><br />
                                <textarea name="" id="fct5" cols="30" rows="10" placeholder='Leave comments'></textarea><br /><br />
                                <input type="button" id='fcb1' value={'Submit'}/>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
