import { Avatar } from '@mui/material'
import React from 'react'
import {ReactComponent as Comment} from '../assets/comment.svg'
import {ReactComponent as Like} from '../assets/like.svg'
import {ReactComponent as Share} from '../assets/share.svg'


const PostCard = ({username,post}) => {
  return (
    <div className = "card d-flex flex-column justify-centent-center align-items-start p-3 m-3" style = {{minWidth:"50vw"}}>
      <div className = "d-flex justify-content-around align-items-center">
      <Avatar style = {{marginRight:"1rem"}}>{username[0]}</Avatar>
      <div className = "d-flex flex-column justify-content-center align-items-start">
      <p>{post.name}</p>
      <div className = "d-flex justify-content-center align-items-center" style = {{marginTop:"-1rem",opacity:"60%"}}>
      <h6 style = {{marginRight:"1rem"}}>{username}</h6>
      <h6>{post.createdAt}</h6>

      </div>
      
      </div>
      </div>
      <div className = "d-flex justify-content-center align-items-center">
        <div></div>
        <h5 style = {{marginLeft:"3rem",marginTop:"2rem"}}>{post.body}</h5>
      </div>
      <div className = "d-flex justify-content-around align-items-center mt-4" style = {{width:"100%",paddingLeft:"2rem",paddingRight:"2rem",cursor:"pointer"}}>
        {/*Navbar for like share or commrnt*/}
        <Like/>
        <Comment/>
        <Share/>
      </div>
    </div>
  )
}

export default PostCard
