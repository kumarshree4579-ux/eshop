import mongoose from "mongoose";
import EnvData from "./EnvData.js";



const connectDb = async () => {
    try {
            const conn= mongoose.connect(EnvData.DB_URL)
            console.log('Mongodb connected successsfully')
    } catch (error) {
        console.log('Mongodb connection failed!' + error)
    }
}

export default connectDb

