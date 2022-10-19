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
import { ToastContainer } from 'react-toastify';
import { buyNow, fetchUserData } from '../Action/api';
import { useDispatch, useSelector } from 'react-redux';



interface prop{
    data:any,
    username:any,
    useremail:any
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));


export default function BuyItems(props:prop) {
  const classes = useStyles();

  const data=useSelector((state:any)=>state.userData.data);
  console.log("data" ,data);
 
 
  const [firstName,setFirstName]=React.useState("");
  const [lastName,setLastName]=React.useState('');
  const [email,setEmail]=React.useState('');
  const [phoneNo,setPhoneNo]=React.useState('');
  const [open, setOpen] = React.useState(false);
  const dispatch=useDispatch()


  const handleClickOpen = () => {
    setOpen(true);
  };

  React.useEffect(()=>{
    const name= data[0] && data[0]["username"]
    const email=data[0] && data[0]["email"]
    const lastname=data[0] && data[0]["last_name"]
    const phone=data[0] && data[0]["phone_no"]

    setFirstName(name)
    setLastName(lastname)
    setEmail(email)
    setPhoneNo(phone)

  },[data])
  
 
  React.useEffect(()=>{
    dispatch<any>(fetchUserData())
   
  },[])


const quantity=props.data.quantity;
const menuItem=props.data.name;
const price=props.data.price ;
const id=props.data.id;
  
  const handleSubmit = () => {
    const section="buyNowItems"
    dispatch<any>(buyNow(firstName,lastName,email,phoneNo,menuItem,price,quantity,id,section))
  
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" disabled={props.data.availability == 0} color="secondary" onClick={handleClickOpen}>
        BuyNow
      </Button>
    
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
                <br></br>
               <Typography style={{display:"flex"}}>
                <h4>Total Price</h4> <h4 style={{marginLeft:"310px"}}> {props.data.price * props.data.quantity}</h4>
               </Typography>
            </form>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} variant="contained" style={{backgroundColor:"yellow",color:"black"}}>
            place order
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
