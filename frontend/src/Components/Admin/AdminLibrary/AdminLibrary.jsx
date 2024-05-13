import React from 'react'
import './AdminLibrary.css'

export default function AdminLibrary() {
  return (
    <div>
      <div class="div2" id='div2'>
    <section>
        <div class="container">
            <div class="row">
                <h2>Library</h2><br /><br />
                <div>
                <button type="button" class="btn btn-outline-primary" id='libb1'>ALL</button>
                <button type="button" class="btn btn-outline-secondary" id='libb2'>Wishlist</button>
                </div><br /><br />
                    <div class="card" id='ldiv'>
                        <img src="" class="card-img-top" id='limg' alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title" id='lh1'>App Name</h5>
                            <a href="#" class="btn btn-primary" id='la'>Update</a>
                        </div>
                    </div>
            </div>
        </div>
    </section>
        </div>
    </div>
  )
}
