const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const appSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
      },
      appName:{
        type:String,
        required:true
      },
      appDescription:{
        type:String,
        required:true
      },
      apkFile:{
        type:String,
        required:true
      },
      devName:{
        type:String,
        required:true
      },
      publisherName:{
        type:String,
        requied:true
      },
      Category:{
        type:String,
        required:true
      },
      appScreenshot:{
        type:String,
        required:true
      },
      appIcon:{
        type:String,
        required:true
      },
      verified:{
        type:Boolean,
        default:false
      }
    })


  module.exports = new mongoose.model("AppDetails", appSchema);