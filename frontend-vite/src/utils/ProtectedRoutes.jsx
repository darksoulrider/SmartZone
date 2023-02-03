import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
const ProtectedRoutes = ({isAuthenticated, isAdminRoute, isAdmin}) => {
  if(!isAuthenticated){
    return <Navigate to={"/login"} />
  }
  
  if(isAdminRoute && !isAdmin){
    return <Navigate to={"/login"} />
  }
  return <Outlet/>
}

export default ProtectedRoutes