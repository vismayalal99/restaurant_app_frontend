import { mainDish } from "../Menu/DataTypes";
import { FETCH_CARTDATA_FAILURE, FETCH_CARTDATA_REQUEST, FETCH_CARTDATA_SUCESS } from "./CartType";




export const fetchCartDishRequest = () => {
    return {
      type: FETCH_CARTDATA_REQUEST,
    };
  };
  
export  const fetchCartDishSuccess = (mainDish:mainDish[]) => {
    return {
      type: FETCH_CARTDATA_SUCESS,
      payload: mainDish,
    };
  };
  
export  const fetchCartDishFailure = (error:string) => {
     
    return {
      type: FETCH_CARTDATA_FAILURE,
      payload: error,
    };
  };


 