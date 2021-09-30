import React from 'react'
import UserCards from '../../components/UserCards'

const HomeWithLogin = () => {
  const users = [{
    id:1,
    username:"sujan1"
  },
  {
    id:2,
    username:"sujan2"
  },
  {
    id:3,
    username:"sujan3"
  },
  {
    id:4,
    username:"sujan4"
  },
  {
    id:5,
    username:"sujan5"
  },
]
  const listItems = users.map((user) =>
    <UserCards user = {user}/>
  )
  return (
    <div>
    <h1 className = "text-center p-4">Users</h1>
      <div className = "d-flex flex-column justify-content-center align-items-center" style= {{minWidth:"100vw"}}>
        {listItems}
      </div>
    </div>
  )
}

export default HomeWithLogin
