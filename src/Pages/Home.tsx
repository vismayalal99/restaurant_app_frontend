
import { useEffect } from "react";
import HomeSection from "../Components/Home/HomeSection";
import ImageSlider from "../Components/ImageSlider/ImageSlider";
import {useDispatch,useSelector} from "react-redux"
import {fetchHomeContentData} from "../Components/Action/api"
import { useHistory } from "react-router-dom";



type dataProps={
  data:string
  age?:number
}

function Home(props:dataProps) {
 
  const dispatch=useDispatch();
  const history=useHistory()
  const content =useSelector((state:any)=>state.homeContentData.data.data)
  console.log(content)
  const auth=useSelector((state:any)=>state.authData.auth)
  console.log(auth)
 
  useEffect(()=>{
   
    dispatch<any>(fetchHomeContentData(auth,history))
    console.log("useeffectr");
    
  },[])
 
    return ( 
        <div style={{backgroundColor:'lightgrey'}}>
            <div >
            
              <HomeSection />
      
      </div>
            <div style={{ height: "400px", textAlign: "center", padding: "20px", lineHeight: "30px", margin: "0 auto", backgroundColor: "lightgray",}}>
        {
          content?.map((items:any,index:number)=>{
            return(
            <>
            <h3 style={{padding:'20px'}}><i>{items.heading}</i></h3>
            <h2 style={{padding:'20px'}}>{items.sub_heading}</h2>
            <p  style={{padding:'20px'}}>{items.content1} </p>
            <h3 style={{padding:'20px'}}>{items.content2}</h3>
            </>
            )
          })
        }
       
      </div>
     <br></br>
     <ImageSlider />
        </div>
     );
}

export default Home;