import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({element: Component, ...props}) => {
  return(
    localStorage.getItem("isLoggedIn") ? <Component {...props} /> : <Navigate to="/" replace/>
  )
}

const ProtectedRegisterAndLoginRouteElement = ({element: Component, ...props}) => {
  return(
    localStorage.getItem("isLoggedIn") ? <Navigate to="/" replace/> : <Component {...props} />  
  )
}

export {ProtectedRouteElement, ProtectedRegisterAndLoginRouteElement};