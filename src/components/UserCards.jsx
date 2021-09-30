import { Avatar, Button } from '@mui/material'
import React from 'react'

const UserCards = ({user}) => {
  return (
      <div className = "card mb-3" style = {{width: "60vw"}}>
      <div className = "d-flex fllex- justify-content-around align-items-center p-3 m-3" style = {{width:"60vw"}}>
    <Avatar
        >
        {user.username[0]}
        </Avatar>
        <h2>{user.username}</h2>
        <Button color = "error" variant="contained">Follow</Button>
    </div>
      </div>
  )
}

export default UserCards
