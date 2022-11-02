import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMainDishData,fetchMenuCategoryData } from "../../Redux/Menu/MenuActions";
import { ToastContainer } from "react-toastify";
import Cards from "../Card/Card";
import './Menu.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Close } from "@material-ui/icons";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SadSmily from "../../Images/sad.jpg";
import { Typography } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';




const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    justifyContent:"center",
    float:"right",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxHeight:10
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  media: {
    height: 300,
  },
}));

function Menu() {
 
  const classes = useStyles();

  const menuItems=useSelector((state:any)=>state.mainDishData.mainDish);
  console.log("menu",menuItems);
  
  
  const category=useSelector((state:any)=>state.categoryData.category);
  
  const [filters,setFilters]=React.useState("")
  
  const [value,setValue]=React.useState('');
 

  let search = menuItems && menuItems.filter(function (e:any) {
      if(filters =="1"){
      return  (e.category_id == filters && e.name.toString().toLowerCase().includes(value.toString().toLowerCase()))
       }
      if(filters =="2"){
      return (e.category_id == filters && e.name.toString().toLowerCase().includes(value.toString().toLowerCase()))
      }
      return(
      e.name.toString().toLowerCase().includes(value.toString().toLowerCase())
      )
  
  });




const sort=search&& search.sort((a:any,b:any)=>{
  
    if(filters === "low"){
     console.log("inside low");
     return a.price > b.price ? 1:-1
    }
    if(filters === "high"){
     console.log("inside high");
     return a.price < b.price ? 1:-1
    }   
});



  const handleFilterChange=(e:any)=>{
    setFilters(e.target.value);
    }

  const handleSearch=(e:any)=>{
    setValue(e.target.value)
  }


  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch<any>(fetchMenuCategoryData())
    dispatch<any>(fetchMainDishData())
  },[dispatch]);

 
    return ( 
      
    <div>
      <br></br>
   
      <ToastContainer />
     
      <div className="menu">
     {console.log("inside rturn")}
       <div className="menu-sec">
       <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Filter</InputLabel>
        <Select defaultValue="" value={filters} onChange={(e)=>{handleFilterChange(e)}} label="Filter" id="grouped-select">
        <MenuItem value="all">All</MenuItem>
          <ListSubheader>Category </ListSubheader>
          {
            category && category.map((item:any)=>(
              <MenuItem value={item.id ? item.id : ""}>
             
                {item.ctgy_name}</MenuItem>
            ))
          }
          <ListSubheader>Price</ListSubheader>
          <MenuItem value="low"  >Low to High</MenuItem>
          <MenuItem value="high">High to Low</MenuItem>
        </Select>
      </FormControl>
       <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        value={value}
        onChange={handleSearch}
        placeholder="Search Food items"
       
      />
      {
        value === "" ?
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon /> 
        </IconButton>
      :
        <IconButton  className={classes.iconButton} onClick={(e)=>{e.preventDefault() ;setValue("")}} >
        <Close /> 
      </IconButton>
      }
    
    </Paper>
    <br></br>
      <br></br>
      <br></br>
      <br></br>

        <h2 className="menu-head"><i>Menu Section</i></h2>
        <br></br>
       
        <div className="menu-container">
           {
            sort && sort.length == 0 ?
            <div style={{textAlign:"center",alignItems:"center"}}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                 className={classes.media}
                 image={SadSmily}
                 title="Contemplative Reptile"
              />  
           <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
               Not Found
            </Typography>
         
        </CardContent>
        </CardActionArea>
     
    </Card>
            </div>
              :
           sort && sort.map((data:any)=>{
             return(
                      <>
                     <Cards datas={data} />
                     </>
                )})

}
        </div>
      
      </div>
    </div>
    <br></br>
        </div>
        
     );
}

export default Menu;