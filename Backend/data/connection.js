const mongoose = require("mongoose")
const DB=process.env.URL;

mongoose.connect(DB).then(()=>console.log("data base connected"))
.catch((er)=> console.log("er"+error.message))