import React, { useEffect,useState } from 'react'
import './TotalGames.css'
import { fetchAllGames } from '../../../Services/adminApi'

export default function TotalGames() {
  const [game,setGame]=useState([])
  useEffect(()=>{
fetchAllGames().then((value)=>{
  if(value?.data?.status){
    setGame(value?.data?.data)
  }
  
})
  },[])
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
                {game.length>0?(
                  (game?.map((value,index)=>(
                    <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td><img id='timg' src={`http://localhost:4000/img/${value.appIcon}`} alt="App icon" /></td>
                    <td>{value?.appName}</td>
                    <td>{value?.OS}</td>
                    </tr>
                  )))
                 ):(<p>No games found</p>)}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}
