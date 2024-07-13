import { IoStarSharp } from "react-icons/io5";
const Item=({item})=>{
  return <>
  <div className="dev">
  <img className="it" src={item.image}/>
  <h3>{item.name}</h3>
  <p className="price">{item.price}</p>
  <p>{item.stars}<IoStarSharp /></p>
  </div>
  </>
}
export default Item;