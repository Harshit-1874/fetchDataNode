const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () =>{
try{
    mongoose.connect(process.env.DB_URI).then(()=>console.log("DB connected"));
}catch(e){
    console.log("error connecting to db");
}
}

module.exports = dbConnect;
