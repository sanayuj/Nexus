const express=require("express")
const {userList,blockUser}=require("../Controllers/adminController")
const router=express.Router()

router.get("userlist",userList)
router.post('/userblock/:id',blockUser)

module.exports=router