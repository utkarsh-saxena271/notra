import { Route, Routes } from "react-router"
import { lazy } from "react"
const Register = lazy(()=>import("../Pages/Register"))

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Register/>} />
    </Routes>
  )
}

export default MainRoutes