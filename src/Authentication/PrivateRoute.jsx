import React from 'react'
import { Route } from 'react-router-dom'
import HomeWL from '../pages/HomeWL'
import { useAuth } from './AuthProvide'

const PrivateRoute = ({children,...rest}) => {
    const {login} = useAuth()
  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          (login)
            ? (
              children
            ) : (
              <HomeWL/>
            ))
      }
    />
  )
}

export default PrivateRoute
