const userModel=require("../Models/userModel");

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