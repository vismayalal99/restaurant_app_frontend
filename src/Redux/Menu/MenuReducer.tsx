import { mainDish, starters,StartersAction,MainDishAction } from "./DataTypes";
import {FETCH_MAINDISH_FAILURE,FETCH_MAINDISH_REQUEST,FETCH_MAINDISH_SUCESS,
        FETCH_STARTERS_FAILURE,FETCH_STARTERS_REQUEST,FETCH_STARTERS_SUCESS,
  } from "./MenuTypes";
  
  interface MenuType{
    loadingStarters:boolean,
    loadingMainDish:boolean,
    starters:starters[],
    mainDish:mainDish[],
    startersErr:string,
    mainDishErr:string
  }

  const initialState:MenuType = {
    loadingStarters: false,
    loadingMainDish: false,
    starters: [],
    mainDish: [],
    startersErr: "",
    mainDishErr: "",
  };
  
  
  export const startersReducer = (state = initialState, action:StartersAction) => {
   
    switch (action.type) {
      case FETCH_STARTERS_REQUEST:
        return {
          ...state,
          loadingStarters: true,
        };
  
      case FETCH_STARTERS_SUCESS:
        return {
          ...state,
          starters: action.payload,
        };
  
      case FETCH_STARTERS_FAILURE:
        return {
          ...state,
          startersErr: action.payload,
        };
        
      default:
        return state;
    }
  };
  
  export const mainDishReducer = (state = initialState, action:MainDishAction) => {
 
    switch (action.type) {
      case FETCH_MAINDISH_REQUEST:
        return {
          ...state,
          loadingMainDish: true,
        };
  
      case FETCH_MAINDISH_SUCESS:
        return {
          ...state,
          mainDish: action.payload,
        };
  
      case FETCH_MAINDISH_FAILURE:
        return {
          ...state,
          mainDishErr: action.payload,
        };
  
      default:
        return state;
    }
  };
  