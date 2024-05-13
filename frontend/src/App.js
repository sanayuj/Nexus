import Registration from "./Pages/User/Registration";
import LoginPage from "./Pages/User/LoginPage";
import HomePage from "./Pages/User/HomePage";
import ApplicationPage from "./Pages/User/ApplicationPage";
import GamePage from "./Pages/User/GamePage";
import DownloadPage from "./Pages/User/DownloadPage";
import FeedbackPage from "./Pages/User/FeedbackPage";
import UploadPage from "./Pages/User/UploadPage";
import ReportPage from "./Pages/User/ReportPage";
import LibraryPage from "./Pages/User/LibraryPage";
import ProfilePage from "./Pages/User/ProfilePage";
import EditProfilePage from "./Pages/User/EditProfilePage";
import AdminHomePage from "./Pages/Admin/AdminHomePage";
import AdminAppManagementPage from "./Pages/Admin/AdminAppManagementPage";
import AdminCompliantPage from "./Pages/Admin/AdminCompliantPage";
import AdminFeedbackCheckPage from "./Pages/Admin/AdminFeedbackCheckPage";
import AdminUserAccountPage from "./Pages/Admin/AdminUserAccountPage";
import AdminViewFeedbackPage from "./Pages/Admin/AdminViewFeedbackPage";
import AdminAppPage from "./Pages/Admin/AdminAppPage";
import AdminGamesPage from "./Pages/Admin/AdminGamesPage";
import AdminLibrarypage from "./Pages/Admin/AdminLibrarypage";
import AdminUserinfo from "./Pages/Admin/AdminUserinfo";
import AdminAppinfo from "./Pages/Admin/AdminAppinfo";
import AdminGameAppinfo from "./Pages/Admin/AdminGameAppinfo";
import AdminUtilityAppinfo from "./Pages/Admin/AdminUtilityAppinfo";
import AdminLinuxAppinfo from "./Pages/Admin/AdminLinuxAppinfo";
import AdminMacAppinfo from "./Pages/Admin/AdminMacAppinfo";
import AdminWindowsAppinfo from "./Pages/Admin/AdminWindowsAppinfo";
import UserRoutes from "./Routes/UserRoutes"
import AdminRoutes from "./Routes/AdminRoutes"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div>
  <BrowserRouter>
  <Routes>
  <Route path="/*" element={<UserRoutes/>}/>
  <Route path="/admin/*" element={<AdminRoutes/>}/>
  </Routes>
  <ToastContainer/>
  </BrowserRouter>
    </div>
  );
}

export default App;
