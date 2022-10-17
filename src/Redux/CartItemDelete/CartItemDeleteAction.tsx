import { FETCH_CARTDATADELETE_FAILURE, FETCH_CARTDATADELETE_REQUEST, FETCH_CARTDATADELETE_SUCESS } from "./CartItemDelete";




export const fetchCartDishDeleteRequest = () => {
    return {
      type: FETCH_CARTDATADELETE_REQUEST,
    };
  };
  
export  const fetchCartDishDeleteSuccess = (message:string) => {
    return {
      type: FETCH_CARTDATADELETE_SUCESS,
      payload:message ,
    };
  };
  
export  const fetchCartDishDeleteFailure = (error:string) => {
     
    return {
      type: FETCH_CARTDATADELETE_FAILURE,
      payload: error,
    };
  };


 