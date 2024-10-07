import emailModel from "../models/email.model.js";

export const createEmail = async(req,res)=>{
    try{
         const userId = req.id;
         const {to,subject,message} = req.body;
         if(!to || !subject || !message) return res.status(400).json({msg:"each field is required"})
         const email = await emailModel.create({
         to,subject,message,userId})
         
         return res.status(200).json({email})
    }
    catch(error){
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
}

export const deleteEmail = async(req,res)=>{
    try{
          const emailId = req.params.id;
          if(!emailId) return res.status(400).json({message:"email id is required"})
          const email = await emailModel.findOneAndDelete(emailId);
          if(!email) return res.status(400).json({message:"Email not found"})
          return res.status(200).json({message:"Email deleted successfully"})
        }
    catch(err){
        console.log(err);
        
    }
}

export const getAllEmailById = async(req,res)=>{
    try {
        const userId = req.id;
        const emails = await emailModel.find({userId});
        if(!emails) return res.status(400).json({msg:"No User Present"})
        return res.status(200).json({
            emails
        })
    } catch (error) {
        console.log(error);
        
    }
}