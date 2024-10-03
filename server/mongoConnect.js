import mongoose from "mongoose";

const mongoDbConnect = async()=>{
    try{

        await mongoose.connect(process.env.CONNECTION_URI).then(()=>{
            console.log('DataBase Connected');
        }).catch(err=>console.log({msg:err.message}))
    }
    catch(err){
        console.log({msg:err.message})
    }
}

export default mongoDbConnect