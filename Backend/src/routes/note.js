import express from "express";
import { addNote, getNote,updateNote,deleteNote} from "../controller/note.js";
import { verify } from "../utility/jwt.js";

const noteRouter=express.Router()

noteRouter.post('/',verify,addNote)
noteRouter.get('/',verify,getNote)
noteRouter.patch('/:id',verify,updateNote)
noteRouter.delete('/:id',verify,deleteNote)

export default noteRouter