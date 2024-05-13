import React from 'react'
import AdminHeader from '../../Components/Admin/AdminHeader/AdminHeader'
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import ViewFeedback from '../../Components/Admin/ViewFeedback/ViewFeedback'

export default function AdminViewFeedbackPage() {
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar/>
      <ViewFeedback/>
    </div>
  )
}
