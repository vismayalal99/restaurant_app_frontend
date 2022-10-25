import { mainDish, MainDishAction } from "../Menu/DataTypes";
import { FETCH_CARTDATADELETE_FAILURE, FETCH_CARTDATADELETE_REQUEST, FETCH_CARTDATADELETE_SUCESS } from "./CartItemDelete";


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


export const cartDataReducer=(state=initialState,action:MainDishAction)=>{
   
    
    switch (action.type) {
      case FETCH_CARTDATADELETE_REQUEST:
          return{
              ...state,
              loading:true
          }
          
      case FETCH_CARTDATADELETE_SUCESS:
          return{
              ...state,
              data:action.payload
          }
      
      case FETCH_CARTDATADELETE_FAILURE:
          return{
              ...state,
              error:action.payload
          }
    
      default:
          return state;
    }
}