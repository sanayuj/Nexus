import React from 'react'
import './FeedbackCheck.css'

export default function FeedbackCheck() {
  return (
    <div>
        
        <div class="div2" id='div2'>
            <section>
                <div class="container">
                    <div class="row">
                            <h2>Feedback</h2>
                            <div id='fcbox'>
                                <label htmlFor="" id='fcl'>User Name: </label>
                                <input type="text" id='fct1' readOnly/><br/><br />
                                <label htmlFor="" id='fcl'>Reaction about the store: </label>
                                <input type="text" id='fct2' readOnly/><br/><br />
                                <label htmlFor="" id='fcl'>Feedback Category: </label>
                                <input type="text" id='fct3' readOnly /><br /><br />
                                <label htmlFor="" id='fcl'>User Feedback: </label><br />
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
