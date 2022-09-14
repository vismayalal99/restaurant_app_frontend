import { SIGNIN, SIGNOUT } from "./AuthTypes";

interface authType{
    auth:boolean
}

const  initialState={
auth:false
}

interface Action{
    type:string,
    
}



export const authenticationReducer=(state:authType=initialState,action:Action)=>{
    switch (action.type) {
        case SIGNIN:
            return{
                ...state,
                auth:true
            }

        case SIGNOUT:
            return{
                ...state,
                auth:false
            }
    
        default:
           return state;
    }

}