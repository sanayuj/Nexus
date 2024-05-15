
const {register, login, Header, appUpload, userFeedback}=require("../Controllers/userController")
const express=require("express")
const createMulterInstance = require("../Middleware/multer")
const router=express.Router()
const appDetails=createMulterInstance("AppDetails")
const multer = require("multer");
// const appDetails = multer({ dest: 'public/images/AppDetails' });
const userAuth=require("../Middleware/userAuth")
const { showAllApps, UtilityApps, GameApps } = require("../Controllers/appController")


//POST METHODS

router.post('/register',register)
router.post('/login',login)
router.post("/upload/:userId",userAuth,appDetails.fields([
    {name:"appFile",maxCount:1},
    {name:"appIcon",maxCount:1},
    {name:"appScreenshots",maxCount:1},
]),appUpload);

router.post("/feedback/:userId",userAuth,userFeedback)


//GET METHODS

router.get("/header",userAuth,Header)
router.get("/showApp",showAllApps)
router.get("/getUtilityApp",UtilityApps)
router.get("/getGamesApp",GameApps)

module.exports=router