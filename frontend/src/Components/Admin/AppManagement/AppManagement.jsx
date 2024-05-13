import React from 'react'
import './AppManagement.css'

export default function AppManagement() {
  return (
    <div>
              
        <div class="div2" id='div2'>
            <section>
                <div class="container">
                    <div class="row">
                            <h2>App Management</h2>
                            <div id='ambox'>
                                <input type="text" id='amt1' value={'App name'} readOnly/>
                                <input type="text" id='amt2' value={'Developer name'} readOnly/>
                                <input type="text" id='amt3' value={'User mail ID'} readOnly/>
                                <button id='amb1'><i class="bi bi-file-earmark-break" id='ami1'></i>Test</button>
                                <button id='amb2'><i class="bi bi-clipboard-check" id='ami1'></i>Approve</button>
                                <button id='amb3'><i class="bi bi-ban" id='ami1'></i>Block</button>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
