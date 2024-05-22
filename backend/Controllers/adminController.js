const userModel = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const adminModel = require("../Models/adminModel");
const appModel = require("../Models/appModel");
const appReport = require("../Models/reportAppModel");
const feedbackModel = require("../Models/userFeedbackModel");
const adminCommentModel = require("../Models/adminFeedCommentModel");
const adminNotification=require("../Models/adminNotification")
const bcrypt = require("bcrypt");
const maxAge = 3 * 24 * 60 * 60;

const createAdminToken = (id) => {
  return jwt.sign({ id }, "adminJWT", {
    expiresIn: maxAge,
  });
};

module.exports.adminLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const admin = await adminModel.findOne({ email });
    if (admin) {
      const adminAuth = await bcrypt.compare(password, admin.password);
      if (adminAuth) {
        const adminToken = createAdminToken(admin._id);
        return res.json({
          message: "login successfully",
          status: true,
          token: adminToken,
          adminDetails: admin,
        });
      }
      return res.json({ message: "Invaild password", status: false });
    }
    return res.json({ message: "Admin not found", status: false });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error", status: false });
  }
};

module.exports.userList = async (req, res, next) => {
  try {
    const userlist = await userModel.find();
    if (userlist) {
      res.json({ status: true, userlist });
    }
  } catch (error) {
    console.log(error);
  }
};


module.exports.adminHeader = async (req, res) => {
  try {
    const adminUser = req.admin;
    return res.json({ status: true, admin: adminUser });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error", status: false });
  }
};

module.exports.fetchAllApps = async (req, res) => {
  try {
    const Data = await appModel.find().populate({
      path: "userId",
      model: "user",
      select: "username email verified blockStatus",
    });
    console.log(Data, "All Application Details !!!!");
    return res.json({ Data, status: true });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error", status: false });
  }
};

module.exports.appAproval = async (req, res) => {
  try {
    const appId = req.params.id;
    const appDetails = await appModel.findByIdAndUpdate(
      appId,
      { verified: true },
      { new: true }
    );
    return res.json({
      message: "Application Approved",
      status: true,
      appDetails,
    });
  } catch (error) {
    return res.json({ message: "Internal server error", status: false });
  }
};

module.exports.appBlock = async (req, res) => {
  try {
    const appId = req.params.id;
    const appDetails = await appModel.findByIdAndUpdate(
      appId,
      { verified: false },
      { new: true }
    );
    return res.json({
      message: "Application Blocked",
      status: true,
      appDetails,
    });
  } catch (error) {
    return res.json({ message: "internal server error", status: false });
  }
};

module.exports.viewComplaints = async (req, res) => {
  try {
    const complaintDetails = await appReport.find().populate({
      path: "userId",
      model: "user",
      select: "username email verified blockStatus",
    });
    return res.json({ message: "Complaints", status: true, complaintDetails });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error", status: false });
  }
};

module.exports.fetchFeeddetails = async (req, res) => {
  try {
    const feedId = req.params.id;
    const data = await feedbackModel.findById(feedId).populate({
      path: "userId",
      model: "user",
      select: "username email verified blockStatus",
    });
    if (data) {
      return res.json({ message: "Success", status: true, data });
    } else {
      return res.json({ message: "Failed", status: false });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error", status: false });
  }
};

module.exports.sendComments = async (req, res) => {
  try {
    const feedId = req.params.feedId;
    const CommentExist = await adminCommentModel.find({
      to: req.body.userId,
      feedId: feedId,
    });
    if (CommentExist.length<0) {
      return res.json({
        message: "Already sended ",
        status: true,
      });
    }
    const feedbackComment = new adminCommentModel({
      to: req.body.userId,
      feedId: feedId,
      message: req.body.value,
    });
    const data = feedbackComment.save();
    if (data) {
      return res.json({
        message: "Message sended successfully",
        status: true,
        data,
      });
    } else {
      return res.json({ message: "Unable to send", status: false });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error", status: false });
  }
};


module.exports.fetchFeedComment=async(req,res)=>{
  try {
    const userId=req.params.userId
    const data=await adminCommentModel.find({to:userId}).populate({
      path: "feedId",
      model: "UserFeedback",
      select: "category feedbackComment feedbackStatus ",
    });
    if(data){
      await adminCommentModel.updateMany(
        { to: userId, viewed: false },
        { $set: { viewed: true } }
      );
      return res.json({message:"Success",status:true,data})
    }
    
  } catch (error) {
    console.log(error);
    return res.json({message:"Internal server error",status:false})
  }
}

module.exports.sendNotification=async(req,res)=>{
  try {
    console.log(req.body,"DDDDYY");
    const {type,userId,message}=req.body

    const newNotification= new adminNotification({
      notificationType:type,
      ReceiverId:userId,
      Message:message
    })

    const data=await newNotification.save()

    if(data){
    return res.json({message:"Notification sended successfully",status:true,data})
    }else{
      return res.json({message:"Failed to send Notification",status:false})
    }
    
  } catch (error) {
    console.log(error);
    return res.json({message:"Internal server error",status:false})
  }
}


module.exports.PieChartDetails=async(req,res)=>{
  try {
    const totalApps = await appModel.find().count()
    const gamesApps =await appModel.find({ Category: "Game"}).count()
    const utilityApps=await appModel.find({ Category: "Utilities"}).count()
    const macApps=await appModel.find({OS:"MAC"}).count()
    const windowsApps=await appModel.find({OS:"Windows"}).count()
    const linuxApps=await appModel.find({OS:"Linux"}).count()

    return res.json({status:true,totalApps,gamesApps,utilityApps,macApps,windowsApps,linuxApps})

  } catch (error) {
    console.log(error);
    return res.json({message:"Internal server error",status:false})
  }
}