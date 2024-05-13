import React from 'react'
import AdminHeader from '../../Components/Admin/AdminHeader/AdminHeader'
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import AdminGames from '../../Components/Admin/AdminGames/AdminGames'

export default function AdminGamesPage() {
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar/>
      <AdminGames/>
    </div>
  )
}
