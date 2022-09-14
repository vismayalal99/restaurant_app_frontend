
export type comment={
    name:string,
    email:string,
    comment:string
}

export interface Action{
    type:string,
    payload?:comment[] | string
 }

