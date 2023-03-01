import {faker} from '@faker-js/faker'
import { useState,useEffect } from 'react'
import Story from './Story'
import { useSession } from 'next-auth/react'

const Stories = () => {
const [suggestions, setSuggestions] = useState([])

useEffect(() => {
  const suggestions = [...Array(20)].map((_,i) =>({
    userId:faker.datatype.uuid(),
    username:faker.internet.userName(),
    avatar:faker.image.avatar(),
  }));
  setSuggestions(suggestions);
  //console.log(suggestions)
}, [])

const {data:session} = useSession()
  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border border-black rounded-sm mr-2 overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
      {session && (
        <Story img={session.user.image} 
        key={session.user.username} username={session.user.username}
        />
      )}

{suggestions.map((profile) => 
  <Story key={profile.userId} img={profile.avatar} username={profile.username} />
)}      
      {/*Story */}
      {/*Story */}
      {/*Story */}
      {/*Story */}
      {/*Story */}
      {/*Story */}
      {/*Story */}
    </div>
  )
}

export default Stories