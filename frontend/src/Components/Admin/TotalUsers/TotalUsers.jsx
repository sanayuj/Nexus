import React from 'react'
import './TotalUsers.css'

export default function TotalUsers() {
  return (
    <div>
        <div id='div2'>
            <h2 id='th2'>User Details</h2>
            <table class="table table-striped table-hover" id='tuser'>
                <thead>
                    <tr>
                    <th scope="col">SL.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact No</th>
                    <th scope="col">Email ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Raju Bai</td>
                    <td>8978985645</td>
                    <td>rajubai@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
