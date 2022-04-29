import { useState, useContext, useEffect, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config";

// @ts-ignore
export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  useEffect(() => onAuthStateChanged(auth, setUser), [user])

  return (
    <AuthContext.Provider value={{ user }}> 
        {children} 
    </AuthContext.Provider>
  )
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  console.log("Auth: " + JSON.stringify(auth));
  // @ts-ignore
  if (auth) return { ...auth, isAuthenticated: auth.user != null }
  return { isAuthenticated: false }
}