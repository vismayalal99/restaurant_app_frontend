import { FETCH_CANCELORDERDATA_FAILURE, FETCH_CANCELORDERDATA_REQUEST, FETCH_CANCELORDERDATA_SUCESS } from "./DeleteOrderType"




interface cancelOrdersType{
    loading:boolean,
    message:'',
    error:string
}

const initialState:cancelOrdersType={
    loading:false,
    message:'',
    error:''
}


export const cancelOrdersDataReducer=(state=initialState,action:any)=>{
 
    
    switch (action.type) {
      case FETCH_CANCELORDERDATA_REQUEST:
          return{
              ...state,
              loading:true
          }
          
      case FETCH_CANCELORDERDATA_SUCESS:
          return{
              ...state,
              message:action.payload
          }
      
      case FETCH_CANCELORDERDATA_FAILURE:
          return{
              ...state,
              error:action.payload
          }
    
      default:
          return state;
    }
}