import { SIGNIN, SIGNOUT } from "./AuthTypes"


export const signinButton=()=>{
    return{
        type:SIGNIN
    }
}

export const signoutButton=()=>{
    return{
        type:SIGNOUT
    }
}