const mongoose = require("mongoose");

const DB = process.env.URL;

mongoose.connect(DB).then(()=>console.log("MongoDB connected")).catch((error)=> console.log("error"+ error.message))