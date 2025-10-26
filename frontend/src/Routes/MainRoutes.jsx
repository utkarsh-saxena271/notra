import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "../Pages/Login";
import Dashboard from '../Pages/Dashboard';
import Signup from '../Pages/Signup';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element = {<Login />} />
        <Route path='/signup' element = {<Signup />} />
        <Route path='/dashboard' element = {<Dashboard/>} />
         
    </Routes>
  )
}

export default MainRoutes