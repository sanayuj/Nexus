const appModel = require("../Models/appModel");
const reportedAppModel=require("../Models/reportAppModel")
const wishlistModel=require("../Models/wishListModel")



module.exports.showAllApps = async (req, res) => {
  try {
    const data = await appModel.find();
    if (data) {
      return res.json({ data, status: true });
    } else {
      return res.json({ status: false });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      status: false,
      message: "Unable to fetch User's application",
    });
  }
};



module.exports.FetchGames = async (req, res) => {
  try {
    const data = await appModel.find({Category:"Game"});
    if (data) {
      return res.json({ data, status: true });
    } else {
      return res.json({ status: false });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      status: false,
      message: "Unable to fetch User's application",
    });
  }
};


module.exports.UtilityApps=async(req,res)=>{
  try {
    const data = await appModel.find({Category:"Utilities"});
    if (data) {
      return res.json({ data, status: true });
    } else {
      return res.json({ status: false });
    }
  } catch (error) {
    console.log(error);
    return res.json({message:"Internal server error",status:false})
  }
}

module.exports.GameApps=async(req,res)=>{
  try {
    const data = await appModel.find({Category:"Game"});
    if (data) {
      return res.json({ data, status: true });
    } else {
      return res.json({ status: false });
    }
    
  } catch (error) {
    console.log(error);
    return res.json({message:"Internal server error",status:"false"})
  }
}

module.exports.selectedApps=async(req,res)=>{
  try {
    const appId=req.params.appId
    const appData=await appModel.findById(appId)
if(appData){
  return res.json({message:"Success",status:true,appData})
}
return res.json({message:"Unable to fetch data",status:false})

    
  } catch (error) {
    console.log(error);
    return res.json({message:"Internal server error",status:false})
  }
}

module.exports.appReport=async(req,res)=>{
  try {
    console.log(req.body,"DDDDYYY");
    const reportExist=await reportedAppModel.find({userId:req.body.userId,appId:req.body.appId})
    if(reportExist){
      return res.json({message:"Application Already Reported ",status:true})
    }
    const reportedApp=new reportedAppModel({
      userId:req.body.userId,
      appId:req.body.appId,
      reportCategory:req.body.reportCategory,
      reportMessage:req.body.reportMsg
    })
    const data=await reportedApp.save()
    if(data){
    return res.json({message:"Application Reported successfully",status:true,data})
    }else{
      return res.json({message:"Unable to Report",status:false})
    }
  } catch (error) {
    console.log(error);
    return res.json({message:"Internal server error",status:false})
    
  }
}

module.exports.addToWishlist=async(req,res)=>{
  try {
    const userId=req.params.userId
    const { _id: appId } = req.body; 
    const existingEntry = await wishlistModel.findOne({ userId, appId });

    if (existingEntry) {
      return res.json({ message: "App already exists in the wishlist", status: false });
    }
    const WishlistDetails = new wishlistModel({
      userId:userId,
      appId:appId
    })

    const data= await WishlistDetails.save()
    if(data){
      return res.json({message:"Added to Wishlist",status:true,data})
    }else{
      return res.json({message:"Unable to add",status:false})
    }

  } catch (error) {
    console.log(error);
    return res.json({message:"Internal server error",status:false})
  }
}


module.exports.getWishlistApp=async(req,res)=>{
  try {
    const userId=req.params.userId
    const data=await wishlistModel.find({userId})
    if(data){
      return res.json({message:"Success",status:true,data})
    }
  
  } catch (error) {
    console.log(error);
    return res.json({message:"Internal server error",status:false})
  }
}