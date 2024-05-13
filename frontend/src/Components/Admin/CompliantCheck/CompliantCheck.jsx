import React from 'react'
import './CompliantCheck.css'

export default function CompliantCheck() {
  return (
    <div>
        
        <div class="div2" id='div2'>
            <section>
                <div class="container">
                    <div class="row">
                            <h2>Compliants</h2>
                            <div id='ccbox'>
                                
                                <input type="text" id='cct1' value={'Account name'} readOnly/>
                                <input type="text" id='cct2' value={'User mail ID'} readOnly/>
                                <input type="text" id='cct3' value={'App name'} readOnly/>
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" id='ccb1' aria-expanded="false" aria-controls="collapseOne">
                                    View Compliant<i class="bi bi-chevron-down" id='cci1'></i>
                                </button>
                                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Description about the compliant</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
