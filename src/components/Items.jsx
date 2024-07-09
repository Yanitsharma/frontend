import { useRef } from "react";
const Items=({handleonClick})=>{
  const userInput=useRef()
  return <>
 <input type="text"placeholder=" Here search book name " ref={userInput} className="ip"></input>
 <button type="button" className="btn btn-warning btn1" onClick={()=>handleonClick(userInput.current.value)}>Search</button>


  </>
}
export default Items;