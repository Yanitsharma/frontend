import { useAuth0 } from "@auth0/auth0-react";
const Logout=()=>{
  const  {user,logout}=useAuth0();
   
   

  return <>
   <button className="btn btn-info logout" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
    </>
}
export default Logout;