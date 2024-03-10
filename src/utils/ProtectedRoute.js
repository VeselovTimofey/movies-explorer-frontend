import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRouteElement = ({element: Component, ...props}) => {
  return(
    Cookies.get("isLoggedIn") ? <Component {...props} /> : <Navigate to="/signin" replace/>
  )
}

export default ProtectedRouteElement;