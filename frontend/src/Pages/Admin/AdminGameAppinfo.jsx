import React from 'react'
import AdminHeader from '../../Components/Admin/AdminHeader/AdminHeader'
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import TotalGames from '../../Components/Admin/Total Games/TotalGames'

export default function AdminGameAppinfo() {
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar/>
      <TotalGames/>
    </div>
  )
}
