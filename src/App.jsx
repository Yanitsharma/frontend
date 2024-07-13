import 'bootstrap/dist/css/bootstrap.min.css'
import { FaBookOpenReader } from "react-icons/fa6";
import './App.css'
import Items from './components/Items';
import Navbar from './components/Navbar';
import Body from "./components/Body";
import axios from "axios";
import { useEffect, useState } from "react";
import Logout from './components/Logout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  let count=1;
  
  const [booklist,setbooklist]=useState([]);
  
  
 useEffect(()=>{
  axios.get("https://frontend-1-j4sv.onrender.com/api/book").then((res)=>{

      
      if(count){
      setbooklist(res.data);
     console.log(res.data);
     toast.success('welcome to our website !', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      }
     count=0;
     
     
  })
 },[])
 
 
 const search=async (obj)=>{
  try{
let response=await axios.post('https://frontend-1-j4sv.onrender.com/book',obj);
console.log(response.data);
setbooklist(response.data);
  }
  catch(error){
console.log(error);
  }
 }
 
 const filter=async (abj)=>{
  try{
    let response=await axios.post('https://frontend-1-j4sv.onrender.com/book',abj);
    console.log(response.data);
    setbooklist(response.data);
      }
      catch(error){
    console.log(error);
      }
 }
 let obj={};
 let abj={};
  const handleonClick=(value)=>{
   obj= {name:value};
   
  search(obj);
  }
  const handleClick=(value) =>{
   abj={name:value};
    filter(abj);
  } 
  

  return (

    <>
   
    <div className="box1">
      <div className="b">
        <div className="bt">
      <FaBookOpenReader  />
      </div>
      <div className="bt1">ookStore</div>
      </div>
      <Items handleonClick={handleonClick} />
      </div>
      <Navbar/>
      <Logout/>
      <ToastContainer/>
      <Body booklist={booklist} handleClick={handleClick}/>
      
      

</>
  )}
export default App
