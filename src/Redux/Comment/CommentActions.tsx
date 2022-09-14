import axios from "axios"
import { FETCH_COMMENTDATA_FAILURE, FETCH_COMMENTDATA_REQUEST, FETCH_COMMENTDATA_SUCCESS } from "./CommentTypes"
import { comment } from "./DataTypes"


const fetchCommentdataRequest=()=>{
    return{
        type:FETCH_COMMENTDATA_REQUEST
    }
}

const fetchCommentdataSuccess=(data:comment[])=>{
    console.log("checking type",data)
    return{
        type:FETCH_COMMENTDATA_SUCCESS,
        payload:data
    }
}

const fetchCommentdataFailure=(error:string)=>{
    return{
        type:FETCH_COMMENTDATA_FAILURE,
        payload:error
    }
}

export const fetchCommentData=()=>{
    return function(dispatch:any){
        dispatch(fetchCommentdataRequest())
        axios.get('http://localhost:3001/comment')
        .then((res)=>{
         dispatch(fetchCommentdataSuccess(res.data))
        })
        .catch((err)=>{
       
          dispatch(fetchCommentdataFailure(err.message))
        })
    }
}