
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCancelOrdersData, fetchOrdersData } from '../Action/api';
import { Button } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight:'487px'
  },
  main:{
    margin:'50px'
  },
  cont2:{
    marginLeft:'450px',
    margin:'20px 0'
  },
  summary1:{
     marginLeft:'200px',
  },
 summary2:{
    marginLeft:'400px'
 }
}));

export default function Orders() {
  const classes = useStyles();

 const dispatch=useDispatch();

 const orders=useSelector((state:any)=>state.ordersData.data)

 console.log(orders);

 const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel:any) => (event:any, isExpanded:any) => {
    setExpanded(isExpanded ? panel : false);
  };
 
 const constUrl="http://localhost:7000/images/";

  React.useEffect(()=>{

    dispatch<any>(fetchOrdersData())

  },[])

  

  return (
    <div className={classes.root}>
        <div className={classes.main}>
          <ToastContainer />
            
        {
            orders && orders.map((item:any)=>{
                return(
                    <>
                     <Accordion expanded={expanded === item.id} onChange={handleChange(item.id) }>
                       <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel1a-content"
                         id="panel1a-header"
                        >
                       <div>
                        <img width="60px" height="60pcx" src={constUrl + item.image} alt="" />
                       </div>
                       <Typography className={classes.cont2}>{item.item_name}</Typography>
                     </AccordionSummary>
                     <AccordionDetails>
                        <div className={classes.summary1}>
                     <Typography variant="body2" >Order ID - {item.order_id}</Typography>
                     <Typography  >Qnt -{item.quantity} </Typography>
                     <Typography  >  ₹ {item.total_amount} </Typography>
                     </div>
                     <div className={classes.summary2}>
                        <Typography >{new Date(item.created_at).toDateString()}</Typography>
                        <br></br>
                        <Button variant='outlined' onClick={()=>{dispatch<any>(fetchCancelOrdersData(item.id,item.order_id,item.total_amount))}} >Cancel Order</Button>
                     </div>
                     </AccordionDetails>
                    </Accordion>
                    </>
                   
                )
            })

        }
     
      </div>
    </div>
  );
}