
export type starters={
    id:number,
    image:string,
    name:string,
    price:string,
    availability:any
}

export type mainDish={
    id:number,
    image:string,
    name:string,
    price:string,
    availability:any
}

 export interface StartersAction {
    type:string,
    payload?:starters[] | string

 }

 export interface MainDishAction {
    type:string,
    payload?:mainDish[] | string

 }