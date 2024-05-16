const mongoose=require("mongoose")

const ReportedApps= new mongoose.Schema({
userId:{
    type:String,
    required:true,
},
appId:{
    type:String,
    required:true,
},
reportCategory:{
    type:String,
    required:true,
},
reportMessage:{
    type:String,
    required:true,
}
})

module.exports = new mongoose.model("ReportedApps", ReportedApps);