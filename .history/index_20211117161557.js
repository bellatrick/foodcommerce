const express = require("express");
const app = express();
const dotenv=require('dotenv')
dotenv.config()
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL ||5000)
.then(()=>console.log('db connection successful')).catch(err=>console.log(err))
app.listen(5000, () => {
  console.log("backend server is running");
});
