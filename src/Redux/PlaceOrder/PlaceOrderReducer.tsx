import { FETCH_PLACEORDERALL_FAILURE, FETCH_PLACEORDERALL_REQUEST, FETCH_PLACEORDERALL_SUCESS, FETCH_PLACEORDER_FAILURE, FETCH_PLACEORDER_REQUEST, FETCH_PLACEORDER_SUCESS } from "./PlaceOrderType";




interface commentType{
    loading:boolean,
    data:string,
    error:string
}

const initialState:commentType={
    loading:false,
    data:'',
    error:''
}


export const cartDataReducer=(state=initialState,action:any)=>{
    console.log(action.payload);
    
    switch (action.type) {
      case FETCH_PLACEORDER_REQUEST:
          return{
              ...state,
              loading:true
          }
          
      case FETCH_PLACEORDER_SUCESS:
          return{
              ...state,
              data:action.payload
          }
      
      case FETCH_PLACEORDER_FAILURE:
          return{
              ...state,
              error:action.payload
          }
      
          case FETCH_PLACEORDERALL_REQUEST:
            return{
                ...state,
                loading:true
            }
            
        case FETCH_PLACEORDERALL_SUCESS:
            return{
                ...state,
                data:action.payload
            }
        
        case FETCH_PLACEORDERALL_FAILURE:
            return{
                ...state,
                error:action.payload
            }
    
      default:
          return state;
    }
}