import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
    name:String,
    price:Number,
    mrp:Number,
    stock: Number,
    image:{
        url:String,
        public_id:String,
    },
    description:String,
    category: {type: mongoose.Schema.Types.ObjectId, ref:"Category"},
    isActive:{type:Boolean, default:true},
})

export default mongoose.model("Product", productSchema)