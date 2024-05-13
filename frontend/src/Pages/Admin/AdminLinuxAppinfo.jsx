import React from 'react'
import AdminHeader from '../../Components/Admin/AdminHeader/AdminHeader'
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import LinuxApps from '../../Components/Admin/LinuxApps/LinuxApps'

export default function AdminLinuxAppinfo() {
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar/>
      <LinuxApps/>
    </div>
  )
}
