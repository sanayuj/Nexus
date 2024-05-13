const mongoose=require("mongoose")

module.exports={
    dbConnect:async ()=>{
        try{
       await mongoose.connect('mongodb://127.0.0.1:27017/Nexus').then(()=>{console.log("Database connected successfully")})
        }
        catch(error){
            console.log(error);
        }
    }
}