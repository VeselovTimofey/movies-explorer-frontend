import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({element: Component, ...props}) => {
  console.log(props.isLoggedIn);
  return(
    props.isLoggedIn ? <Component {...props} /> : <Navigate to="/signin" replace/>
  )
}

export default ProtectedRouteElement;