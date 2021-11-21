const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect()
.then(()=>console.log('db connection successful')).catch(err=>console.log(err))
app.listen(5000, () => {
  console.log("backend server is running");
});
