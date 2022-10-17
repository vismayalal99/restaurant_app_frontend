import { FETCH_CARTDATAQUANTITYDECREMENT_FAILURE, FETCH_CARTDATAQUANTITYDECREMENT_REQUEST, FETCH_CARTDATAQUANTITYDECREMENT_SUCESS, FETCH_CARTDATAQUANTITYINCREMENT_FAILURE, FETCH_CARTDATAQUANTITYINCREMENT_REQUEST, FETCH_CARTDATAQUANTITYINCREMENT_SUCESS } from "./CartQuantityType";






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


export const cartDataQuantityReducer=(state=initialState,action:any)=>{
    console.log(action.payload);
    
    switch (action.type) {
      case FETCH_CARTDATAQUANTITYINCREMENT_REQUEST:
          return{
              ...state,
              loading:true
          }
          
      case FETCH_CARTDATAQUANTITYINCREMENT_SUCESS:
          return{
              ...state,
              data:action.payload
          }
      
      case FETCH_CARTDATAQUANTITYINCREMENT_FAILURE:
          return{
              ...state,
              error:action.payload
          }

          case FETCH_CARTDATAQUANTITYDECREMENT_REQUEST:
            return{
                ...state,
                loading:true
            }
            
        case FETCH_CARTDATAQUANTITYDECREMENT_SUCESS:
            return{
                ...state,
                data:action.payload
            }
        
        case FETCH_CARTDATAQUANTITYDECREMENT_FAILURE:
            return{
                ...state,
                error:action.payload
            }
    
      default:
          return state;
    }
}