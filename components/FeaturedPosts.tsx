import React from 'react'
import PostCardWrapper from './PostCardWrapper'
import { getFeaturedPosts } from '@/actions/getFeaturedPosts'
import PostCard from './PostCard'
import HeaderTilte from './HeaderTilte'
import { Button } from './ui/button'
import Link from 'next/link'

const FeaturedPosts =async () => {
  const data = await getFeaturedPosts()
  return (

        <div className='space-y-5'>
          <div className='flex justify-center items-end flex-col'>
          <HeaderTilte label='احدث المقالات' />
             <Link href={'/posts'}><Button variant={'link'} className='text-white sm:mr-[20px] mr-[10px] sm:px-10'>عرض المزيد</Button></Link> 
          </div>
          
      <div>
        <PostCardWrapper>
        {data?.map((el,i) => (
          <PostCard key={el.id} title={el.title} content={el.Content} date={el.updatedAt} id={el.id} image={el.image} />
        ))}
        </PostCardWrapper>
      </div>
      </div>

  )
}

export default FeaturedPosts