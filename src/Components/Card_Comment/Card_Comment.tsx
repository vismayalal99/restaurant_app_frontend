
import "./Card_Comment.css";
import person from "../../Images/user.png";

interface commentProps{
  comment:string
}

function Card_Comment(props:commentProps){

    return (
      <div className="Container">
        <div className="comment-card">
          <div className="img">
            <img src={person} alt=""></img>
          </div>
          <div className="comment">
          <p>{props.comment} </p>
          </div>
        </div>
      </div>
    );
 
}


export default Card_Comment;
