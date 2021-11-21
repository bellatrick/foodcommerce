const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://Bellatrix:Damilola1996@cluster0.7r2zj.mongodb.net/foodcommerce?retryWrites=true&w=majority')
.then(()=>console.log('db connection successful')).catch(err=>console.log(err))
app.listen(5000, () => {
  console.log("backend server is running");
});
