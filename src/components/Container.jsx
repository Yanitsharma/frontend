import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaBookOpenReader } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Container = () => {
  const {user,loginWithRedirect}=useAuth0();
  // console.log(user);
  const navigate = useNavigate();
  const firstName = useRef();
  const lastName = useRef();
  const Email = useRef();
  const password = useRef();
  const handleOnclick = async () => {
    const first = firstName.current.value;
    const last = lastName.current.value;
    const Email1 = Email.current.value;
    const pass = password.current.value;
    
    let data = {
      First: first,
      Last: last,
      Email: Email1,
      Password: pass,
    };
    try {
      let response = await axios.post("https://frontend-1-j4sv.onrender.com/api/home", data);
      console.log(response.data);
      firstName.current.value = "";
    lastName.current.value = "";
    Email.current.value = "";
    password.current.value = "";
      navigate("/app");

    } catch (error) {
      console.log(error);
      let obj=JSON.parse(error.config.data);

      if(obj.Password==""||obj.First==""||obj.Last==""||obj.Email==""){
      toast.error(' field empty!', {
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
    else{
      toast.error(' user already registered!', {
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
  }
}
  return (
    <>
      <div className="b">
        <div className="bt">
      <FaBookOpenReader  />
      </div>
      <div className="bt1">ookStore</div>
      </div>
      <ToastContainer/>

      <div className="container">
        <h1 className="h">Create an account</h1>
        <div className="contain">
          <div className="google">
            <FcGoogle className="svg" />
            <p>sign in with google</p>
          </div>
          <div className="facebook">
            <FaFacebook className="svg" />
            <p>sign with facebook</p>
          </div>
        </div>
        <p className="p">or</p>
        <div className="d">sign up with your email address</div>
        <span>
          <input
            type="text"
            className="button"
            placeholder="First Name"
            ref={firstName}
          />
          <input
            type="text"
            className="button"
            placeholder="Last Name"
            ref={lastName}
          />
        </span>
        <div className="div">
          <input
            type="email"
            className="but"
            placeholder="Email address"
            ref={Email}
          />
          <input
            type="password"
            className="but"
            placeholder="password"
            ref={password}
          />
        </div>
        <button
          type="button"
          className="btn btn-warning bu"
          onClick={handleOnclick}
        >
          Create Account
        </button>
        <div className="log">
          {" "}
          <p className="pg">
            Already have account?{" "}
            <button type="button" className="btn btn-danger" onClick={()=>loginWithRedirect()}>
              log in
            </button>
    
          </p>
        </div>
      </div>
    </>
  );
};
export default Container;
