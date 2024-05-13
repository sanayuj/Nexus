import React from 'react'
import './UserAccount.css'

export default function UserAccount() {
  return (
    <div>
        
        <div class="div2" id='div2'>
            <section>
                <div class="container">
                    <div class="row">
                            <h2>Reported Accounts</h2>
                            <div id='box'>
                                <input type="text" id='uat1' value={'Account name'} readOnly/>
                                <input type="text" id='uat2' value={'User mail ID'} readOnly/>
                                <input type="button" id='uab1' value={'Ignore'}/>
                                <button id='uab2'><i class="bi bi-ban" id='uai1'></i>Block</button>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
