
const {register, login, Header, appUpload, userFeedback}=require("../Controllers/userController")
const express=require("express")
const createMulterInstance = require("../Middleware/multer")
const router=express.Router()
const appDetails=createMulterInstance("AppDetails")
const multer = require("multer");
// const appDetails = multer({ dest: 'public/images/AppDetails' });
const userAuth=require("../Middleware/userAuth")
const { showAllApps, UtilityApps } = require("../Controllers/appController")

router.post('/register',register)

router.post('/login',login)

router.post("/upload/:userId",userAuth,appDetails.fields([
    {name:"appFile",maxCount:1},
    {name:"appIcon",maxCount:1},
    {name:"appScreenshots",maxCount:1},
]),appUpload);

router.post("/feedback/:userId",userAuth,userFeedback)





router.get("/header",userAuth,Header)
router.get("/showApp",showAllApps)
router.get("/getUtilityApp",UtilityApps)

module.exports=router