import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField"
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { buyNow, fetchUserData, paymentMethodData, placeOrder } from '../../Action/api';
import { useDispatch, useSelector } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import {Divider , MenuItem,InputLabel,Select} from '@material-ui/core';


interface prop{
   firstname:any,
   lastname:any,
   email:any,
   phone:any,
   menuitem?:any,
   price?:any,
   quantity?:any,
   id?:any,
   section?:any,
   value:any,
   cartData?:any,
   total?:any,
   image?:any,
   setOpens?:any,
   menuId?:any
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
     
        btn1:{
          marginRight:"10px",
          backgroundColor:'orange',
          color:'white'
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 50,
          },
        
}));


export default function CardPay(props:prop) {
  const classes = useStyles();

  const data=useSelector((state:any)=>state.userData.data);
 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };


  const [cardNumber,setCardNumber]=React.useState("");
  const [cvv,setCvv]=React.useState('');
  
  const dispatch=useDispatch()
 
  const paymentMethod=useSelector((state:any)=>state.paymentData.data);
  console.log(paymentMethod);
   
  const [month, setMonth] = React.useState('');

  const handleChangeMonth = (event:any) => {
    setMonth(event.target.value);
  };

   
 const [year, setYear] = React.useState('');

  const handleChangeYear = (event:any) => {
    setYear(event.target.value);
  };

 
  React.useEffect(()=>{
    dispatch<any>(fetchUserData())
    dispatch<any>(paymentMethodData())
   
  },[])


const quantity=props.quantity
const menuItem=props.menuitem
const price=props.price ;
const id=props.id;
const firstName=props.firstname;
const lastName=props.lastname;
const email=props.email;
const phoneNo=props.phone;
const section = props.section;
const values=props.value;
const cartDatas=props.cartData;
const total=props.total;
const image=props.image;
const menuId=props.menuId;
console.log(menuId);


  const handleSubmit = (e:any) => {
    const user_id=localStorage.getItem('user_id')
    e.preventDefault()
    if(props.section =="buyNowItems"){
    dispatch<any>(buyNow(firstName,lastName,email,phoneNo,menuItem,price,quantity,id,section,values,user_id,image,menuId))
     props.setOpens(false)
    }
   else
   { dispatch<any>(placeOrder(firstName,lastName,email,phoneNo,cartDatas,total,values))
   }
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained"  style={{backgroundColor:'yellow',color:'black'}} onClick={handleClickOpen}>
        CONTINUE
      </Button>
    
      <Dialog open={open} onClose={()=>{setOpen(false)}} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >

        <DialogTitle id="alert-dialog-title">{"Place order"}</DialogTitle>
        <DialogContent style={{width:"500px"}}>
          <DialogContentText id="alert-dialog-description">

      <div >
        
       <div>   
      <form >
      <div className={classes.root} >
      <TextField id="standard-basic" label="Card Number" value={cardNumber} onChange={(e)=>{setCardNumber(e.target.value)}} />
      <h6 style={{marginBottom:'0px'}}>Valid Thru</h6>
      <div style={{display:"flex",width:"350px"}}>
      
   <div>

      <FormControl className={classes.formControl}>
      
        <InputLabel id="demo-simple-select-label">MM</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month}
          onChange={handleChangeMonth}
        >
          <MenuItem value="Jan">Jan</MenuItem>
          <MenuItem value="Feb">Feb</MenuItem>
          <MenuItem value="Mar">Mar</MenuItem>
          <MenuItem value="Apr">Apr</MenuItem>
          <MenuItem value="May">May</MenuItem>
          <MenuItem value="Jun">Jun</MenuItem>
          <MenuItem value="Jul">Jul</MenuItem>
          <MenuItem value="Aug">Aug</MenuItem>
          <MenuItem value="Sep">Sep</MenuItem>
          <MenuItem value="Aug">Aug</MenuItem>
          <MenuItem value="Nov">Nov</MenuItem>
          <MenuItem value="Dec">Dec</MenuItem>

        </Select>
      </FormControl>
      </div>

      <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">YY</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          onChange={handleChangeYear}
        >
          <MenuItem value="22">2022</MenuItem>
          <MenuItem value="23">2023</MenuItem>
          <MenuItem value="24">2024</MenuItem>
          <MenuItem value="25">2025</MenuItem>
          <MenuItem value="26">2026</MenuItem>
          <MenuItem value="27">2027</MenuItem>
          <MenuItem value="28">2028</MenuItem>
          <MenuItem value="29">2029</MenuItem>
          <MenuItem value="30">2030</MenuItem>
          <MenuItem value="31">2031</MenuItem>
          <MenuItem value="31">2032</MenuItem>
          <MenuItem value="33">2033</MenuItem>

        </Select>
      </FormControl>
      </div>
      <div style={{marginLeft:'70px',marginTop:'7px'}}>
      <TextField id="standard-basic" label="CVV" type='password' value={cvv} onChange={(e)=>{setCvv(e.target.value)}} />
      </div>
      </div>

   
     </div> 
    <br></br>
  <div style={{padding:'8px',backgroundColor:"whitesmoke"}}>
      <Button className={classes.btn1} type='submit' onClick={handleSubmit} disabled={cardNumber === "" || month ==="" || year=== "" || cvv===""} fullWidth  variant="contained">Pay- ₹{props.section =="buyNowItems" ? props.price * props.quantity : props.total} </Button>
      </div> 
  </form>
   <div style={{marginTop:"10px"}}>
   <Typography>PRICE DETAILS</Typography>
   <br></br>
   <Divider />
   <Typography style={{padding:'8px'}}>

       {  
       props.section =="buyNowItems" ?
       <> <div style={{display:'flex'}}>
           <h6> Price({props.quantity}item) </h6> <h6 style={{marginLeft:"310px"}}> ₹{ props.price * props.quantity }</h6>
           </div>
           </>
        
           :
           <>
           {
               props.cartData.map((item:any)=>(
                   <>
                <div style={{display:'flex'}}>
                     <h6> Price({item.quantity}item) </h6> <h6 style={{marginLeft:"310px"}} > ₹{item.price * item.quantity}</h6>
                </div>
                    
              </>
               ))
           }
           <Divider />
           <Typography variant='h6' style={{display:"flex",padding:'10px 0'}}>
           <h6> Amount Payable </h6> <h6 style={{marginLeft:"270px"}} >₹{total} </h6>
           </Typography>
          
           </>
       }
               
              </Typography>
            
              <Divider />
              <br></br>
             <Button variant='outlined' onClick={()=>{setOpen(false)}}>cancel</Button> 
 </div>
 </div>

  </div>
 
 
          </DialogContentText>
        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>
    </div>
  );
}
