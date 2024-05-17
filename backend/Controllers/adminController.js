const userModel = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const adminModel = require("../Models/adminModel");
const appModel=require("../Models/appModel")
const feedbackModel=require("../Models/userFeedbackModel")
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

module.exports.blockUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userDetails = await userModel.findById(id);
    console.log(userDetails, "Student Details!!");
    userDetails.blockStatus = !userDetails.blockStatus;
    await userDetails.save();
    if (userDetails.blockStatus) {
      return res.json({
        message: "User blocked successfully",
        status: userDetails.blockStatus,
      });
    } else {
      return res.json({
        message: "User unblocked successfully",
        status: userDetails.blockStatus,
      });
    }
  } catch (error) {
    return res.json({
      message: "Internal server error in disable user ",
      status: false,
    });
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

module.exports.fetchAllApps=async(req,res)=>{
  try {

    const Data=await appModel.find().populate({
      path: "userId",
      model: "user",
      select: "username email verified blockStatus",
    });
    console.log(Data,"All Application Details !!!!");
    return res.json({Data,status:true})
  } catch (error) {
    console.log(error);
    return res.json({message:"Internal server error",status:false})
  }
}

module.exports.appAproval=async(req,res)=>{
  try {
    const appId=req.params.id
    const appDetails = await appModel.findByIdAndUpdate(appId, { verified: true }, { new: true });
    return res.json({message:"Application Approved",status:true,appDetails})
  } catch (error) {
    return res.json({message:"Internal server error",status:false})
  }
}

module.exports.appBlock=async(req,res)=>{
  try {
    const appId=req.params.id
    const appDetails = await appModel.findByIdAndUpdate(appId, { verified: false }, { new: true });
    return res.json({message:"Application Blocked",status:true,appDetails})
  } catch (error) {
    return res.json({message:"internal server error",status:false})
  }
}

module.exports.viewComplaints=async(req,res)=>{
  try {
    const complaintDetails=await feedbackModel.find({category:"Complaint"}).populate({
      path: "userId",
      model: "user",
      select: "username email verified blockStatus",
    });
    return res.json({message:"Complaints",status:true,complaintDetails})
  } catch (error) {
    console.log(error);
    return res.json({message:"Internal server error",status:false})
  }
}


