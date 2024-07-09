const mongoose=require('mongoose');
const BookSchema= new mongoose.Schema({
  image:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    required:true,
  },
  price:{
    type:String,
    required:true,
  },
  stars:{
type:Number,
required:true,
  },
});




const Book= mongoose.model('Book',BookSchema);
module.exports=Book;