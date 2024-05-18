const mongoose = require("mongoose");

const adminComments = new mongoose.Schema({
    to:{
        type:String,
        required:true
    },
    feedId:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})




module.exports = new mongoose.model("adminComments", adminComments);
