import React from 'react'
import AdminHeader from '../../Components/Admin/AdminHeader/AdminHeader'
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import TotalUsers from '../../Components/Admin/TotalUsers/TotalUsers'

export default function AdminUserinfo() {
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar/>
      <TotalUsers/>
    </div>
  )
}
