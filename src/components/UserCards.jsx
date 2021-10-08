import { Avatar, Button } from '@mui/material'
import React from 'react'
import './UserCards.css'

const UserCards = ({user}) => {
  return (
      <div className = "carddbody">
        <Avatar>{user.username[0]}</Avatar>
        <p>{user.username}</p>
      </div>
  )
}

export default UserCards
