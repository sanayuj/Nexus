import React from 'react'
import AdminHeader from '../../Components/Admin/AdminHeader/AdminHeader'
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import MacApps from '../../Components/Admin/MacApps/MacApps'

export default function AdminMacAppinfo() {
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar/>
      <MacApps/>
    </div>
  )
}
