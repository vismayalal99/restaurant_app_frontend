import { FETCH_CARTDATAQUANTITYDECREMENT_FAILURE, FETCH_CARTDATAQUANTITYDECREMENT_REQUEST, FETCH_CARTDATAQUANTITYDECREMENT_SUCESS, FETCH_CARTDATAQUANTITYINCREMENT_FAILURE, FETCH_CARTDATAQUANTITYINCREMENT_REQUEST, FETCH_CARTDATAQUANTITYINCREMENT_SUCESS } from "./CartQuantityType";





export const fetchCartDishQuantityIncrementRequest = () => {
    return {
      type: FETCH_CARTDATAQUANTITYINCREMENT_REQUEST,
    };
  };
  
export  const fetchCartDishQuantityIncrementSuccess = (message:string) => {
    return {
      type: FETCH_CARTDATAQUANTITYINCREMENT_SUCESS,
      payload: message,
    };
  };
  
export  const fetchCartDishQuantityIncrementFailure = (error:string) => {
     
    return {
      type: FETCH_CARTDATAQUANTITYINCREMENT_FAILURE,
      payload: error,
    };
  };



  export const fetchCartDishQuantityDecrementRequest = () => {
    return {
      type: FETCH_CARTDATAQUANTITYDECREMENT_REQUEST,
    };
  };
  
export  const fetchCartDishQuantityDecrementSuccess = (message:string) => {
    return {
      type: FETCH_CARTDATAQUANTITYDECREMENT_SUCESS,
      payload: message,
    };
  };
  
export  const fetchCartDishQuantityDecrementFailure = (error:string) => {
     
    return {
      type: FETCH_CARTDATAQUANTITYDECREMENT_FAILURE,
      payload: error,
    };
  };

