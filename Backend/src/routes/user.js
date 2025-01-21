import express from "express";
import { addUser ,login,updateUser,deleteUser} from "../controller/user.js";
import { verify } from "../utility/jwt.js";

const userRouter=express.Router()

userRouter.post('/signup',addUser)
userRouter.post('/login',login)
userRouter.patch('/login/:id',verify,updateUser)
userRouter.delete('/login/:id',verify,deleteUser)

export default userRouter