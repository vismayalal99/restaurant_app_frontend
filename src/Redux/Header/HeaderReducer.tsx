import {
    FETCH_HEADERDATA_FAILURE,
    FETCH_HEADERDATA_REQUEST,
    FETCH_HEADERDATA_SUCESS,
  } from "./HeaderTypes";
   import {header,Action} from './DataTypes'
  
  interface HeaderType{
    loading:boolean,
    data:header[],
    error:string
  }
  
  const initialState:HeaderType = {
    loading: false,
    data: [],
    error: "",
  };
  
  export const headerReducer = (state = initialState, action:Action) => {
    switch (action.type) {
      case FETCH_HEADERDATA_REQUEST:
          return{
              ...state,
              loading:true
          };
      
      case FETCH_HEADERDATA_SUCESS:
          return{
              ...state,
              data:action.payload
          };
  
      case FETCH_HEADERDATA_FAILURE:
          return{
              ...state,
              error:action.payload
          };
      
          default:
          return state;
    }
  };
  