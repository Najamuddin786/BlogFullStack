import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

let connection=mongoose.connect(process.env.MONGODBURL)
export default  connection