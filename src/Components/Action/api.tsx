import axios from "axios";
import { fetchHomeContentFailure, fetchHomeContentRequest, fetchHomeContentSucess } from "../../Redux/HomeContent/HomeContentAction";
import { signoutButton } from "../../Redux/Authentication/AuthActions";
import { toast } from "react-toastify";
import { fetchCartDishFailure, fetchCartDishRequest, fetchCartDishSuccess } from "../../Redux/Cart/CartAction";
import { fetchCartDishDeleteFailure, fetchCartDishDeleteRequest, fetchCartDishDeleteSuccess } from "../../Redux/CartItemDelete/CartItemDeleteAction";
import { fetchCartDishQuantityDecrementFailure, fetchCartDishQuantityDecrementRequest, fetchCartDishQuantityDecrementSuccess, fetchCartDishQuantityIncrementFailure, fetchCartDishQuantityIncrementRequest, fetchCartDishQuantityIncrementSuccess } from "../../Redux/CartQuantity/CartQuantityAction";
import { fetchAddCartDishFailure, fetchAddCartDishRequest, fetchAddCartDishSuccess } from "../../Redux/AddToCart/AddToCartActions";
import { fetchPaymentMethodFailure, fetchPaymentMethodRequest, fetchPaymentMethodSuccess, fetchPlaceOrderAllFailure, fetchPlaceOrderAllRequest, fetchPlaceOrderAllSuccess, fetchPlaceOrderFailure, fetchPlaceOrderRequest, fetchPlaceOrderSuccess } from "../../Redux/PlaceOrder/PlaceOrderActions";
import { fetchUserDataFailure, fetchUserDataRequest, fetchUserDataSuccess } from "../../Redux/UserData/useradataAction";
import { fetchOrdersDataFailure, fetchOrdersDataRequest, fetchOrdersDataSuccess } from "../../Redux/Orders/OrdersAction";
import { fetchCancelOrdersDataFailure, fetchCancelOrdersDataRequest, fetchCancelOrdersDataSuccess } from "../../Redux/DeleteOrders/DeleteOrderActions";





axios.interceptors.request.use((req)=>{
  const acessToken=localStorage.getItem('acesstoken');
  console.log(acessToken)
  if(acessToken){
    req.headers!.authorization=acessToken;
  } 
  return req
},
(err)=>{
  Promise.reject(err)
})



export  function fetchHomeContentData(auth:any,history:any){
    return function (dispatch :any){
        dispatch(fetchHomeContentRequest())
        axios.get("http://localhost:7000/userdata/getcontent")
        .then((res)=>{
            dispatch(fetchHomeContentSucess(res.data));
        })
        .catch((err)=>{
          
          if(err.response.data.success == false){
            dispatch(signoutButton())
            localStorage.setItem("authState",auth)
            history.push("/login")
          }
            dispatch(fetchHomeContentFailure(err.message));
        })   
    }
}



export function addToCart(data:any,quantity:any){
 
  return function (dispatch :any){
    const id=localStorage.getItem('user_id')
    dispatch(fetchAddCartDishRequest())
    axios.post("http://localhost:7000/userdata/cart",{data:data,quantity:quantity,id:id})
    .then((res)=>{
      dispatch(fetchAddCartDishSuccess(res.data.message))
      dispatch(fetchCartData())
      toast.success(res.data.message,{
      position:toast.POSITION.BOTTOM_CENTER
    })
      
  })
  .catch((err)=>{
    dispatch(fetchAddCartDishFailure(err.message))
    console.log(err);
    
  })
}
}



export const fetchCartData = () => {
  return function (dispatch:any) {
    dispatch(fetchCartDishRequest());
    const id=localStorage.getItem('user_id')
    axios.get("http://localhost:7000/userdata/getcart", {params: {id:id}})
      .then((res) => {
        dispatch(fetchCartDishSuccess(res.data.data));
      
      })
      .catch((error) => {
          console.log(error);
          dispatch(fetchCartDishFailure(error.message));
      });
  };
};



export function deletecart(id:any,deleteData:any){
  return function(dispatch:any){
    dispatch(fetchCartDishDeleteRequest())
    axios.delete("http://localhost:7000/userdata/deletecart",{params:{id:id}})
    .then((res)=>{
       dispatch(fetchCartDishDeleteSuccess(res.data.message))
       dispatch(fetchCartData())
      
      if(deleteData == "delete"){
       toast.success(res.data.message,{
         position:toast.POSITION.TOP_CENTER
       })
      }
  })
    .catch((err)=>{
       console.log(err);
       dispatch(fetchCartDishDeleteFailure(err.message))
    
  })
  }
}


export function deletecartAll(id:any){

  return function(dispatch:any){
    dispatch(fetchCartDishDeleteRequest())
    axios.delete("http://localhost:7000/userdata/deletecartall",{params:{id:id}})
    .then((res)=>{
      dispatch(fetchCartDishDeleteSuccess(res.data.message))
      dispatch(fetchCartData())
      
  })
    .catch((err)=>{
      console.log(err);
      dispatch(fetchCartDishDeleteFailure(err.message))
    
  })
  }
}


