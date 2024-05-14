const express=require("express")
const {userList,blockUser, adminLogin, adminHeader, fetchAllApps, appAproval}=require("../Controllers/adminController")
const adminAuth=require("../Middleware/adminAuth")
const router=express.Router()


router.post("/adminLogin",adminLogin)
router.post('/userblock/:id',blockUser)
router.post("/approveApp/:id",appAproval)



router.get("/userlist",userList)
router.get("/adminHeader",adminAuth ,adminHeader)
router.get("/allApp",adminAuth,fetchAllApps)

module.exports=router