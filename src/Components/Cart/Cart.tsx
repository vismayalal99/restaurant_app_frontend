
import React from "react";
import "./Cart.css";
import {Divider} from "@material-ui/core"
import BuyItems from "../BuyItems/BuyItems";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from "react-redux";
import { deletecart, fetchCartData, cartQuantityDecrement, cartQuantityIncrement } from "../Action/api";
import OrderAll from "../BuyItems/OrderAll";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Button from "@material-ui/core/Button";




function Cart() {
   
   const constUrl="http://localhost:7000/images/";
   
   const cartData=useSelector((state:any)=>state.cartData)
   const quan=cartData.data.map((item:any)=>item.quantity)
   console.log(quan);
   const history=useHistory();
   const dispatch=useDispatch();


   const datas=useSelector((state:any)=>state.userData.data);
   const userName=datas.map((item:any)=>item.username);
   const userEmail=datas.map((item:any)=>item.email)

    React.useEffect(()=>{
      dispatch<any>(fetchCartData());
      console.log("leng "+cartData.data.length);
    
    },[])

let deleteData="delete"
  
      const total = cartData.data.reduce((prev:any, current:any) => {
        if (current.availability) prev += current.price * current.quantity;
        return prev;
      }, 0);
      console.log(total);
      
      
    return ( 
        <div className="cart-main">
          <ToastContainer />
        <div className="cart-items">
        <div className="cart-items-header"><h2>Cart</h2></div>

        {
            cartData.data.length == 0 && <div className="cart-items-empty">No Items are added</div>
        }

       <div className="cart-sub">
        {
          cartData.data.length !== 0 &&
<>
      <div className="cart-items-list">
        <div  className="cart-items-image" >Menu</div>
        <div  className="cart-items-name" >Name</div>
        <div  className="cart-items-price" >Price</div>
        <div  className="cart-items-quantity" >Quantity</div>
        <div  className="cart-items-price" >Total Amount</div>
        <div  className="cart-items-quantity" >Action</div>
      </div>
        <Divider />
        </>
        }
       
       {
          cartData.data.map((item:any,i:number)=>{console.log(item);
          return(
           <div className="cart-items-list">
         
            <img className="cart-items-image" src={constUrl + item.image} alt="load..." ></img>
            <div className="cart-items-name" >{item.name}</div>
            
            <div className="cart-items-price">{item.price} </div>
            <div className="cart-items-quantity" >
               <div style={{border:'1px solid gray',display:'flex',padding:'5px',borderRadius:'15px'}}>
              <button style={{border:'none',backgroundColor:"none",padding:'5px',borderRadius:'50%'}} onClick={()=>{dispatch<any>(cartQuantityDecrement(item.id,item.quantity))}}  >  -  </button>  
              <div style={{padding:'0px 10px'}} >{item.quantity} </div> 
              <button style={{border:'none',backgroundColor:"none",padding:'5px',borderRadius:'50%'}} onClick={()=>{dispatch<any>(cartQuantityIncrement(item.id))}} >  +  </button>
              </div>
            </div>
            <div className="cart-items-price">{item.quantity * item.price} </div> 

            <BuyItems data= {item} username={userName} useremail={userEmail}  />
            <div>   
              <IconButton aria-label="delete" onClick={()=>{dispatch<any>(deletecart(item.id,deleteData))}} style={{marginLeft:"20px"}} >
                <DeleteIcon color="error" fontSize="large" />
              </IconButton> 
            </div>
           
        </div>
       
        )})  
    }
    <Divider />
</div>
<div className="cart-total">
<div className="cart-items-total">Total Price ={total} </div>

        { 
            cartData.data.length > 1 &&
            <>
          
            <div className="cart-items-total-buy">
              <OrderAll  />
              </div>
             </> 
             
        }
       
</div>
<br></br>
        <div style={{float:"right",margin:"20px"}} >
        <Button variant="contained"  onClick={()=>{history.push("/")}}>go to home</Button>
        </div>
        </div>
        <br></br>
        <br></br>
        </div>
      
      
     );
}

export default Cart;