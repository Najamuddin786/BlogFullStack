import express from "express";
import connection from "./src/config/db.js";
import userRouter from "./src/routes/user.js";
import noteRouter from "./src/routes/note.js";

const app=express()
const port=3000;

app.use(express.json())

app.use('/user',userRouter)
app.use('/note',noteRouter)


app.listen(port,async()=>{
    try {
        await connection
        console.log(`MongoDB Connected`)
    } catch (error) {
        console.log(`MongoDB Not Connected & Error : ${error}`)
    }
    console.log(`Server is Running on port ${port}`)
})