
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { connect } from "react-redux";
import { fetchImageSliderData } from "../../Redux/ImageSlider/ImageSliderAction";
import './ImageSlider.css'


interface ImageSliderProps {
    images:string[],
    fetchImageSliderDatas: () => void
}

interface ImageSliderState{
    index: number;
}


class ImageSlider extends React.Component<ImageSliderProps,ImageSliderState> {
     state = {index :0  }
      componentDidMount() {
        this.props.fetchImageSliderDatas()
        console.log(this)
       
       }
     
       componentWillUnmount() {
        console.log("un mounting");
      }

      
       next = () => {
        
        if (this.props.images.length - 1 > this.state.index) {
    
          this.setState({index:this.state.index + 1})
        } else {
    
         this.setState({index:0})
        }
      };
      
    
       prev = () => {
        if(this.state.index === 0){
    
         this.setState({index:this.props.images.length -1})
        }
       else{
      
       this.setState({index:this.state.index - 1})
       }
      }
    
    render() { 
   
      
      const constUrl="http://localhost:7000/images/";
      const imageData=this.props.images.map((img:any)=> constUrl + img.imageName);
     
     
        return ( 
            <div className="image-slider">
                <div className="img-slid">

                      <img src={imageData[this.state.index]} 
                         alt="loading..." width="80%" height="30%">
                      </img>

                </div>

              <FaArrowCircleLeft  size={50} style={{position:"absolute" ,top:"60%",left:"19%", color:'white'}}
               onClick={this.prev} ></FaArrowCircleLeft>
    
              <FaArrowCircleRight  size={50} style={{position:"absolute" ,top:"60%",right:"19%",color:'white'}}
               onClick={this.next} ></FaArrowCircleRight>
      
            </div>
         );
    }
}

const mapStateToProps=(state:any)=>{
    return{
       images:state.imageData.data
    }
  }
  
  const mapDispatchToProps=(dispatch:any)=>{
    return{
      fetchImageSliderDatas:()=>{dispatch(fetchImageSliderData())}
    }
  }
 
export default connect(mapStateToProps,mapDispatchToProps)(ImageSlider);