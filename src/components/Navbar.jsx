import { RxDropdownMenu } from "react-icons/rx";
const Navbar=()=>{
return <>
<div className="nav"><div className="div1"><RxDropdownMenu />Shop By Categories</div>
<div className="Items">
 <a href="#" className="a">Home</a>
 <a href="#" className="a">Shop</a>
 <a href="#" className="a">Categories</a>
 <a href="#" className="a">Products</a>
 <a href="#" className="a">Top deals</a>
 <a href="#" className="a">Elements</a>
  
  </div><div className="top"><RxDropdownMenu />Top Offers</div></div>
</>
}
export default Navbar;