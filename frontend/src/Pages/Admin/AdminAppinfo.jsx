import React from 'react'
import AdminHeader from '../../Components/Admin/AdminHeader/AdminHeader'
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import TotalApps from '../../Components/Admin/TotalApps/TotalApps'

export default function AdminAppinfo() {
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar/>
      <TotalApps/>
    </div>
  )
}
