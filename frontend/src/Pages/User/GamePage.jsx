import React from 'react'
import Games from '../../Components/User/Games/Games'
import Header from '../../Components/User/Header/Header'
import SideBar from '../../Components/User/SideBar/SideBar'

export default function GamePage() {
  return (
    <div>
      <Header/>
      <SideBar/>  
      <Games/>
    </div>
  )
}
