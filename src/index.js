import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./.env",  
});

const PORT = process.env.PORT || 8000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`✅ Server running at: http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ MongoDB connection failed!", err);
    });
















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