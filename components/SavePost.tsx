'use client';
import { SavePosts } from '@/actions/SavedPosts';
import React from 'react'
import { CiBookmark } from 'react-icons/ci';
import { FaBookmark } from 'react-icons/fa6';

interface SavePostProps {
  id : string ;
  ifExist : any
}

const SavePost = ({id,ifExist} : SavePostProps) => {
    const SavePost =async () => {
        await SavePosts({postId : id})
      }
  return (
    <div className='cursor-pointer'>
    {ifExist &&        <FaBookmark color='#face15' size={20} onClick={SavePost} /> }
    {!ifExist &&       <CiBookmark onClick={() => SavePost()} color='#fff' size={25}  />}
 </div>
  )
}

export default SavePost