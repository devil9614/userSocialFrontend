import { Button } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router'
import './Navbar.css'

const Navbar = () => {
  const history = useHistory()
  const logoutFunc = () => {
    if(localStorage.hasOwnProperty("token")){
      localStorage.removeItem("token")
      history.replace("/home")
    }
  }
  return (
    <div className = "main-navbar">
    <h4 className = "logo">User Social</h4>
    <Button color ="error" variant = "contained" className = "button-nav" onClick = {logoutFunc}>Logout</Button>
    </div>
  )
}

export default Navbar
