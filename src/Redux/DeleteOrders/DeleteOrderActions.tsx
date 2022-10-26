import { FETCH_CANCELORDERDATA_FAILURE, FETCH_CANCELORDERDATA_SUCESS } from "./DeleteOrderType";



export const fetchCancelOrdersDataRequest=()=>{  
    return{
        type:FETCH_CANCELORDERDATA_FAILURE
    };
};



export const fetchCancelOrdersDataSuccess=(message:any)=>{
    return{
        type:FETCH_CANCELORDERDATA_SUCESS,
        payload:message
    };
};



export const fetchCancelOrdersDataFailure=(error:string)=>{
    return{
        type:FETCH_CANCELORDERDATA_FAILURE,
        payload:error
    };
};