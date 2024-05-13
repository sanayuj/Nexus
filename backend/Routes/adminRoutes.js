const express=require("express")
const {userList,blockUser, adminLogin}=require("../Controllers/adminController")
const router=express.Router()


router.post("/adminLogin",adminLogin)
router.post('/userblock/:id',blockUser)



router.get("/userlist",userList)

module.exports=router