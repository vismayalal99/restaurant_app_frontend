import { SIGNOUT } from "../Authentication/AuthTypes"
import { FETCH_HOMECONTENTDATA_FAILURE, FETCH_HOMECONTENTDATA_REQUEST, FETCH_HOMECONTENTDATA_SUCCESS } from "./HomeContentType"


interface contentType{
    loading:boolean,
    data:[],
    error:string
}


const initialState:contentType={
    loading:false,
    data:[],
    error:""
}


export const homeContentReducer=(state=initialState,action:any)=>{
    console.log("test1")
       switch(action.type){
        case FETCH_HOMECONTENTDATA_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_HOMECONTENTDATA_SUCCESS:
            return{
                ...state,
                data:action.payload
            }

        case FETCH_HOMECONTENTDATA_FAILURE:
            return{
                ...state,
                error:action.payload
            }
        
        case SIGNOUT:
            return{
                ...state,
                data:[]
            }
        
        default:
            return state;
       }
}