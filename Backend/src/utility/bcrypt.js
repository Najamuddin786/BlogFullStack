import bcrypt from 'bcrypt'
import {config} from 'dotenv'
config()

export const hash=async(password)=>{
    try {
        const hashPassword=bcrypt.hash(password,Number(process.env.SALTROUND))
        console.log(hashPassword)
        return hashPassword
    } catch (error) {
        res.status(400).json({message: `Server Error: ${error}`,});
    }
}
export const hashVerify=async(password,hash)=>{
    try {
        const verify=bcrypt.compare(password,hash)
      //  console.log(verify)
        return verify
    } catch (error) {
        res.status(400).json({message: `Server Error: ${error}`,});
    }
}