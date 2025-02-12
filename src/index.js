import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";


dotenv.config({
    path: "./.env",  
});


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server running at : port ${process.env.PORT}`)
    })
})
.catch((err)=>{
console.log("mongodb failed ! ",err)
})























/*
;(async()=>{
    try{
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     app.on("error",(err)=>{
        console.log("ERR:",err);
        throw error
     })
     app.listen(process.env.PORT,()=>{
        console.log(`App is listensing on port ${process.env.PORT}`)
     })
    }
    catch(error){
        console.log("ERROR",error)
        throw error
    }
})()
    */