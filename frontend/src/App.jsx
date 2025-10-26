import React, { useEffect } from 'react'
import { fetchUser } from './store/actions/userActions'
import { useDispatch } from 'react-redux'
import MainRoutes from './Routes/MainRoutes'

const App = () => {
  return (
    <>
      <MainRoutes/>
    </>
  )
}

export default App