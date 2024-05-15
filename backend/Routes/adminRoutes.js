const express=require("express")
const {userList,blockUser, adminLogin, adminHeader, fetchAllApps, appAproval, appBlock, viewComplaints}=require("../Controllers/adminController")
const adminAuth=require("../Middleware/adminAuth")
const { FetchGames } = require("../Controllers/appController")
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

module.exports=router