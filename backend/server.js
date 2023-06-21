require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const workoutRoutes=require('./routes/workouts')
//expres app
const app=express()
//middleware to log out requests coming in
app.use(express.json())
app.use((req,res,next)=>{
    console.group(req.path,req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)
//connect to db
mongoose.connect(process.env.MONG_URL)
 .then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('connected to db listening ')
    })
 })
 .catch((error)=>{
    console.log(error)
 })
//listen for brequests

