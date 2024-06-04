
import React from 'react'
import PostCard from './PostCard'
import { UseGetFeaturedPosts } from '@/data/get-posts'


interface PostCardWrapperProps {
  children : React.ReactNode
}

const PostCardWrapper =async ({children} : PostCardWrapperProps) => {

  return (
    <div className='px-[2%]  flex justify-center items-start  gap-3 pb-3 flex-wrap'>
      {children}
    </div>
  )
}

export default PostCardWrapper