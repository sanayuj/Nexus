import React from 'react'
import Applications from '../../Components/User/Applications/Applications'
import Header from '../../Components/User/Header/Header'
import SideBar from '../../Components/User/SideBar/SideBar'

export default function ApplicationPage() {
  return (
    <div>
        <Header/>
        <SideBar/>
      <Applications/>
    </div>
  )
}
