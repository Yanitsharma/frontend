const mongoose=require('mongoose');
const credentialsSchema= new mongoose.Schema({
  First:{
    type:String,
    required:true,
  },
  Last:{
    type:String,
    required:true,
  },
  Email:{
    type:String,
    required:true,
    unique:true,
  },
  Password:{
type:String,
required:true,
  },
});




const credential= mongoose.model('credential',credentialsSchema);
module.exports=credential;