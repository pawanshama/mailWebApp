import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import cookieParser from "cookie-parser"
import mongoDbConnect from './mongoConnect.js'
import userRoute from "./userRoutes/user.route.js"
const app = express()

dotenv.config({})

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser());
app.use(cors())

//route
app.use('/user',userRoute)

//listening at port 8000
app.listen(process.env.PORT,()=>{
    console.log('server running');
})

mongoDbConnect();