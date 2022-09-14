import { FETCH_HOMECONTENTDATA_FAILURE, FETCH_HOMECONTENTDATA_REQUEST, FETCH_HOMECONTENTDATA_SUCCESS } from "./HomeContentType"



export const fetchHomeContentRequest=()=>{
      return{
        type:FETCH_HOMECONTENTDATA_REQUEST
      }
}


export const fetchHomeContentSucess=(data:any)=>{
    return{
        type:FETCH_HOMECONTENTDATA_SUCCESS,
        payload:data
    }

}


export const fetchHomeContentFailure=(error:string)=>{
    return{
        type:FETCH_HOMECONTENTDATA_FAILURE,
        payload:error
    }
}

