import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authenticationReducer } from "./Authentication/AuthReducer";
import { commentReducer } from "./Comment/CommentReducer";
import { headerReducer } from "./Header/HeaderReducer";
import { homeContentReducer } from "./HomeContent/HomeContentReducer";
import { imageSliderReducer } from "./ImageSlider/ImageSliderReducer";
import { mainDishReducer, menuCategoryReducer } from "./Menu/MenuReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { cartDataReducer } from "./Cart/CartReducer";
import { cartDataQuantityReducer } from "./CartQuantity/CartQuantityReducer";
import { addCartDataReducer } from "./AddToCart/AddToCartReducer";
import { userDataReducer } from "./UserData/userDataReducer";
import { paymentMethodReducer } from "./PlaceOrder/PlaceOrderReducer";
import { ordersDataReducer } from "./Orders/OrdersReducer";
import { cancelOrdersDataReducer } from "./DeleteOrders/DeleteOrderReducer";




const rootReducer=combineReducers({
    imageData:imageSliderReducer,
    authData:authenticationReducer,
    headerData:headerReducer,
    categoryData:menuCategoryReducer,
    mainDishData:mainDishReducer,
    commendData:commentReducer,
    homeContentData:homeContentReducer,
    cartData:cartDataReducer,
    quantity:cartDataQuantityReducer,
    addCartData:addCartDataReducer,
    userData:userDataReducer,
    paymentData:paymentMethodReducer,
    ordersData:ordersDataReducer,
    deleteOrder:cancelOrdersDataReducer,
    
    
})



export  const Store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

