//import { useState } from 'react'
import React, {useState} from 'react'
import './AdminNotification.css'

export default function AdminNotification() {

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    }; 
  return (
    <div id='addiv'>
        <h1 id='adt12'>Notification</h1><br /><br />
        <form onSubmit="" id="adform12">
            <div  id='adminnot'>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                    value="byUserId"
                    checked={selectedOption === 'byUserId'}
                    onChange={handleOptionChange}/>
                    <label class="form-check-label" for="flexRadioDefault1">By userID</label>
                </div>
                <div class="form-check" id='secondradio'>
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                    value="global"
                    checked={selectedOption === 'global'}
                    onChange={handleOptionChange}/>
                    <label class="form-check-label" for="flexRadioDefault2">Global</label>
                </div>
            </div>
            <input type="text" id='adsearch'placeholder='Search users'/>
            <button id='adsearchicon'><i class="bi bi-search" id='search1'></i></button>
        {selectedOption === 'byUserId' && (
            <div id="userIdInput">
                <input type="text" name="userId" id="userId" placeholder="Enter User ID" />
            </div>
        )}
        <textarea name="msg" id="msg" placeholder='Enter the message...'/>
        <br /><br />
        <input type="submit" value={"Send"} id="adsubmit2"/><br/>
        </form>
    </div>
  )
}