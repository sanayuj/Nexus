const appModel = require("../Models/appModel");

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