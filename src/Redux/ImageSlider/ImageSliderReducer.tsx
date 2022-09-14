import { FETCH_IMAGESLIDERDATA_FAILURE, FETCH_IMAGESLIDERDATA_REQUEST, FETCH_IMAGESLIDERDATA_SUCESS } from "./ImageSliderTypes";


export interface imageslider{
    loading:boolean,
    data:string[],
    error:string
}

const initialState:imageslider={
    loading:false,
    data:[],
    error:''
}


 type Action = {
    type:string,
    payload?:string[] | string
 }


export const imageSliderReducer=(state=initialState,action:Action)=>{
  
    switch (action.type) {
        case FETCH_IMAGESLIDERDATA_REQUEST:
            return{
                ...state,
                loading:true
            };
        
        case FETCH_IMAGESLIDERDATA_SUCESS:
            
            return{
                ...state,
                data:action.payload
            };

        case FETCH_IMAGESLIDERDATA_FAILURE:
            return{
                ...state,
                error:action.payload
            }
            
        default:
            return state;
    }

}