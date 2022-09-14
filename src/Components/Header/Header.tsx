import React, { useEffect } from "react";
import { connect,useSelector } from "react-redux";
import { signoutButton } from "../../Redux/Authentication/AuthActions";
import './Header.css';
import { Link, useHistory } from "react-router-dom";
import { fetchHeaderData } from "../../Redux/Header/HeaderActions";
import { header } from "../../Redux/Header/DataTypes";


type headerProps={
  datas:header[],
  fetchHeaderDatas:()=>void,
  signoutbutton:()=>void
}

function Header(props:headerProps) {
  const auth=useSelector((state:any)=>state.authData.auth);
  useEffect(()=>{
    props.fetchHeaderDatas()
   
  },[])
 
  console.log(auth);
  const history=useHistory()
  
  const logOut = () => {
   
    
   };

    return ( 
        <div>
            <div>
      <div className="nav">
        <nav className="nav-items">
          <h3 >Rahmath</h3>
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