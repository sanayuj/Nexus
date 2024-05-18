import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminAppManagementPage from "../Pages/Admin/AdminAppManagementPage";
import AdminCompliantPage from "../Pages/Admin/AdminCompliantPage";
import AdminFeedbackCheckPage from "../Pages/Admin/AdminFeedbackCheckPage";
import AdminUserAccountPage from "../Pages/Admin/AdminUserAccountPage";
import AdminViewFeedbackPage from "../Pages/Admin/AdminViewFeedbackPage";
import AdminAppPage from "../Pages/Admin/AdminAppPage";
import AdminGamesPage from "../Pages/Admin/AdminGamesPage";
import AdminHomePage from "../Pages/Admin/AdminHomePage";
import AdminUserinfo from "../Pages/Admin/AdminUserinfo";
import AdminAppinfo from "../Pages/Admin/AdminAppinfo";
import AdminGameAppinfo from "../Pages/Admin/AdminGameAppinfo";
import AdminUtilityAppinfo from "../Pages/Admin/AdminUtilityAppinfo";
import AdminLinuxAppinfo from "../Pages/Admin/AdminLinuxAppinfo";
import AdminMacAppinfo from "../Pages/Admin/AdminMacAppinfo";
import AdminWindowsAppinfo from "../Pages/Admin/AdminWindowsAppinfo";
import AdminLibrarypage from "../Pages/Admin/AdminLibrarypage";
import AdminLogin from "../Components/Admin/AdminLogin/AdminLogin";

export default function AdminRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/account" element={<AdminUserAccountPage />} />
        <Route path="/app_management" element={<AdminAppManagementPage />} />
        <Route path="/compliant" element={<AdminCompliantPage />} />
        <Route path="/feedback" element={<AdminViewFeedbackPage />} />
        <Route path="/feedback_view/:id" element={<AdminFeedbackCheckPage />} />
        <Route path="/library" element={<AdminLibrarypage />} />
        <Route path="/apps" element={<AdminAppPage />} />
        <Route path="/games" element={<AdminGamesPage />} />
        <Route path="/home" element={<AdminHomePage />} />
        <Route path="/" element={<AdminLogin />} />
        <Route path="/user_details" element={<AdminUserinfo />} />
        <Route path="/app_details" element={<AdminAppinfo />} />
        <Route path="/game_details" element={<AdminGameAppinfo />} />
        <Route path="/utilityapp_details" element={<AdminUtilityAppinfo />} />
        <Route path="/linuxapp_details" element={<AdminLinuxAppinfo />} />
        <Route path="/macapp_details" element={<AdminMacAppinfo />} />
        <Route path="/windowsapp_details" element={<AdminWindowsAppinfo />} />
      </Routes>
    </div>
  );
}
