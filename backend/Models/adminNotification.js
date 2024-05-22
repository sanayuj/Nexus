const mongoose = require("mongoose");

const adminNotification = new mongoose.Schema({

notificationType:{
    type:String,
    required:true
},
ReceiverId:{
    type:String,
   
},
Message:{
    type:String,
    required:true
}
})

module.exports = new mongoose.model("Notification", adminNotification);