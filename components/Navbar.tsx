"use client";
import React, { useEffect, useRef, useState  } from 'react'
import { Button } from './ui/button';
import { Cairo } from 'next/font/google'; 
import { cn } from '@/lib/utils';
import { FaRegPenToSquare , FaTag  } from "react-icons/fa6";
import { Input } from './ui/input';
import { CiSearch } from "react-icons/ci";
import { useWindowWidth , useWindowHeight } from '@react-hook/window-size';
import { useLoginModal } from '@/hooks/use-login-modal';
import { useCurrentUser } from '@/hooks/use-current-user';
import { UserButton } from './user-button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useSearchModal } from '@/hooks/use-seach-modal';
import { TagsButton } from './tags-button';

const font = Cairo({
    weight : ['500'] ,
    subsets : ['arabic']
})


const Navbar = () => {
    const [isMounted,SetIsMounted] = useState(false) ;
    const searchModal = useSearchModal()

  const width = useWindowWidth()
  const loginmodal = useLoginModal()
  const user = useCurrentUser()
  const router = useRouter()

    useEffect(() => {
        SetIsMounted(true)
   },[])

   if(!isMounted) {
    return null
}

 
  return (
    <nav suppressHydrationWarning className={`flex   flex-row items-center justify-between w-full  fixed bg-background top-0 z-[99999] border-b-[3px] border-b-borderBottom  py-[0.5rem] px-[7%]`}>
        <div>
            <h1 onClick={() => router.push('/')} className='text-white text-xl font-bold  first-letter:text-[#39FCF2] first-letter:pr-[1px] first-letter:text-2xl cursor-pointer'>Blogna</h1>
        </div>
        <div className='flex items-center justify-center gap-4 '>
        
            {
               width > 600 ? (
                    <Button onClick={() => searchModal.onOpen()} style={{direction:'rtl'}} className='inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  border-input hover:bg-borderGray hover:text-white/80 px-2 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-borderGray text-sm font-normal text-muted-foreground shadow-none pr-12 sm:w-40 '>
                    <span className={cn(font.className)}>ابحث عن مقال</span>
                </Button>
                ) : (
                    <CiSearch onClick={() => searchModal.onOpen()} className='transition-all ease text-white w-6 h-6 cursor-pointer hover:text-white/75'/>
                )
            }
            {user?.role === 'ADMIN' &&<Link href={'/write'}><FaRegPenToSquare  className='transition-all ease text-white w-5 h-5 cursor-pointer hover:text-white/75' /></Link> }
            {user?.role === 'ADMIN' &&<TagsButton /> }
            {!user &&             <Button variant={'white'} className={cn(font.className)} onClick={() => loginmodal.onOpen()}>تسجيل الدخول</Button>}       
            {user && (
                <UserButton  />
            )}
        </div>
    </nav>
  )
}

export default Navbar