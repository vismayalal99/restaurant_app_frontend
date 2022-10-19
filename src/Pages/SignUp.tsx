import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {toast,ToastContainer} from "react-toastify"


function SignUp() {

  const [userName, setUserName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [phoneNo, setPhoneNo] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
 
const history=useHistory()
  function handleSubmit() {
    axios.post('http://localhost:7000/userdata/signup',{username:userName,email:email,password:password,lastname:lastName,phone:phoneNo}
    ).then((res)=>{
     if(res.data.success == true){
      history.push("/login")
     }
     toast.success(res.data.message, {
      position: toast.POSITION.TOP_CENTER
      })
     console.log(res.data)
    
    }).catch((err)=>{
      toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_CENTER
    })
      console.log(err)
    })
 
  }

 
    return ( 
        <div
        style={{ width: "40%",margin: "10% auto",padding: "10%",backgroundColor:"lightgray",textAlign: "center", borderRadius: "8px",}}
      >
        <ToastContainer />
        <form>
          <label>FirstName</label>
          <br></br>
          <input  style={{lineHeight:'30px',margin:'20px'}}
            size={50}
            type="text"
            value={userName} onChange={(e) => setUserName(e.target.value)}
          />
           <br></br>
           <label>LastName</label>
         <br></br>
         <input  style={{lineHeight:'30px',margin:'20px'}}
            size={50}
            type="text"
            value={lastName} onChange={(e) => setLastName(e.target.value)}
          />
         <br></br>
          <label>PhoneNo</label>
         <br></br>
          <input style={{lineHeight:'30px',margin:'20px'}}
            size={50}
            type="text"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
         <br></br>
         <label>Email</label>
         <br></br>
         <input  style={{lineHeight:'30px',margin:'20px'}}
            size={50}
            type="email"
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
          
         <br></br>
          <label>Password</label>
         <br></br>
          <input style={{lineHeight:'30px',margin:'20px'}}
            size={50}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          
          <button style={{padding:'8px 10px'}} onClick={()=>{handleSubmit()}} type="button" > SIGN UP </button>
        </form>
      </div>
     );
     
}

export default SignUp;