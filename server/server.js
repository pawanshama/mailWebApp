import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import cookieParser from "cookie-parser"
import mongoDbConnect from './mongoConnect.js'
import userRoute from "./userRoutes/user.route.js"
import emailRoute from "./userRoutes/email.route.js"
const app = express()

dotenv.config({})

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser());
app.use(cors())

//route
app.use('/user',userRoute)
app.use('/email',emailRoute)

//listening at port 8000
app.listen(process.env.PORT,()=>{
    console.log('server running');
})

mongoDbConnect();