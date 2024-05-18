import React from 'react'
import AdminHeader from '../../Components/Admin/AdminHeader/AdminHeader'
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import AdminNotification from '../../Components/Admin/AdminNotification/AdminNotification'

export default function AdminNotificationPage() {
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar/>
      <AdminNotification/>
    </div>
  )
}