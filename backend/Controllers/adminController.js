const userModel=require("../Models/userModel");
const jwt = require("jsonwebtoken");
const adminModel=require("../Models/adminModel")
const bcrypt=require("bcrypt")
const maxAge=3 * 24 * 60 * 60;

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




module.exports.userList=async(req,res,next)=>{
    try{
        const userlist=await userModel.find()
        if(userlist){
            res.json({status:true,userlist})
        }
    }catch(error){
        console.log(error);
    }
}

module.exports.blockUser=async(req,res)=>{
    try{
        const id=req.params.id
        const userDetails = await userModel.findById(id);
        console.log(userDetails,"Student Details!!")
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
          })
    }
}