const mongoose = require("mongoose");

const adminComments = new mongoose.Schema({
    to:{
        type:String,
        required:true
    },
    feedId:{
        type: mongoose.Schema.Types.ObjectId,
    ref: "UserFeedback",
    required: true,
    },
    message:{
        type:String,
        required:true
    },
    viewed:{
        type:Boolean,
        default:false
    }
})




module.exports = new mongoose.model("adminComments", adminComments);
