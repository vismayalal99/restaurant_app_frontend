import React, { useEffect } from "react";
import { connect,useDispatch,useSelector } from "react-redux";
import { signoutButton } from "../../Redux/Authentication/AuthActions";
import './Header.css';
import { Link, useHistory } from "react-router-dom";
import { fetchHeaderData } from "../../Redux/Header/HeaderActions";
import { header } from "../../Redux/Header/DataTypes";
import { Restaurant, ShoppingCart } from "@material-ui/icons";
import Badge from '@material-ui/core/Badge';
import { fetchCartData } from "../Action/api";

type headerProps={
  datas:header[],
  fetchHeaderDatas:()=>void,
  signoutbutton:()=>void
}

function Header(props:headerProps) {
  const dispatch=useDispatch()
  const auth=useSelector((state:any)=>state.authData.auth);
  const cartData=useSelector((state:any)=>state.cartData);
 
  
  
  useEffect(()=>{
    props.fetchHeaderDatas()
    dispatch<any>(fetchCartData())
     
  },[])
 
 // console.log(auth);
  const history=useHistory()
  
  const logOut = () => {
            dispatch(signoutButton())
          //  localStorage.setItem("authState",auth)
            localStorage.removeItem('acesstoken')
             history.push("/login")
 
   };
  // console.log(cartData.data.length);
   

    return ( 
        <div>
            <div>
      <div className="nav">
        <nav className="nav-items">
          <h3 >Rahmath <Restaurant /> </h3>
          <div className="nav-list1">
            <ul className="nav-list">
                {
                  props.datas.map((data:header,index:number)=>{
                    return(
                    <li className="btn" key={index}>
                    <Link style={{ textDecoration: "none", color: "white" }} to={data.path}>{data.name}</Link>
                    </li>
                    )  
                  })
                }
                
              <li className="btn" onClick={()=>logOut()}  >
                LOGOUT 
              </li>
              <li className="btn"   >
               <Link style={{ textDecoration: "none", color: "white" }} to="/cart"> 
               <Badge badgeContent={cartData.data.length } showZero color="secondary">
               <ShoppingCart /> 
               </Badge>
               </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
        </div>
     );
}

const mapStateToProps=(state:any)=>{
  return{
     datas:state.headerData.data
  }
}

const mapDispatchToProps=(dispatch:any)=>{
  return{
    signoutbutton:()=>{dispatch(signoutButton())},
    fetchHeaderDatas:()=>{dispatch(fetchHeaderData())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);