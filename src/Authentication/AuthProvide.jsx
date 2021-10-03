import { useQuery,gql } from '@apollo/client'
import React, { useContext, useEffect, useMemo, useState } from 'react'
const AuthProvider = React.createContext()

export function useAuth(){
    return useContext(AuthProvider)
}

const UsersQL = gql `query Query {
  validUser
}
`
const UsersQuery = ({setLogin}) => {
  const {loading,error,data} = useQuery(UsersQL)

  if (loading) return <p>Loading ... </p>
  if (error){
    console.log(error)
    return null
  } 
  console.log(data,"data1")
  if (data.validUser){
    setLogin(true)
  }
  return null
}

const AuthProvide = ({children}) => {
    const [login,setLogin] = useState()
    const loginState = useMemo(() => ({login,setLogin}),[login,setLogin])
    const checkLogin = () => {
        // logic of checking the login state of the user
    }
    useEffect(() =>{
        checkLogin()
    },[])
    console.log(login)
  return (
    <AuthProvider.Provider value = {loginState}>
      <UsersQuery setLogin = {setLogin}/>
      {children}
    </AuthProvider.Provider>
  )
}

export default AuthProvide
