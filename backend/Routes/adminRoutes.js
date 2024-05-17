const express=require("express")
const {userList,blockUser, adminLogin, adminHeader, fetchAllApps, appAproval, appBlock, viewComplaints, fetchFeeddetails}=require("../Controllers/adminController")
const adminAuth=require("../Middleware/adminAuth")
const { FetchGames, UtilityApps, allWindowsApp, allLinuxApp, allMacApp, getUserFeedback } = require("../Controllers/appController")
const router=express.Router()


router.post("/adminLogin",adminLogin)
router.post('/userblock/:id',blockUser)
router.post("/approveApp/:id",appAproval)
router.post("/blockApp/:id",appBlock)


router.get("/userlist",userList)
router.get("/adminHeader",adminAuth ,adminHeader)
router.get("/allApp",adminAuth,fetchAllApps)
router.get("/viewComplaint",adminAuth,viewComplaints)
router.get("/allGameApp",adminAuth,FetchGames)
router.get("/allUtilityApps",adminAuth,UtilityApps)
router.get("/allwindowsApps",adminAuth,allWindowsApp)
router.get("/allLinuxApps",adminAuth,allLinuxApp)
router.get("/allMacsApps",adminAuth,allMacApp)
router.get("/fetchUserFeedback",adminAuth,getUserFeedback)
router.get("/fetchFeedback/:feedId",adminAuth,fetchFeeddetails)
module.exports=router