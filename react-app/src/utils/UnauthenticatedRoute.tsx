import { Route, Navigate } from "react-router-dom";
import { useAuthState } from "../firebase/context";

const UnauthenticatedRoute = ({ component: C, ...props }) => {
    const { isAuthenticated } = useAuthState()
    console.log(`UnauthenticatedRoute: ${isAuthenticated}`)
    return !isAuthenticated ? <C {...props} /> : <Navigate to="/dashboard" />
}

export default UnauthenticatedRoute;