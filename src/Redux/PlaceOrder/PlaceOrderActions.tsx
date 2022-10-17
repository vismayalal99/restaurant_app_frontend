import { FETCH_PLACEORDERALL_FAILURE, FETCH_PLACEORDERALL_REQUEST, FETCH_PLACEORDERALL_SUCESS, FETCH_PLACEORDER_FAILURE, FETCH_PLACEORDER_REQUEST, FETCH_PLACEORDER_SUCESS } from "./PlaceOrderType"





export const fetchPlaceOrderRequest=()=>{  
    return{
        type:FETCH_PLACEORDER_REQUEST
    };
};



export const fetchPlaceOrderSuccess=(message:string)=>{
    return{
        type:FETCH_PLACEORDER_SUCESS,
        payload:message
    };
};



export const fetchPlaceOrderFailure=(error:string)=>{
    return{
        type:FETCH_PLACEORDER_FAILURE,
        payload:error
    };
};



export const fetchPlaceOrderAllRequest=()=>{  
    return{
        type:FETCH_PLACEORDERALL_REQUEST,
    };
};



export const fetchPlaceOrderAllSuccess=(message:string)=>{
    return{
        type:FETCH_PLACEORDERALL_SUCESS,
        payload:message
    };
};



export const fetchPlaceOrderAllFailure=(error:string)=>{
    return{
        type:FETCH_PLACEORDERALL_FAILURE,
        payload:error
    };
};