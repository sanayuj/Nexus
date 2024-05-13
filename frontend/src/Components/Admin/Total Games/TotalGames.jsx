import React from 'react'
import './TotalGames.css'

export default function TotalGames() {
  return (
    <div>
      <div id='div2'>
            <h2 id='th2'>Gaming Apps</h2>
            <table class="table table-striped table-hover" id='tgame'>
                <thead>
                    <tr>
                    <th scope="col">SL.No</th>
                    <th scope="col">Icon</th>
                    <th scope="col">App Name</th>
                    <th scope="col">OS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td><img id='timg' src="" alt="App icon" /></td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
