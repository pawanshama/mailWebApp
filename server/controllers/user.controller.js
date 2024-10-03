import {User} from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"

export const register = async(req,res) => {
    try{
      const {fullName,email,password} = req.body;
      if(!fullName || !email || !password) return res.status(400).json({msg:"All fields are required",success:false})
    
      const user = await User.findOne({email})
      if(user) return res.status(400).json({msg:"user already exists", success:false})

      const hashed = await bcrypt.hash(password,10);
      const profilePhoto = `https://avatar.iron.liara.run/public/boy`;
      await User.create({
        fullName,
        email,
        password:hashed,
        profilePhoto
      })

      return res.status(400).json({
        message:"Account created successfully",
        success:true
      })

    }
    catch(err){
          return res.status(500).json({msg:err.message})
    }
}

export const login=async(req,res)=>{
     try{
      const {email,password} = req.body;

      if(!email || !password) return res.status(400).json({})

      const user = await User.findOne({email})
      if(!user) return res.status(401).json({message:"Incorrect email or password",success:false})
   
      const isPasswordMatch = await bcrypt.compare(password,user.password);
      if(!isPasswordMatch) return res.status(401).json({message:'Incorrect password',success:false})
      const tokenData = {
          userId:user._id
      }
      const token = await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'});
      return res.status(200).cookie('token', token,{httpOnly:true,sameSite:'strict'}).json({token,message:`${user.fullName} logged In`,user});
     }
     catch(err){
        console.log(err);
     }
}








