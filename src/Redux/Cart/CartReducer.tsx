import { mainDish, MainDishAction } from "../Menu/DataTypes";
import { FETCH_CARTDATA_FAILURE, FETCH_CARTDATA_REQUEST, FETCH_CARTDATA_SUCESS } from "./CartType";


interface commentType{
    loading:boolean,
    data:mainDish[],
    error:string
}

const initialState:commentType={
    loading:false,
    data:[],
    error:''
}


export const cartDataReducer=(state=initialState,action:MainDishAction)=>{
   
    
    switch (action.type) {
      case FETCH_CARTDATA_REQUEST:
          return{
              ...state,
              loading:true
          }
          
      case FETCH_CARTDATA_SUCESS:
          return{
              ...state,
              data:action.payload
          }
      
      case FETCH_CARTDATA_FAILURE:
          return{
              ...state,
              error:action.payload
          }
    
      default:
          return state;
    }
}