"use client"
import React, { useEffect, useState } from 'react'
import {PostProps} from '@/types/PostTypes'
import Image from 'next/image'
import { Poppins ,Cairo} from 'next/font/google'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { formatDistance, subDays } from 'date-fns'
import { ar } from 'date-fns/locale'
import Link from 'next/link'


const CairoFont= Cairo({
    weight : ['700' , '300'] ,
    subsets : ['arabic']
})

const PostCard = ({date , id ,image ,title,content} : PostProps) => {
    const [isMounted,SetIsMounted] = useState(false) ;
    useEffect(() => {
        SetIsMounted(true)
   },[])

   if(!isMounted) {
    return null
}
  return (
    <div className='transition cursor-pointer flex justify-center items-center flex-col gap-6  p-5 max-w-96 rounded-sm border-borderBottom border-2 hover:border-[#39FCF2]/60 max-h-[500px]'>
        {/* Image */}
        <div className='pickgradient hover:scale-[1.01] transition-all ease'>
        <Image className='h-[250px] w-[40rem] rounded-sm object-cover' src={image} width={1000} height={1000} alt='anime' />
        </div>

        {/* Text */}
        <div className='flex flex-col justify-center items-center space-y-5 '>
            {/* Date */}
            <div>
                <p className={cn('text-sm font-light text-[#ffffffc2]', CairoFont.className)}>{
                    formatDistance(new Date(`${date}`) , new Date() , {addSuffix : true ,  locale : ar})
                }</p>
            </div>
            {/* Tilte */}
            <div>
                <h1 style={{direction : 'rtl'}} className={cn('text-white font-bold  text-3xl ',CairoFont.className)}>{title}</h1>
            </div>
            {/* Description */}
            <div>
            <p dangerouslySetInnerHTML={{__html : content}} className={cn('text-sm font-light text-wrap max-w-[500px] line-clamp-2 text-[#ffffffc2] ContentWrapper', CairoFont.className)}>
                          
            </p>

            </div>
            {/* Read More Button */}

        </div>

        <div >
                <Link href={`/post/${id}`}>
                <Button variant={'white'} className={cn('text-center font-bold ')}>اقرا المزيد </Button>
                </Link>
            </div>
    </div>
  )
}

export default PostCard