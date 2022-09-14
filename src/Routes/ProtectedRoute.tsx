import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Redirect, Route} from "react-router-dom";
import { useHistory } from "react-router-dom";

function ProtectedRoutes({ component: Component, ...rest }:any) {
// const auth=useSelector((state:any)=>state.authData.auth)
 const auth=localStorage.getItem("authState") 

  console.log(auth)
  return (
    <>
    <Header />
    <Route
      {...rest}
      render={()=>{
      console.log(rest)
        if (auth == "true"  ) return <Component {...rest}  />;
        if (auth == "false") return <Redirect to="/login" />;
      }
    }
    />
    <Footer />
    </>
  );
}

export default ProtectedRoutes;