const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{type:String, required:true, unique:true},
    username:{type:String, required:true, unique:true}
})