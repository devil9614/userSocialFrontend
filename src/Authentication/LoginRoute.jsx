import React from 'react'
import { Route,Redirect } from 'react-router-dom'
import { useAuth } from './AuthProvide'

const LoginRoute = ({children,...rest}) => {
    const {login} = useAuth()
    console.log(login)
  return (
    <Route
      {...rest}
      render = {
          ({location}) => (
              (!login)?(children):(<Redirect to = {{
                pathname:"/",
                state:{from:location
                }
              }}
              />)
          )
      }
    />
  )
}

export default LoginRoute
