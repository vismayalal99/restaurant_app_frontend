import React from "react";
import "./Card.css";

interface cardProps{
  image:string,
  details:string,
  price:string
}

class Card extends React.Component<cardProps> {
  render() {
    console.log("child")
    const {image,details,price}=this.props;
  return (
    <div className="container" >
      <div className="card">
        <img  src={image} alt="" width="100%" height="100%"></img>
        <div className="card-cont">
          <h3> <b> {details} </b> </h3>
          <p> {price} </p>
        </div>
      </div>
    </div>
  );
}
}

export default Card;