import axios from "axios";
import { mainDish, starters } from "./DataTypes";
import { FETCH_MAINDISH_FAILURE,FETCH_MAINDISH_REQUEST,FETCH_MAINDISH_SUCESS, FETCH_MENUCATEGORY_FAILURE, FETCH_MENUCATEGORY_REQUEST, FETCH_MENUCATEGORY_SUCESS,
         } from "./MenuTypes";

const fetchMenuCategoryRequest = () => {
  return {
    type: FETCH_MENUCATEGORY_REQUEST,
  };
};

const fetchMenuCategorySuccess = (starters:starters[]) => {
    console.log("start",starters); 
  return {
    type: FETCH_MENUCATEGORY_SUCESS,
    payload: starters,
  };
};

const fetchMenuCategoryFailure = (error:string) => {
  return {
    type: FETCH_MENUCATEGORY_FAILURE,
    payload: error,
  };
};

const fetchMainDishRequest = () => {
  return {
    type: FETCH_MAINDISH_REQUEST,
  };
};

const fetchMainDishSuccess = (mainDish:mainDish[]) => {
  return {
    type: FETCH_MAINDISH_SUCESS,
    payload: mainDish,
  };
};

const fetchMainDishFailure = (error:string) => {
   
  return {
    type: FETCH_MAINDISH_FAILURE,
    payload: error,
  };
};

export const fetchMenuCategoryData = () => {
  return function (dispatch:any) {
    dispatch(fetchMenuCategoryRequest());
    axios
      .get("http://localhost:7000/userdata/getcategory")
      .then((res) => {
       
        dispatch(fetchMenuCategorySuccess(res.data.data));
      })
      .catch((error) => {
        dispatch(fetchMenuCategoryFailure(error.message));
      });
  };
};


export const fetchMainDishData = () => {
  return function (dispatch:any){
    dispatch(fetchMainDishRequest)
  axios
    .get("http://localhost:7000/userdata/mainmenu")
    .then((res) => {
      console.log(res.data.data);
      
      dispatch(fetchMainDishSuccess(res.data.data))
    })
    .catch((error) => {
      dispatch(fetchMainDishFailure(error.message))
    });
  }
};
