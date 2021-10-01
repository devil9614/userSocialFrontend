import React from 'react'
import PostCard from '../../components/PostCard'

const UserFeed = () => {
    const posts = [{
        username:"sujan",
        body:"This is a dummy post",
        createdAt:"22/09/21",
        name:"Sujan Mukherjee"
    },
    {
        username:"sujan",
        body:"This is a dummy post",
        createdAt:"22/09/21",
        name:"Sujan Mukherjee"
    },
    {
        username:"sujan",
        body:"This is a dummy post",
        createdAt:"22/09/21",
        name:"Sujan Mukherjee"
    },
    {
        username:"sujan",
        body:"This is a dummy post",
        createdAt:"22/09/21",
        name:"Sujan Mukherjee"
    },
    {
        username:"sujan",
        body:"This is a dummy post",
        createdAt:"22/09/21",
        name:"Sujan Mukherjee"
    },
    {
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
      <div className = "d-flex flex-column justify-content-center align-items-center">
        {/*Posts of the user*/}
        {posts.map(
            post =>
            <PostCard username = {post.username} post = {post}/>
            )}
        
      </div>
    </div>
  )
}

export default UserFeed
