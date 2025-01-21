import jsonwebtoken from 'jsonwebtoken'
import { config } from 'dotenv'
config()

export const sign=async(userId,user)=>{
    console.log(user)
    try {
        if(!userId){
            return 'Please Provide _id'
        }
        if(!user){
            return 'Please Provide User'
        }
        const token=jsonwebtoken.sign({userId:userId,user},process.env.JWT)
        if(!token){
            return {message:"Token Create Problem"}
        }
        return token
        
        
    } catch (error) {
        return {message: `Server error: ${error}`}
    }

}

export const verify=async(req,res,next)=>{
  
    const token = req.headers.authorization;
   // console.log(token)

    try {
        if(!token){
            return res.json({message:"Please Login first."})
        }
        let verify=jsonwebtoken.verify(token,process.env.JWT)
        req.body.userId=verify.userId
        req.body.user=verify.user
      //  console.log(req.body)
        if(verify){
            next()
        }
        return {message:"Some Isson"}
    } catch (error) {
        res.json({message: `Server error: ${error}`})
    }
}