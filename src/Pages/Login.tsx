import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import { signinButton } from "../Redux/Authentication/AuthActions";
import { toast, ToastContainer } from "react-toastify";


function Login() {

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const history = useHistory();
  const dispatch =useDispatch()
  const auth=useSelector((state:any)=>state.authData.auth)
  const content =useSelector((state:any)=>state.homeContentData.data)
  console.log(content)

  useEffect(()=>{
    const data={UserName:"admin",Password:"123"}
    localStorage.setItem("token",JSON.stringify(data));
    console.log(data)
    localStorage.setItem("authState",auth)
  },[auth])

  useEffect(()=>{
    console.log("mount")
  })

  useEffect(()=>{
  // return()=>{
  console.log("update")
  //  }
  })

  useEffect(()=>{
  return()=>{
    console.log("unmount")
  }
  },[])

console.log("user",auth);

  function handleSubmit() {
    
    axios.post('http://localhost:7000/userdata/login',{email:email,password:password})
    .then((res)=>{
    const Token=res.data.token;
    localStorage.setItem("acesstoken",Token);
    console.log(res)
    const datas=res.data.data;
    const user=datas.map((item:any)=>item)
    const id=datas.map((item:any)=>item.id)
    const resEmail=datas.map((item:any)=>item.email);
    console.log(auth);
    // dispatch(signinButton())
    console.log(auth);
    localStorage.setItem("user_id",id)
    
   // localStorage.setItem("authState",auth)
     if(resEmail == email){
     dispatch(signinButton())
     // localStorage.setItem("authState",auth)
      history.push("/")
     } 
    }).catch((err)=>{
      console.log(err)
      toast.error(err.response.data.message,{
        position:toast.POSITION.TOP_CENTER
      })
    })
    
    console.log(auth)
  }

  console.log(auth)
    return ( 
        <div
        style={{ width: "20%",margin: "5% auto",padding: "8%",backgroundColor: "lightslategray", textAlign: "center",alignItems:"center", borderRadius: "8px",}}
      >
        <ToastContainer />
        <form>
         <label>Email</label>
          <br></br>
          <br></br>
          <input  style={{lineHeight:'30px',marginBottom:'20px'}}
            size={40}
            type="text"
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
         <br></br>
          <label>Password</label>
         <br></br>
         <br></br>
          <input style={{lineHeight:'30px',marginBottom:'20px'}}
            size={40}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button style={{padding:'8px 10px'}} onClick={()=>{handleSubmit()}} type="button" > Login </button>
          <br></br>
          <br></br>
          <Link style={{textDecoration:"none"}} to="/signup">If not registered pls register now</Link>
        </form>
      </div>
     );
}

export default Login;