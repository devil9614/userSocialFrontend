import React from 'react'
import { Route,Redirect } from 'react-router-dom'
import { useAuth } from './AuthProvide'

const LoginRoute = ({children,...rest}) => {
    const {login} = useAuth()
  return (
    <Route>
      {...rest}
      render = {
          ({location}) => (
              (!login)?(children):(<Redirect to = {{
                  pathname : (location.state.from.pathname),
                  state: {from : location}
              }}/>)
          )
      }
    </Route>
  )
}

export default LoginRoute
