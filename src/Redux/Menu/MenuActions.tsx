import axios from "axios";
import { mainDish, starters } from "./DataTypes";
import { FETCH_MAINDISH_FAILURE,FETCH_MAINDISH_REQUEST,FETCH_MAINDISH_SUCESS, FETCH_STARTERS_FAILURE, 
         FETCH_STARTERS_REQUEST, FETCH_STARTERS_SUCESS,} from "./MenuTypes";

const fetchStartersRequest = () => {
  return {
    type: FETCH_STARTERS_REQUEST,
  };
};

const fetchStartersSuccess = (starters:starters[]) => {
    console.log("start",starters); 
  return {
    type: FETCH_STARTERS_SUCESS,
    payload: starters,
  };
};

const fetchStartersFailure = (error:string) => {
  return {
    type: FETCH_STARTERS_FAILURE,
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

export const fetchStartersData = () => {
  return function (dispatch:any) {
    dispatch(fetchStartersRequest);
    axios
      .get("http://localhost:7000/userdata/startersmenu")
      .then((res) => {
       
        dispatch(fetchStartersSuccess(res.data.data));
      })
      .catch((error) => {
        dispatch(fetchStartersFailure(error.message));
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
