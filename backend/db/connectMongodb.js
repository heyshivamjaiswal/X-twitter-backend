import mongoose from "mongoose";
import dotenv from "dotenv";

const connectMongo = async ()=>{
    try{
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`MongoDB connected: ${conn.connection.host}`)
    }catch(error){
      console.log(`Error connection to mongoDB: ${error.message}`);
      process.exit(1);  
    }
}

export default connectMongo;  
