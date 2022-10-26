
import './App.css';
import Home from './Pages/Home';
import Menu from './Components/Menu/Menu';
import CommentSection from './Components/Comment/CommentSection';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './Pages/Login';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';
import ProtectedRoutes from './Routes/ProtectedRoute';
import SignUp from './Pages/SignUp';
import Cart from './Components/Cart/Cart';
import Orders from './Components/OrderCancel/Orders';



function App() {
  return (
    <Provider store={Store}>
    <div >
      
    <Router >
    <Switch>
      
      <Route path="/signup" component={SignUp} exact />
      <Route path="/login" exact  component={Login} />
      <ProtectedRoutes path="/" exact component={Home}  />
      <ProtectedRoutes path="/menu" exact component={Menu} />
      <ProtectedRoutes path="/comment" exact component={CommentSection} /> 
      <ProtectedRoutes path="/cart" exact component={Cart}  />
      <ProtectedRoutes path="/orders" exact component={Orders}  />
     
    
    </Switch>
    </Router>
    
    </div>
    </Provider>
  );
}

export default App;
