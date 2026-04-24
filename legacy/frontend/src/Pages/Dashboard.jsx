import React from 'react'
import CreateNote from '../Components/CreateNote'
import NoteList from '../Components/NoteList'
import { Outlet, useLocation } from 'react-router-dom'
const Dashboard = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      {location.pathname == '/dashboard' && (
       <> <CreateNote/> <NoteList/></>
    )}
      {location.pathname == '/dashboard/createnote' && 
        <Outlet/>
      }
    </div>
  )
}

export default Dashboard