require("dotenv").config();
const express = require("express")
const app=express()
const mongoose=require("mongoose")
require("./data/connection")

const Products=require('./models/productsSchema')

const DefaultData = require("./defaultdata")






const port=8000;
app.listen(port,()=>{
    console.log(`server is running on port no ${port}`);
})