import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const PublicRoutes = ({children}) => {
    const user = useSelector(state => state.user.user)

    if(user){
        return <Navigate to={'/dashboard'} replace/>
    }

    return children
}

export default PublicRoutes