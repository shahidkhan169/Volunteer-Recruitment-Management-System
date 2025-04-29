const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const helmet=require("helmet")
require("dotenv").config();

const app=express()

app.use(cors())
app.use(helmet())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("connected DB"))
.catch((err)=>console.error("Error:",err.message))


app.listen(3000,()=>console.log("Connected to Port"))
