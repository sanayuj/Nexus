import React from 'react'
import AdminHeader from '../../Components/Admin/AdminHeader/AdminHeader'
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import CompliantCheck from '../../Components/Admin/CompliantCheck/CompliantCheck'

export default function AdminCompliantPage() {
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar/>
      <CompliantCheck/>
    </div>
  )
}
