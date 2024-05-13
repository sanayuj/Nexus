import React from 'react'
import AdminHeader from '../../Components/Admin/AdminHeader/AdminHeader'
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import AdminLibrary from '../../Components/Admin/AdminLibrary/AdminLibrary'

export default function AdminLibrarypage() {
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar/>
      <AdminLibrary/>
    </div>
  )
}
