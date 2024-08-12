import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/ContextHooks";

function PrivateRoute({children}) {
  const{user,loading}= useAuthContext();

  if(loading){
   return <div>Loading....</div>
  }

  if(user && user?.email)
  return (
    <div>{children}</div>
  )
  else{
   return <Navigate to={"/login"}/>
  }
}

export default PrivateRoute