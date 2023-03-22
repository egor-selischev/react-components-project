import {Navigate, Outlet} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context";

const PrivateRoute = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  return (
    isAuth ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRoute
