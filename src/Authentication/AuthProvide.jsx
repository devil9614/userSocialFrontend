import { useQuery,useLazyQuery } from '@apollo/client'
import gql from "graphql-tag";
import React, { useContext, useEffect, useMemo, useState } from 'react'
const AuthProvider = React.createContext()

export function useAuth(){
    return useContext(AuthProvider)
}

const UsersQL = gql `query Query {
  validUser
}
`
const AuthProvide =  ({children}) => {
  const [login,setLogin] = useState()
    const loginState = useMemo(() => ({login,setLogin}),[login,setLogin])
  const [queryFetch,{loading,error,data}] = useLazyQuery(UsersQL)
    useEffect(() =>{
        queryFetch()
        if (error){
        } 
        if (data){if (data.validUser){
          setLogin(true)
        }}
          
    },[loading])
  return (
    <AuthProvider.Provider value = {loginState}>
      {children}
    </AuthProvider.Provider>
  )
}

export default AuthProvide
