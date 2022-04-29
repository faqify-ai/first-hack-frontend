import { Route, Navigate } from "react-router-dom";
import { useAuthState } from "../firebase/context";

const AuthenticatedRoute = ({ component: C, ...props }) => {
    const { isAuthenticated } = useAuthState()
    console.log(`AuthenticatedRoute: ${isAuthenticated}`)
    return isAuthenticated ? <C {...props} /> : <Navigate to="/signin" />
}

export default AuthenticatedRoute;