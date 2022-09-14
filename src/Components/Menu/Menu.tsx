import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainDish, starters } from "../../Redux/Menu/DataTypes";
import { fetchMainDishData, fetchStartersData } from "../../Redux/Menu/MenuActions";
import Card from "../Card/Card";
import './Menu.css'

function Menu() {
  const datas=useSelector((state:any)=>state)

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch<any>(fetchStartersData())
    dispatch<any>(fetchMainDishData())
  },[dispatch]);

 console.log("parent")
    return ( 
      
    <div>
      <div className="menu">
       <div className="menu-sec">
        <h2 className="menu-head">Menu Section</h2>
        <br></br>
        <h3>Starters</h3>
        <br></br>
        <div className="menu-container">
          { datas.startersData.startersErr ? (
            <div className="error">{datas.startersData.startersErr}</div>
          ) : (
            datas.startersData.starters.map((data:starters, index:number) => {
              return (
                <>
                  <Card image={data.image} key={index} details={data.details} price={data.price} />
                </>
              );
            })
          )}
        </div>

        <h3>Main Dish</h3>
        <br></br>
        <div className="menu-container">
          {datas.mainDishData.mainDishErr ? <div className="error" >{datas.mainDishData.mainDishErr}</div>
          :
          datas.mainDishData.mainDish.map((data:mainDish, index:number) => {
            return (
              <Card image={data.image} key={index} details={data.details} price={data.price} />
            );
          })}
        </div>
      </div>
    </div>
        </div>
     );
}

export default Menu;