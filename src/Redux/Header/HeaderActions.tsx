import axios from "axios";
import { header } from "./DataTypes";
import {FETCH_HEADERDATA_FAILURE,FETCH_HEADERDATA_REQUEST,FETCH_HEADERDATA_SUCESS} from "./HeaderTypes";
  
  const fetchHeaderDataRequest = () => {
    return {
      type: FETCH_HEADERDATA_REQUEST,
    };
  };
  
  const fetchHeaderDataSuccess = (data:header[]) => {
   
    return {
      type: FETCH_HEADERDATA_SUCESS,
      payload: data,
    };
  };
  
  const fetchHeaderDataFailure = (error:string) => {
    return {
      type: FETCH_HEADERDATA_FAILURE,
      payload: error,
    };
  };
  
  export const fetchHeaderData = () => {
    return function (dispatch:any) {
      dispatch(fetchHeaderDataRequest);
      axios
        .get("http://localhost:3001/header")
        .then((res) => {
          console.log(res.data)
          dispatch(fetchHeaderDataSuccess(res.data));
        })
        .catch((err) => {
          console.log(err)
         dispatch(fetchHeaderDataFailure(err.message));
        });
    };
  };
  