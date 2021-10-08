import React from 'react'
import './MyFeed.css'
import PostCard from './PostCard'

const MyFeed = () => {
    const posts = [{
      id:1,
        username:"sujan",
        body:"This is a dummy post",
        createdAt:"22/09/21",
        name:"Sujan Mukherjee"
    },
    {
      id:2,
        username:"sujan",
        body:"This is a dummy post",
        createdAt:"22/09/21",
        name:"Sujan Mukherjee"
    },
    {
      id:3,
      username:"sujan",
        body:"This is a dummy post",
        createdAt:"22/09/21",
        name:"Sujan Mukherjee"
    },
    {
      id:4,
      username:"sujan",
        body:"This is a dummy post",
        createdAt:"22/09/21",
        name:"Sujan Mukherjee"
    },
    {
      id:5,
      username:"sujan",
        body:"This is a dummy post",
        createdAt:"22/09/21",
        name:"Sujan Mukherjee"
    },
    {
      id:6,
      username:"sujan",
        body:"This is a dummy post",
        createdAt:"22/09/21",
        name:"Sujan Mukherjee"
    }]
  return (
    <div>
      <div>
      {/*Some small details about the user*/}
      </div>
      <div className = "my-feed-posts">
        {/*Posts of the user*/}
        {posts.map(
            post =>
            <PostCard username = {post.username} post = {post} key = {post.id}/>
            )}
        
      </div>
    </div>
  )
}

export default MyFeed
