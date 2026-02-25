import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    otp:Number,
    role:{type:String, enum:["admin", "user"], default:"user"},
    image:{
        public_id:String,
        url:String
    },
    isActive:{type:Boolean, default:true},
})


export default mongoose.model("User", userSchema)