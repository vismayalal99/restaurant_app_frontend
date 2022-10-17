import { FETCH_ADDCARTDATA_FAILURE, FETCH_ADDCARTDATA_REQUEST, FETCH_ADDCARTDATA_SUCESS } from "./AddToCartType";




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


export const addCartDataReducer=(state=initialState,action:any)=>{
    console.log(action.payload);
    
    switch (action.type) {
      case FETCH_ADDCARTDATA_REQUEST:
          return{
              ...state,
              loading:true
          }
          
      case FETCH_ADDCARTDATA_SUCESS:
          return{
              ...state,
              data:action.payload
          }
      
      case FETCH_ADDCARTDATA_FAILURE:
          return{
              ...state,
              error:action.payload
          }
    
      default:
          return state;
    }
}