import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentData } from "../../Redux/Comment/CommentActions";
import './CommentSection.css'
import CardComment from "../Card_Comment/Card_Comment";
import { comment } from "../../Redux/Comment/DataTypes";



function CommentSection() {
  const comment =useSelector((state:any)=>state.commendData);
  const dispatch=useDispatch()
  const [name,setName]=useState<string>();
  const [email,setEmail]=useState<string>();
  const [commentData,setCommentData]=useState<string>();


  useEffect(()=>{
   dispatch<any>(fetchCommentData())
  },[dispatch])

  const submitForm=()=>{ 
    const data={name:name,email:email,comment:commentData};
    comment.data.push(data); 

    localStorage.setItem('data',JSON.stringify(comment.data));
   
    setName("");
    setEmail("");
    setCommentData("")
  }

    return ( 
        <div>
         <div className="Comment-sec">
           <h2 className="comment-head">Comment Section</h2>
            <div className="comment1">
             {comment.error ? <div className="error">{comment.error}</div> :
               comment.data.map((data:comment,index:number)=>{
                
               return (
                <CardComment key={index} comment={data.comment}/>
                      );})}
                <br></br>
            </div>

      <div className="formData">
      <form>
        <label>Name: </label>
        <input className="input" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} size={70}></input>
        <br></br>
        <label>Email: </label>
        <input className="input" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} size={70}></input>
          <br></br>
        <textarea className="textarea" rows={10} value={commentData} cols={70} onChange={(e)=>{setCommentData(e.target.value)}} placeholder="Comment here...."></textarea>
        <br></br>
        <button className="button" type="button" onClick={()=>{submitForm()}}>Submit</button>
      </form>
      </div>
    </div>
        </div>
     );
}

export default CommentSection;