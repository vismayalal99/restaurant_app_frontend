import { mainDish, starters,StartersAction,MainDishAction } from "./DataTypes";
import {FETCH_MAINDISH_FAILURE,FETCH_MAINDISH_REQUEST,FETCH_MAINDISH_SUCESS,
        FETCH_MENUCATEGORY_FAILURE,
        FETCH_MENUCATEGORY_REQUEST,
        FETCH_MENUCATEGORY_SUCESS,
  } from "./MenuTypes";
  
  interface MenuType{
    loadingCategory:boolean,
    loadingMainDish:boolean,
    category:[],
    mainDish:mainDish[],
    categoryErr:string,
    mainDishErr:string
  }

  const initialState:MenuType = {
    loadingCategory: false,
    loadingMainDish: false,
    category: [],
    mainDish: [],
    categoryErr: "",
    mainDishErr: "",
  };
  
  
  export const menuCategoryReducer = (state = initialState, action:StartersAction) => {
   
    switch (action.type) {
      case FETCH_MENUCATEGORY_REQUEST:
        return {
          ...state,
          loadingStarters: true,
        };
  
      case FETCH_MENUCATEGORY_SUCESS:
        return {
          ...state,
          category: action.payload,
        };
  
      case FETCH_MENUCATEGORY_FAILURE:
        return {
          ...state,
          categoryErr: action.payload,
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
  