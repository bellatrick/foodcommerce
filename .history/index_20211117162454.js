const express = require("express");
const app = express();
const { MONGO_URL} = require("./config");
const mongoose = require("mongoose");

mongoose.connect(MONGO_URL )
.then(()=>console.log('db connection successful')).catch(err=>console.log(err))
app.get('')
app.listen(5000, () => {
  console.log("backend server is running");
});
