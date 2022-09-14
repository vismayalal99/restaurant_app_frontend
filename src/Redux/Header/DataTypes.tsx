
export type header ={
    id:number,
    name:string,
    path:string
}

export interface Action{
    type:string
    payload?: header[] | string
}