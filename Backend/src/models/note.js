import mongoose from "mongoose";

// ------ Define Schema
const noteSchema=new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    discription:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    user:{type:String,required:true}
})

// --------- Define Model
const NoteModel=mongoose.model('note',noteSchema)
export default NoteModel