import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authenticationReducer } from "./Authentication/AuthReducer";
import { commentReducer } from "./Comment/CommentReducer";
import { headerReducer } from "./Header/HeaderReducer";
import { homeContentReducer } from "./HomeContent/HomeContentReducer";
import { imageSliderReducer } from "./ImageSlider/ImageSliderReducer";
import { mainDishReducer, startersReducer } from "./Menu/MenuReducer";
import { composeWithDevTools } from "@redux-devtools/extension";



const rootReducer=combineReducers({
    imageData:imageSliderReducer,
    authData:authenticationReducer,
    headerData:headerReducer,
    startersData:startersReducer,
    mainDishData:mainDishReducer,
    commendData:commentReducer,
    homeContentData:homeContentReducer
    
})



export  const Store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

