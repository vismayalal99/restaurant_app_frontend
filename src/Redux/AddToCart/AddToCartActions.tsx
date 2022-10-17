import { FETCH_ADDCARTDATA_FAILURE, FETCH_ADDCARTDATA_REQUEST, FETCH_ADDCARTDATA_SUCESS } from "./AddToCartType";





export const fetchAddCartDishRequest = () => {
    return {
      type: FETCH_ADDCARTDATA_REQUEST,
    };
  };
  

export  const fetchAddCartDishSuccess = (message:string) => {
    return {
      type: FETCH_ADDCARTDATA_SUCESS,
      payload: message,
    };
  };


  
export  const fetchAddCartDishFailure = (error:string) => {
    return {
      type: FETCH_ADDCARTDATA_FAILURE,
      payload: error,
    };
  };


 