import { FETCH_USERDATA_FAILURE, FETCH_USERDATA_REQUEST, FETCH_USERDATA_SUCESS } from "./userdataType";



export const fetchUserDataRequest = () => {
    return {
      type: FETCH_USERDATA_REQUEST,
    };
  };
 
  
export  const fetchUserDataSuccess = (data:any) => {
    return {
      type: FETCH_USERDATA_SUCESS,
      payload: data,
    };
  };
  

export  const fetchUserDataFailure = (error:string) => {
    return {
      type: FETCH_USERDATA_FAILURE,
      payload: error,
    };
  };


 