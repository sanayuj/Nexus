const mongoose=require("mongoose")
const bcrypt=require("bcrypt")

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    contactNo:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    verified:{
        type:String,
        required:false,
    },
    blockStatus:{
        type:String,
        required:false,
    },
    date:{
        type:Date,
        default:Date.now,
    },
});

userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        const salt=await bcrypt.genSalt();
        this.password=await bcrypt.hash(this.password,salt);
    }
    next();
});

module.exports=new mongoose.model("user",userSchema);