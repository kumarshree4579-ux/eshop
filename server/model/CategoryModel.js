import mongoose from "mongoose";

const categorySchema= new mongoose.Schema({
    name:String,
    image:{
        url: String,
        public_id:String
    }
})

export default mongoose.model("Catgory", categorySchema)