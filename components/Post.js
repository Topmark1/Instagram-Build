import React, { useState } from 'react'
import {
    BookmarkIcon,
    ChatBubbleLeftIcon,
    EllipsisHorizontalIcon,
    FaceSmileIcon,
    HeartIcon,
    PaperAirplaneIcon
} from '@heroicons/react/24/outline'

import {
    HeartIcon as HeartIconFilled
} from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react'

function Post({id,username,userImg,img,caption}) {
  const {data:session } = useSession()
const [comments,setComments] = useState([])
const [comment,setComment] = useState([])

  return (
    <div className='bg-white my-7 border rounded-sm'>
        {/*Header */}
        <div className='flex items-center p-5'> 
            <img src={userImg} className='rounded-full h-12 w-12 object-contain border p-1 mr-3' alt='' />
            <p className='flex-1 font-bold'>{username}</p>
            <EllipsisHorizontalIcon className='h-5' />
        </div>

        {/*img */}
        <img src ={img} className='onbject-cover w-full' alt='' />

        {/*buttons */}
        {session && (
        <div className='flex justify-between px-4 pt-4'> 
        <div className='flex space-x-4'> 
          <HeartIcon className='btn'/>
          <ChatBubbleLeftIcon className='btn'/>
          <PaperAirplaneIcon className='btn'/>
        </div>
        <BookmarkIcon className='btn'/>
        </div>
           )}

        {/*Captions */}
        <div> 
          <p className='p-5 truncate'>
            <span className='font-bold mr-1'>{username}</span>
          {caption}
          </p>
        </div>
        {/*coments */}

         {/*input*/}
         {session && (
         <form>
          <FaceSmileIcon className='h-7' />
          <input 
          value={comment}
          onChange={e=>setComment(e.target.value)}
          type="text" className='border-none flex-1 focus:ring-0 outline-none' 
          placeholder='Add a comment..'/>
          <button type="submit" className='font-semibold text-blue-400'>Post</button>
         </form>
         )}  
    </div>
  )
}

export default Post