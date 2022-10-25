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
import { fetchUserData, paymentMethodData, placeOrder } from '../Action/api';
import { useDispatch, useSelector } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CardPay from './PaymentMethods/CardPay';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));


export default function OrderAll() {
  const classes = useStyles();
 
  const [open, setOpen] = React.useState(false);
  const [firstName,setFirstName]=React.useState('');
  const [lastName,setLastName]=React.useState('');
  const [email,setEmail]=React.useState('');
  const [phoneNo,setPhoneNo]=React.useState('');

  const dispatch=useDispatch();

  const cartData=useSelector((state:any)=>state.cartData);
  const userData=useSelector((state:any)=>state.userData.data);
  console.log(userData);
  

  const total = cartData.data.reduce((prev:any, current:any) => {
    if (current.availability) prev += current.price * current.quantity;
    return prev;
  }, 0);


  React.useEffect(()=>{

    dispatch<any>(fetchUserData())
    dispatch<any>(paymentMethodData())

  },[])


  const paymentMethod=useSelector((state:any)=>state.paymentData.data);
  console.log(paymentMethod);


  const [value, setValue] = React.useState('1');
  console.log(typeof value);
  

  const handleChange = (event:any) => {
    setValue(event.target.value);
  };
  

  React.useEffect(()=>{
    const name= userData[0] && userData[0]["username"]
    const email= userData[0] && userData[0]["email"]
    const lastname=userData[0] && userData[0]["last_name"]
    const phone= userData[0] && userData[0]["phone_no"]

    setFirstName(name)
    setLastName(lastname)
    setEmail(email)
    setPhoneNo(phone)

  },[userData])
  
 const cartDatas=cartData.data;

  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleSubmit = () => {
    dispatch<any>(placeOrder(firstName,lastName,email,phoneNo,cartDatas,total,value))

    setOpen(false);
  };

  return (
    <div>
        <Button variant="contained" style={{backgroundColor:"lightyellow"}} onClick={handleClickOpen} >place order</Button> 
   
      <Dialog open={open} onClose={()=>{setOpen(false)}} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >

        <DialogTitle id="alert-dialog-title">{"Place order"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

            <form className={classes.root} noValidate autoComplete="off">
               <TextField id="standard-basic" label="First Name" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
               <br></br>
               <TextField id="standard-basic" label="Last Name" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
               <br></br>
               <TextField id="standard-basic" label="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
               <br></br>
               <TextField id="standard-basic" label="Phone Number" value={phoneNo} onChange={(e)=>{setPhoneNo(e.target.value)}} />
               <br></br>
               <FormControl component="fieldset">
               <FormLabel component="legend">Payment</FormLabel>
               <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                 {
                    paymentMethod.map((item:any)=>(
                  <FormControlLabel value={String(item.id)} control={<Radio color="primary" />} label={item.method} />
                 ))
                 }
               </RadioGroup>
               </FormControl>
    <br></br>
               
               <Typography style={{display:"flex"}}>
                <h4>Total Price</h4> <h4 style={{marginLeft:"310px"}}> {total}</h4>
               </Typography>
            </form>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {
            value == '2' ?
            
        
          <CardPay firstname={firstName} lastname={lastName} email={email} phone={phoneNo} 
          cartData={cartDatas} total={total} value={value} />
          :
          
          <Button onClick={handleSubmit} variant="contained" style={{backgroundColor:"yellow",color:"black"}}>
            place order
          </Button>
          
          
          }
        
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
