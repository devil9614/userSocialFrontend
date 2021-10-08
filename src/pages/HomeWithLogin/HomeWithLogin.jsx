import { Avatar, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import UserCards from '../../components/UserCards'
import './HomeWithLogin.css'
import {gql,useMutation} from "@apollo/client"
import Navbar from '../../components/Navbar'
import MyFeed from '../../components/MyFeed'
// import SendIcon from '@mui/icons-material/Send';


const createPostQL = gql `mutation CreatePostMutation($createPostTitle: String!) {
  createPost(title: $createPostTitle) {
    id
    createdAt
    updatedAt
    title
  }
}

`
const CreatePostQuery = () => {
  const [title,setTitle] = useState("")
  const [createPostFunc,{loading,error,data}] = useMutation(createPostQL,{variables:{
    "createPostTitle": title
  }})
  
  const handlePostChange = (e) => {
    setTitle(e.target.value)

  }
  const submitPost = () => {
    createPostFunc()
    setTitle("")
    console.log(title)
  }
  useEffect(() => {
    console.log(data,"data")
    console.log(error,"Error")
  },[data,error])
  return (
      <div className = "create-post">
      <Avatar className = "avatar-post">
      S
      </Avatar>
        <form className = "create-post-form">
          <TextField className ="create-form" placeholder = "Share Your thought" style = {{width:"30vw"}} fullWidth required value = {title} onChange = {(e) => handlePostChange(e)} size="small" variant="outlined" />
        </form>
        <Button onClick = {() => submitPost()} color="primary" variant = "contained">Create Post</Button>
      </div>
      )
}
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
  {
    id:6,
    username:"sujan1"
  },
  {
    id:7,
    username:"sujan2"
  },
  {
    id:8,
    username:"sujan3"
  },
  {
    id:9,
    username:"sujan4"
  },
  {
    id:10,
    username:"sujan5"
  },
  {
    id:11,
    username:"sujan1"
  },
  {
    id:12,
    username:"sujan2"
  },
  {
    id:13,
    username:"sujan3"
  },
  {
    id:14,
    username:"sujan4"
  },
  {
    id:15,
    username:"sujan5"
  },
  {
    id:16,
    username:"sujan1"
  },
  {
    id:17,
    username:"sujan2"
  },
  {
    id:18,
    username:"sujan3"
  },
  {
    id:19,
    username:"sujan4"
  },
  {
    id:20,
    username:"sujan5"
  },
]
  const listItems = users.map((user) =>
    <UserCards user = {user} key = {user.id}/>
  )
  
  return (
    <div className = "main-body">
    <div className = "for-navbar">
    <Navbar/>
    </div>
    <div className = "test100">
    <div className = "test30">
    {listItems}
    </div>
    <div className = "test70">
    <CreatePostQuery/>
    <MyFeed/>
    </div>
    </div>
    </div>
    
  )
}

export default HomeWithLogin
