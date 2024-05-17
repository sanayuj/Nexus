const appModel = require("../Models/appModel");
const reportedAppModel = require("../Models/reportAppModel");
const wishlistModel = require("../Models/wishListModel");
const feedbackModel=require("../Models/userFeedbackModel")
const userModel=require("../Models/userModel")
module.exports.showAllApps = async (req, res) => {
  try {
    const data = await appModel.find({verified:true});
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
    const data = await appModel.find({ Category: "Game" ,verified:true});
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

module.exports.UtilityApps = async (req, res) => {
  try {
    const data = await appModel.find({ Category: "Utilities",verified:true });
    if (data) {
      return res.json({ data, status: true });
    } else {
      return res.json({ status: false });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error", status: false });
  }
};

module.exports.GameApps = async (req, res) => {
  try {
    const data = await appModel.find({ Category: "Game",verified:true });
    if (data) {
      return res.json({ data, status: true });
    } else {
      return res.json({ status: false });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error", status: "false" });
  }
};

module.exports.selectedApps = async (req, res) => {
  try {
    const appId = req.params.appId;
    const appData = await appModel.findById(appId);
    if (appData) {
      return res.json({ message: "Success", status: true, appData });
    }
    return res.json({ message: "Unable to fetch data", status: false });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error", status: false });
  }
};

module.exports.appReport = async (req, res) => {
  try {
    console.log(req.body, "DDDDYYY");
    const reportExist = await reportedAppModel.find({
      userId: req.body.userId,
      appId: req.body.appId,
    });
    console.log(reportExist,"😆");
    if (reportExist.length>0) {
      return res.json({
        message: "Application Already Reported ",
        status: true,
      });
    }
    const reportedApp = new reportedAppModel({
      userId: req.body.userId,
      appId: req.body.appId,
      reportCategory: req.body.reportCategory,
      reportMessage: req.body.reportMsg,
    });
    const data = await reportedApp.save();
    if (data) {
      return res.json({
        message: "Application Reported successfully",
        status: true,
        data,
      });
    } else {
      return res.json({ message: "Unable to Report", status: false });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error", status: false });
  }
};

module.exports.addToWishlist = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { _id: appId } = req.body;
    const existingEntry = await wishlistModel.findOne({ userId, appId });

    if (existingEntry) {
      return res.json({
        message: "App already exists in the wishlist",
        status: false,
      });
    }
    const WishlistDetails = new wishlistModel({
      userId: userId,
      appId: appId,
    });

    const data = await WishlistDetails.save();
    if (data) {
      return res.json({ message: "Added to Wishlist", status: true, data });
    } else {
      return res.json({ message: "Unable to add", status: false });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error", status: false });
  }
};

module.exports.getWishlistApp = async (req, res) => {
  try {
    const userId = req.user._id;
    const wishlistItems = await wishlistModel.find({ userId });

    if (!wishlistItems.length) {
      return res.json({
        message: "No wishlist items found",
        status: true,
        data: [],
      });
    }

    const appDetailsPromises = wishlistItems.map(async (item) => {
      const appDetails = await appModel.findById(item.appId);
      return {
        ...item.toObject(),
        appDetails: appDetails ? appDetails.toObject() : null,
      };
    });

    const wishlistWithAppDetails = await Promise.all(appDetailsPromises);

    return res.json({
      message: "Success",
      status: true,
      data: wishlistWithAppDetails,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error", status: false });
  }
};

module.exports.allWindowsApp = async (req, res) => {
  try {
    const data = await appModel.find({ OS: "Windows" });
    if (data.length>0) {
      res.json({ message: "success", data, status: true });
    } else {
      res.json({ message: "No Windows application found", status: false });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error", status: false });
  }
};


module.exports.allMacApp = async (req, res) => {
  try {
    const data = await appModel.find({ OS: "MAC" });
    if (data.length>0) {
      res.json({ message: "success", data, status: true });
    } else {
      res.json({ message: "No MAC application found", status: false });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error", status: false });
  }
};

module.exports.allLinuxApp = async (req, res) => {
  try {
    const data = await appModel.find({ OS: "Linux" });
    if (data.length>0) {
      res.json({ message: "success", data, status: true });
    } else {
      res.json({ message: "No Linux application found", status: false });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error", status: false });
  }
};

module.exports.getUserFeedback=async(req,res)=>{
  try {
    const feedbackData=await feedbackModel.find().populate({
      path: "userId",
      model: "user",
      select: "username email verified blockStatus",
    });
    if(feedbackData){
      return res.json({message:"success",status:true,feedbackData})
    }else{
      return res.json({message:"failed",status:false})
    }
    
  } catch (error) {
    console.log(error);
    return res.json({message:"Internal server error",status:false})
  }
}