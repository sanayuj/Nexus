import React from 'react'
import AdminHeader from '../../Components/Admin/AdminHeader/AdminHeader'
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import WindowsApps from '../../Components/Admin/WindowsApps/WindowsApps'

export default function AdminWindowsAppinfo() {
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar/>
      <WindowsApps/>
    </div>
  )
}
