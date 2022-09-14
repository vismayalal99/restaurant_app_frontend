
import { FETCH_COMMENTDATA_FAILURE, FETCH_COMMENTDATA_REQUEST, FETCH_COMMENTDATA_SUCCESS } from "./CommentTypes";
import  {Action, comment} from './DataTypes';


interface commentType{
    loading:boolean,
    data:comment[],
    error:string
}

const initialState:commentType={
    loading:false,
    data:[],
    error:''
}



export const commentReducer=(state=initialState,action:Action)=>{
      switch (action.type) {
        case FETCH_COMMENTDATA_REQUEST:
            return{
                ...state,
                loading:true
            }
            
        case FETCH_COMMENTDATA_SUCCESS:
            return{
                ...state,
                data:action.payload
            }
        
        case FETCH_COMMENTDATA_FAILURE:
            return{
                ...state,
                error:action.payload
            }
      
        default:
            return state;
      }
}