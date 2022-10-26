import { FETCH_ORDERDATA_FAILURE, FETCH_ORDERDATA_REQUEST, FETCH_ORDERDATA_SUCESS } from "./OrdersType"




interface ordersType{
    loading:boolean,
    data:[],
    error:string
}

const initialState:ordersType={
    loading:false,
    data:[],
    error:''
}


export const ordersDataReducer=(state=initialState,action:any)=>{
 
    
    switch (action.type) {
      case FETCH_ORDERDATA_REQUEST:
          return{
              ...state,
              loading:true
          }
          
      case FETCH_ORDERDATA_SUCESS:
          return{
              ...state,
              data:action.payload
          }
      
      case FETCH_ORDERDATA_FAILURE:
          return{
              ...state,
              error:action.payload
          }
    
      default:
          return state;
    }
}