export function buyNow(firstName:any,lastName:any,email:any,phoneNo:any,menuItem:any,price:any,quantity:any,id:any,section:any,value:any,user_id:any,image:any,menuId:any){
let deleteData:any
  return function(dispatch:any){
    dispatch(fetchPlaceOrderRequest())
    axios.post("http://localhost:7000/userdata/placeorder",{firstName,lastName,email,phoneNo,menuItem,price,quantity,section,value,user_id,image,menuId
  })
    .then((res)=>{
       dispatch(fetchPlaceOrderSuccess(res.data.message))
       if(res.data.success==true){
       dispatch(deletecart(id,deleteData))
       }
       toast.success(res.data.message, {
        position: toast.POSITION.TOP_CENTER
    })
    
    })
    .catch((err)=>{
      dispatch(fetchPlaceOrderFailure(err.message))
      toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_CENTER
    })
    })
  }
}



export function placeOrder(firstName:any,lastName:any,email:any,phoneNo:any,cartDatas:any,total:any,value:any){
  return function(dispatch:any){
    dispatch(fetchPlaceOrderAllRequest())
    const user_id=localStorage.getItem('user_id')
    axios.post("http://localhost:7000/userdata/orderall",{firstName:firstName,lastName:lastName,email:email,phoneNo:phoneNo,cartDatas:cartDatas,user_id:user_id,total:total,payment:value})
    .then((res)=>{
     
     dispatch(fetchPlaceOrderAllSuccess(res.data.message))
     dispatch(deletecartAll(user_id ));
     toast.success(res.data.message, {
      position: toast.POSITION.TOP_CENTER
      })
  })
 .catch((err)=>{

  dispatch(fetchPlaceOrderAllFailure(err.message))
  toast.error(err.response.data.message, {
    position: toast.POSITION.TOP_CENTER
})
 })

  }
}


export const paymentMethodData = () => {
  return function (dispatch:any) {
    dispatch(fetchPaymentMethodRequest());
    
    axios.get("http://localhost:7000/userdata/getpaymentmethod")
      .then((res) => {
       console.log(res.data.data);
        dispatch(fetchPaymentMethodSuccess(res.data.data));
      
      })
      .catch((error) => {
          console.log(error);
          dispatch(fetchPaymentMethodFailure(error));
      });
  };
};


export const cartQuantityIncrement=(id:any,menuId:any,qty:any,qty2:any)=>{
  return function(dispatch:any){
    console.log(id);
    dispatch(fetchCartDishQuantityIncrementRequest())
    axios.patch("http://localhost:7000/userdata/cart/quantityincrement",{id:id,menuId:menuId})
    .then((res)=>{
     dispatch(fetchCartDishQuantityIncrementSuccess(res.data))
     dispatch(fetchCartData())
     if(qty == qty2){
      toast.error("out of stock", {
        position: toast.POSITION.TOP_CENTER
    })
     }
  })
  .catch((err)=>{
    dispatch(fetchCartDishQuantityIncrementFailure(err.message))
    console.log(err);
    
  })
}
}




export const cartQuantityDecrement=(id:any,quantity:any)=>{
  let deleteData:any=true
  return function(dispatch:any){
    console.log("qun"+id,quantity);
    
    dispatch(fetchCartDishQuantityDecrementRequest())
   axios.patch("http://localhost:7000/userdata/cart/quantitydecrement",{id:id})
    .then((res)=>{
    dispatch(fetchCartDishQuantityDecrementSuccess(res.data.message))
    dispatch(fetchCartData())
    if(quantity == 1){
      dispatch(deletecart(id,deleteData))
    }

  })
  .catch((err)=>{
    dispatch(fetchCartDishQuantityDecrementFailure(err.message))
    console.log(err);
    
  })
}
}


export const fetchUserData = () => {
  return function (dispatch:any) {
    dispatch(fetchUserDataRequest());
    const id=localStorage.getItem('user_id')
   
    axios.get("http://localhost:7000/userdata/getuserdata", {params: {id:id}})
      .then((res) => {
       console.log(res.data.data);
        dispatch(fetchUserDataSuccess(res.data.data));
      
      })
      .catch((error) => {
          console.log(error);
          dispatch(fetchUserDataFailure(error));
      });
  };
};


export const fetchOrdersData = () => {
  return function (dispatch:any) {
    dispatch(fetchOrdersDataRequest());
    const id=localStorage.getItem('user_id');
    axios.get("http://localhost:7000/userdata/orders", {params: {id:id}})
      .then((res) => {
       console.log(res.data.data);
        dispatch(fetchOrdersDataSuccess(res.data.data));
      
      })
      .catch((error) => {
          console.log(error);
          dispatch(fetchOrdersDataFailure(error));
      });
  };
};



export const fetchCancelOrdersData = (id:any,orderId:any,amount:any) => {
  return function (dispatch:any) {
   
    dispatch(fetchCancelOrdersDataRequest());
    axios.delete("http://localhost:7000/userdata/orders", {data:{id,orderId,amount}})
      .then((res) => {
       console.log(res.data.data);
        dispatch(fetchCancelOrdersDataSuccess(res.data.message));
       dispatch(fetchOrdersData())
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_CENTER
      })
      })
      .catch((error) => {
          console.log(error);
          dispatch(fetchCancelOrdersDataFailure(error));
      });
  };
};



