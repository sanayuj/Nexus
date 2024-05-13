import React from 'react'
import AdminHeader from '../../Components/Admin/AdminHeader/AdminHeader'
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import AppManagement from '../../Components/Admin/AppManagement/AppManagement'

export default function AdminAppManagementPage() {
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar/>
      <AppManagement/>
    </div>
  )
}
