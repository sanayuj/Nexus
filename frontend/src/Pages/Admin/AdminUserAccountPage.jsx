import React from 'react'
import AdminHeader from '../../Components/Admin/AdminHeader/AdminHeader'
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import UserAccount from '../../Components/Admin/UserAccount/UserAccount'

export default function AdminUserAccountPage() {
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar/>
      <UserAccount/>
    </div>
  )
}
