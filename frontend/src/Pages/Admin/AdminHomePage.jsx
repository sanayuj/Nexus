import React from 'react'
import AdminHeader from '../../Components/Admin/AdminHeader/AdminHeader'
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import AdminHome from '../../Components/Admin/AdminHome/AdminHome'

export default function AdminHomePage() {
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar/>
      <AdminHome/>
    </div>
  )
}
