import axios from "axios";
import { fetchHomeContentFailure, fetchHomeContentRequest, fetchHomeContentSucess } from "../../Redux/HomeContent/HomeContentAction";
import { signoutButton } from "../../Redux/Authentication/AuthActions";



axios.interceptors.request.use((req)=>{
  const acessToken=localStorage.getItem('acesstoken')
  console.log(acessToken)

  if(acessToken){
    req.headers!.authorization=acessToken;
  } 
  return req
},
(err)=>{
  Promise.reject(err)
})



export  function fetchHomeContentData(auth:any,history:any){
  
    return function (dispatch :any){
      
        dispatch(fetchHomeContentRequest())
        axios.get("http://localhost:7000/userdata/getcontent")
        .then((res)=>{
            dispatch(fetchHomeContentSucess(res.data));
        })
        .catch((err)=>{
          console.log(err);
          
          if(err.response.data.success == false){
            dispatch(signoutButton())
            localStorage.setItem("authState",auth)
            history.push("/login")
          }
            dispatch(fetchHomeContentFailure(err.message));
        })   
    }
}

