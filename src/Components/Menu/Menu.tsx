import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainDish, starters } from "../../Redux/Menu/DataTypes";
import { fetchMainDishData,fetchStartersData } from "../../Redux/Menu/MenuActions";
import { ToastContainer } from "react-toastify";
import Card from "../Card/Card";
import './Menu.css'


function Menu() {
 
  const maindish=useSelector((state:any)=>state.mainDishData.mainDish)
  const starterss=useSelector((state:any)=>state.startersData.starters)
 
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch<any>(fetchStartersData())
    dispatch<any>(fetchMainDishData())
  },[dispatch]);

 
    return ( 
      
    <div>
      <br></br>
      <ToastContainer />
      <div className="menu">
       <div className="menu-sec">
        <h2 className="menu-head">Menu Section</h2>
        <br></br>
        <h3>Disserts</h3>
        <br></br>
        <div className="menu-container">
          { 
            starterss.map((data:mainDish, index:number) => {
              return (
                <>
                  <Card datas={data}
                  />
                </>
              );
            }
          )}
        </div>
       <br></br>
        <h3>Main Dish</h3>
        <br></br>
        <div className="menu-container">
        {
        maindish.map((data:mainDish, index:number) => {
            return (
              <Card datas={data} />
            );
          })}
        </div>
      </div>
    </div>
    <br></br>
        </div>
        
     );
}

export default Menu;