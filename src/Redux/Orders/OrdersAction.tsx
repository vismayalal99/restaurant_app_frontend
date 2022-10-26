import { FETCH_ORDERDATA_FAILURE, FETCH_ORDERDATA_REQUEST, FETCH_ORDERDATA_SUCESS } from "./OrdersType";


export const fetchOrdersDataRequest=()=>{  
    return{
        type:FETCH_ORDERDATA_REQUEST
    };
};



export const fetchOrdersDataSuccess=(message:any)=>{
    return{
        type:FETCH_ORDERDATA_SUCESS,
        payload:message
    };
};



export const fetchOrdersDataFailure=(error:string)=>{
    return{
        type:FETCH_ORDERDATA_FAILURE,
        payload:error
    };
};