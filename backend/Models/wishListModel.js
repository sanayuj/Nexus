const mongoose=require("mongoose")

const wishList= new mongoose.Schema({
userId:{
    type:String,
    required:true,
},
appId:{
    type:String,
    required:true,
},
})

module.exports = new mongoose.model("wishlist", wishList);