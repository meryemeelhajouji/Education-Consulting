import { Navigate, Outlet } from 'react-router-dom'
const ProtectRoute = () => {
   
return (
    localStorage.getItem('token') ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default ProtectRoute