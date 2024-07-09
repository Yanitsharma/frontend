
import Item from "./Item"
import Filter from "./Filter";

const Body = ({booklist,handleClick})=>{
  
  return <>
 <div className="container1">
  <Filter handleClick={handleClick}/>
   {booklist.map((item)=>(<Item item={item} key={item._id}></Item>))}
   </div>
 </> 
}
export default Body;
