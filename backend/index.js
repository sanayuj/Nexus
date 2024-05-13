const express=require("express")
const app=express()
require('dotenv').config()
const cors=require("cors")
const dbConfigFile=require("./Config/dbConnection")
const userRoutes=require("./Routes/userRoutes")
const adminRoutes=require("./Routes/adminRoutes")

app.use(cors())
app.use(express.json())

dbConfigFile.dbConnect()

app.use("/img", express.static(__dirname + "/public/images"));
app.use('/',userRoutes);
app.use("/admin",adminRoutes)

app.listen(process.env.PORT,()=>{console.log(`Server is running on ${process.env.PORT}`);})