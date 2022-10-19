import { FETCH_USERDATA_FAILURE, FETCH_USERDATA_REQUEST, FETCH_USERDATA_SUCESS } from "./userdataType";




interface commentType{
    loading:boolean,
    data:[],
    error:string
}

const initialState:commentType={
    loading:false,
    data:[],
    error:''
}


export const userDataReducer=(state=initialState,action:any)=>{
    console.log(action.payload);
    
    switch (action.type) {
      case FETCH_USERDATA_REQUEST:
          return{
              ...state,
              loading:true
          }
          
      case FETCH_USERDATA_SUCESS:
          return{
              ...state,
              data:action.payload
          }
      
      case FETCH_USERDATA_FAILURE:
          return{
              ...state,
              error:action.payload
          }
    
      default:
          return state;
    }
}