import React from 'react'
import Post from './Post'

const posts =[
  {id: '123',
  username:'Topmarkkk',
  userImg:'profile.PNG',
  img:'profile.PNG',
  caption:"This is Dump"
  },
  {id: '123',
  username:'Topmarkkk',
  userImg:'profile.PNG',
  img:'profile.PNG',
  caption:"This is Dump"
  },
  {id: '123',
  username:'Topmarkkk',
  userImg:'profile.PNG',
  img:'profile.PNG',
  caption:"This is Dump"
  },
  {id: '123',
  username:'Topmarkkk',
  userImg:'profile.PNG',
  img:'profile.PNG',
  caption:"This is Dump"
  },
]
const Posts = () => {
  return (
    <div>
     {posts.map((post)=> 
     <Post  
     key={post.id} 
     username={post.username}
     img={post.userImg}
     caption={post.caption}
     />
     )}
      
    </div>
  )
}

export default Posts