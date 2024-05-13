import React from 'react'
import AdminHeader from '../../Components/Admin/AdminHeader/AdminHeader'
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import TotalOtherApps from '../../Components/Admin/TotalOtherApps/TotalOtherApps'

export default function AdminUtilityAppinfo() {
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar/>
      <TotalOtherApps/>
    </div>
  )
}
