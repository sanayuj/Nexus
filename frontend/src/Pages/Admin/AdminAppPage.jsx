import React from 'react'
import AdminHeader from '../../Components/Admin/AdminHeader/AdminHeader'
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import AdminApps from '../../Components/Admin/AdminApps/AdminApps'

export default function AdminAppPage() {
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar/>
      <AdminApps/>
    </div>
  )
}
