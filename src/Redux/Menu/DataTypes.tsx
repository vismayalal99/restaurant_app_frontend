
export type starters={
    id:number,
    image:string,
    details:string,
    price:string    
}

export type mainDish={
    id:number,
    image:string,
    details:string,
    price:string
}

 export interface StartersAction {
    type:string,
    payload?:starters[] | string

 }

 export interface MainDishAction {
    type:string,
    payload?:mainDish[] | string

 }