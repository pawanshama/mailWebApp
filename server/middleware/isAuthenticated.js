import jwt from 'jsonwebtoken'
const isAuthenticated  = async(req,res,next)=>{
    try{
         const token =  req.cookies.token;
         if(!token) return res.status(400).json({message:'user not authenticated'})

        const decode = await jwt.verify(token,process.env.SECRET_KEY);
        if(!decode) return res.status(401).json({msg:"Invalid token"})
        
        req.id = decode.userId;
        next();
    }
    catch(err){
        return res.status(500).json({msg:"Authenticated failed"})
    }
}