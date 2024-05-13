import React from 'react'
import AdminHeader from '../../Components/Admin/AdminHeader/AdminHeader'
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import FeedbackCheck from '../../Components/Admin/FeedbackCheck/FeedbackCheck'

export default function AdminFeedbackCheckPage() {
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar/>
      <FeedbackCheck/>
    </div>
  )
}
