import mongoose from "mongoose";

// ------ Define Schema
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,enum:["user","admin"],default:"user"}
})

// --------- Define Model
const UserModel=mongoose.model('user',userSchema)
export default UserModel