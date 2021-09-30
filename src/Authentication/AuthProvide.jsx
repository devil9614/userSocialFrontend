import React, { useContext, useMemo, useState } from 'react'
const AuthProvider = React.createContext()

export function useAuth(){
    return useContext(AuthProvider)
}

const AuthProvide = ({children}) => {
    const [login,setLogin] = useState()
    const loginState = useMemo(() => ({login,setLogin}),[login,setLogin])
    const checkLogin = () => {
        // logic of checking the login state of the user
    }.
    useEffect(() =>{
        checkLogin()
    },[])
  return (
    <AuthProvider.Provider value = {loginState}>
      {children}
    </AuthProvider.Provider>
  )
}

export default AuthProvide
