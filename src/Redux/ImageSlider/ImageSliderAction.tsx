import axios from "axios"
import { FETCH_IMAGESLIDERDATA_FAILURE, FETCH_IMAGESLIDERDATA_REQUEST, FETCH_IMAGESLIDERDATA_SUCESS } from "./ImageSliderTypes"


const fetchImageSliderDataRequest=()=>{
 
    return{
        type:FETCH_IMAGESLIDERDATA_REQUEST
    }
}

const fetchImageSliderDataSuccess=(data:string[])=>{
   
    return{
        
        type:FETCH_IMAGESLIDERDATA_SUCESS,
        payload:data
    }
}

const fetchImageSliderDataFailure=(error:string)=>{
  
    return{
        type:FETCH_IMAGESLIDERDATA_FAILURE,
        payload:error
    }
}


export const fetchImageSliderData=()=>{
   
    return function (dispatch:any){
        dispatch(fetchImageSliderDataRequest())
        axios.get('http://localhost:7000/userdata/getimages')
        .then((res)=>{
           
          dispatch(fetchImageSliderDataSuccess(res.data.data))
        })
        .catch((err)=>{
          dispatch(fetchImageSliderDataFailure(err.message))
        })
    }
}
