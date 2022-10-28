import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

  const userName = useSelector (state => state.userName)

  if(userName){
  return <Outlet/>
  }else{
   return <Navigate to="/"/>  
  }
}

export default ProtectedRoute