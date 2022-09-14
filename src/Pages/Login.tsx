import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {useHistory} from "react-router-dom";
import axios from "axios";
import { signinButton } from "../Redux/Authentication/AuthActions";


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


  function handleSubmit() {
    
    axios.post('http://localhost:7000/userdata/login',{email:email,password:password})
    .then((res)=>{
    const Token=res.data.token;
    localStorage.setItem("acesstoken",Token);
    console.log(res)
    const datas=res.data.data;
    const resEmail=datas.map((item:any)=>item.email);
    console.log(auth);
    dispatch(signinButton())
    console.log(auth);
    
    localStorage.setItem("authState",auth)
     if(resEmail == email){
      dispatch(signinButton())
      localStorage.setItem("authState",auth)
      history.push("/")
    
     } 
    
   
    }).catch((err)=>{
      console.log(err)
    })
    
    console.log(auth)
  }

  console.log(auth)
    return ( 
        <div
        style={{ width: "40%",margin: "10% auto",padding: "10%",backgroundColor: "lightslategray",textAlign: "center", borderRadius: "8px",}}
      >
        <form>
         <label>Email</label>
          <br></br>
          <input  style={{lineHeight:'30px',margin:'20px'}}
            size={50}
            type="text"
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
          <button style={{padding:'8px 10px'}} onClick={()=>{handleSubmit()}} type="button" > Login </button>
        </form>
      </div>
     );
}

export default Login;