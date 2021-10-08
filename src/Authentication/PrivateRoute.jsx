import React from 'react'
import { Route,Redirect } from 'react-router-dom'
import { useAuth } from './AuthProvide'

const PrivateRoute = ({children,...rest}) => {
    const {login} = useAuth()
    console.log(login,"login on private route")
  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          (login)
            ? (
              children
            ) : (
              <Redirect to ="/login" />
            ))
      }
    />
  )
}

export default PrivateRoute
