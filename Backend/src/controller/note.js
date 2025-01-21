import NoteModel from "../models/note.js";

export const addNote=async(req,res)=>{

    try {
            let note=new NoteModel(req.body)
            await note.save()
            res.send({meessage:"Note create successful."})
        
    } catch (error) {
        res.send(error)
    }
}
export const getNote=async(req,res)=>{

    try {
            let note=await NoteModel.find({userId:req.body.userId})
           // await note.save()
            res.send({meessage:"Note found successful.",note:note})
        
    } catch (error) {
        res.send(error)
    }
}
export const updateNote=async(req,res)=>{

    try {
            let note=await NoteModel.findByIdAndUpdate(req.params.id,req.body)
           // await note.save()
            res.send({meessage:"Note update successful."})
        
    } catch (error) {
        res.send(error)
    }
}
export const deleteNote=async(req,res)=>{

    try {
        
        let note=await NoteModel.findByIdAndDelete(req.params.id)
        res.send({meessage:"Note Delete successful."})
        
    } catch (error) {
        res.send(error)
    }
}