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
import { toast, ToastContainer } from 'react-toastify';
import { placeOrder } from '../Action/api';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

interface prop{
    data:any
}

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
 const history=useHistory()
  // var todayDate = new Date();
  // var currentDate=todayDate.getFullYear()+"-"+(todayDate.getMonth()+1)+"-"+ todayDate.getDate();

  const [open, setOpen] = React.useState(false);
  const [firstName,setFirstName]=React.useState('');
  const [lastName,setLastName]=React.useState('');
  const [email,setEmail]=React.useState('');
  const [phoneNo,setPhoneNo]=React.useState('');
  const [date,setDate]=React.useState('')
  const dispatch=useDispatch();

  const cartData=useSelector((state:any)=>state.cartData);

  const total = cartData.data.reduce((prev:any, current:any) => {
    if (current.availability) prev += current.price * current.quantity;
    return prev;
  }, 0);

  
 const cartDatas=cartData.data;

  const handleClickOpen = () => {
    setOpen(true);
  };

const id=cartDatas.map((item:any)=>item.id)

  const handleSubmit = () => {
  
    dispatch<any>(placeOrder(firstName,lastName,email,phoneNo,date,cartDatas,total))

    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNo('');
    setDate('');
    setOpen(false);
  };

  return (
    <div>
        <Button variant="contained" style={{backgroundColor:"lightyellow"}} onClick={handleClickOpen} >place order</Button> 
      <ToastContainer />
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
               
              
               <Typography style={{display:"flex"}}>
                <h4>Total Price</h4> <h4 style={{marginLeft:"310px"}}> {total}</h4>
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
