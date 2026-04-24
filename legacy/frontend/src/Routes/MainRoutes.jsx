import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoute';
import PageNotFound from '../Pages/PageNotFound';
import CreateNoteForm from '../Pages/CreateNoteForm';
const Login  = lazy(() => import("../Pages/Login"));
const Dashboard = lazy(()=>import('../Pages/Dashboard'));
const Signup = lazy(()=>import('../Pages/Signup'));

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element = {
          <PublicRoutes>
            <Login />
          </PublicRoutes>
          } />
        <Route path='/signup' element = {
          <PublicRoutes>
            <Signup />
          </PublicRoutes>
          } />
        <Route path='/dashboard' element = {
          <ProtectedRoutes>
            <Dashboard/>
          </ProtectedRoutes>
          }>
            <Route path='/dashboard/createnote' element = {
            <ProtectedRoutes>
              <CreateNoteForm/>
            </ProtectedRoutes>
          }/>
          </Route>
          
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}

export default MainRoutes