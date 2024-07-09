const express=require('express');
const app=express();
const db=require('./db');
require('dotenv').config();
const cors=require('cors');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(cors());
const Book =require('./Models/Books');
const credential=require('./Models/Credentials');

app.post('/api/book',async (req,res)=>{
  try{
   const data=req.body;
   const newBook=new Book(data);
   const response=await newBook.save();
   console.log(response);
   res.status(200).json(response);
  }
  catch(error){
    console.log(error);
    res.status(500).json({error:'internal server error'});
  }
})
app.get('/api/book',async (req,res)=>{
  try{
  const data=await Book.find();
  res.status(200).json(data);
  console.log("data send successfully");
  }
  catch(error){
    console.log(error);
    res.status(500).json({error:'internal server error'});
  }

})
app.post('/book',async (req,res)=>{
  try{
 const data=req.body.name;
 const response=await Book.find({name:{$regex:data}});
console.log(response);
res.status(200).json(response);
  }
  catch(error){
    console.log(error);
    res.status(500).json({error:'internal server error'});
  }
})
app.post('/api/home',async (req,res)=>{
  try{
  const data=req.body;
  const newcredential= new credential(data);
  const response=await newcredential.save();
  res.status(200).json(response);
  }
  catch(error){
    console.log(error);
    res.status(500).json({error:'internal server error'});
  }

})
const port=process.env.PORT;
app.listen(port,()=>{
  console.log('server is running on 3000');
})