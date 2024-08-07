require('dotenv').config()
const express= require('express');
const app=express();


app.get('/', (req,res)=>{
    res.send("Hammad Gujjar is the best")
})

app.get('/hammad',(req,res)=>{
    res.send("Yeahhh Hammmad is best")
})

app.get('/login',(req, res)=>{
    res.send("<h1>Please Login </h1>" )
})
app.listen(process.env.PORT,()=>{
    console.log(`Backend is running on port ${process.env.PORT}`)
})