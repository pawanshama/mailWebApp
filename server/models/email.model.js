import mongoose from "mongoose";

const emailDetail = mongoose.Schema({
       to:{
        type:String,
        required:true
       },
       subject:{
        type:String,
        required:true
       },
       message:{
        type:String,
        required:true
       },
       profilePhoto:{
        type:String
       },
       userId:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'User'
       }
},{
    timestamps:true
})

export default mongoose.model("email",emailDetail)