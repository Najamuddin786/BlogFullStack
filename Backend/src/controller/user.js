import UserModel from "../models/user.js";
import { hash,hashVerify } from "../utility/bcrypt.js";
import { sign,verify } from "../utility/jwt.js";

export const addUser = async (req, res) => {
  try {
    // Check if user already exists
    const userEx = await UserModel.findOne({ email: req.body.email }); // Use `findOne` for efficiency
    if (userEx) {
      return res.status(200).json({
        message: `User already present. Please log in.`,
      });
    }

    // Hash the password
    const hashedPassword = await hash(req.body.password);
    if (!hashedPassword) {
      return res.status(400).json({
        message: `Password hashing failed. User creation unsuccessful.`,
      });
    }

    // Create a new user
    const user = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    await user.save();

    res.status(201).json({
      message: `User created successfully.`,
    });
  } catch (error) {
    res.status(500).json({
      message: `Server error: ${error.message || error}`,
    });
  }
};

export const login = async (req, res) => {
    try {
      
       // console.log(req.user);
      // Find user by email
      const user = await UserModel.findOne({ email: req.body.email });
      
  
      if (!user) {
        return res.status(404).json({ message: `User not found. Please sign up first.` });
      }
  
      // Verify the password
      const isPasswordValid = await hashVerify(req.body.password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: `Invalid password. Please try again.` });
      }
  
      // Generate a JWT token
      const userToken = await sign(user._id,user.name);
      console.log(userToken)
  
      // Send response with token
      res.status(200).json({
        message: 'User logged in successfully.',
        token: userToken,
        user: { id: user._id, name: user.name, email: user.email }, // Minimal user info
      });
  
    } catch (error) {
        console.log(error)
      res.status(500).json({ message: `Server error`, error });
    }
  };
export const updateUser = async (req, res) => {
    try {
      
       // console.log(req.user);
      // Find user by email
      const f=await UserModel.findById(req.params.id)
      if(!f){
        return res.send({message:"User Not present"})
      }
      const user = await UserModel.findByIdAndUpdate(req.params.id,req.body);
      res.send({message:"User updated."})
  
    } catch (error) {
        console.log(error)
      res.status(500).json({ message: `Server error`, error });
    }
  };
export const deleteUser = async (req, res) => {
    try {
        if(!f){
            return res.send({message:"User Not present"})
          }
      
       // console.log(req.user);
      // Find user by email
      const user = await UserModel.findByIdAndDelete(req.params.id);
      
      res.send({message:"User Deleted."})
  
    } catch (error) {
        console.log(error)
      res.status(500).json({ message: `Server error`, error });
    }
  };
