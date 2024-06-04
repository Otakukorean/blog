import Image from 'next/image'
import React from 'react'

import {PostProps} from '@/types/PostTypes'
import HeaderTilte from './HeaderTilte'
import { Cairo } from 'next/font/google'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Badge } from './ui/badge'
import SavePostBtn from './SavePostBtn';

const font = Cairo({
  subsets : ['arabic']
})


const PostPage = ({content , image , title , id , PostTags} : PostProps) => {
  return (
    <div className='sm:px-[15%] md:px-[20%] px-[3%] pt-3 pb-2'>
    <div className='  border-borderBottom border-4 space-y-6  p-4 sm:p-1'>
          <div className='flex justify-between items-center mt-12 mx-3'>
            <SavePostBtn id={id} />
            <HeaderTilte start label={title}  />
        </div>
        <div className='pickgradient'>
                <Image className='object-cover sm:h-[40vh] h-[20vh] rounded-md ' src={image} width={10000} height={1000} alt={title} />
        </div>

        <div className={cn('Content-wrapper text-white mx-auto text-center leading-10	' ,font.className)}dangerouslySetInnerHTML={{__html : content}} >
                
        </div>

        <div className='text-center flex justify-center items-center gap-2 p-3' style={{direction:'rtl'}}>
          <h3 className={cn('text-white ',font.className)}>  التصنيفات :</h3>
          <div className='flex gap-2 flex-wrap'>
          {PostTags?.map((el , index) => (
            <Link href={`/tag/${el.tag.name}`} key={index}>
            <Badge variant={'secondary'} className={cn('text-md',font.className)}>{el.tag.name}</Badge>
            </Link>
          ))}
          </div>
      
          
        </div>
    </div>
    </div>
  )
}

export default PostPage