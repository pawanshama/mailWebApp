import mongoose from "mongoose";

const emailDetail = mongoose.Schema({
       to:{
        type:String,
        required:true
       },
       sunject:{
        type:String,
        required:true
       },
       password:{
        type:String,
        required:true
       },
       profilePhoto:{
        type:String,
        required:true
       }
},{
    Timestamps:true
})

export default mongoose.model("email",emailDetail)