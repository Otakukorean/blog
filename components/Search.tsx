"use client";

import React, { useEffect, useState } from 'react'
import { Input } from './ui/input';
import { Loader2, Search as SearchIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import useDebounce from '@/hooks/useDebouncy';
import { SearchPosts } from '@/actions/searchPosts';
import Link from 'next/link';
import { useSearchModal } from '@/hooks/use-seach-modal';



const Search = () => {
  const searchModal = useSearchModal()
  const [search,setSearch] = useState<string >('')
  const [notices,setNotices] = useState<any>([])
  const [loading , setLoading] = useState(false)


    const debouncedSearch = useDebounce(search , 500)
    useEffect(() => {
      // search the api
      async function fetchData() {
          setLoading(true) 
          await SearchPosts(search).then((res) => {
              setNotices(res)
              setLoading(false) 
            })
          }
          if(debouncedSearch) fetchData()
    },[debouncedSearch])
    const clearInput = () => {
      setNotices([]);
      setSearch("");
     };
  return (
    <div className='flex justify-center items-start flex-col w-full h-full gap-4'>
        <div className='w-full relative'>
                <Input placeholder='Search...' value={search} className='border border-borderBottom w-full' onChange={(e) => setSearch(e.target.value)} />
                {
                  search.length === 0 ? (
                    <SearchIcon className='text-white/40 absolute right-2 top-2' />

                  ) :
                  <XIcon onClick={clearInput} className='text-white/40 absolute right-2 top-2 cursor-pointer'  />
                }
        </div>
        <div className='w-full h-full overflow-y-auto'>
          {
            notices.length > 0 && (
              <ul className='bg-borderBottom w-full rounded-md space-y-2  max-h-[200px] overflow-y-scroll'>
                {
                  notices.map((post : any) => (
                    <li key={post.id} onClick={() => searchModal.onClose()}>
                      <Link href={`/post/${post.id}`} className='flex justify-start items-center  gap-4 p-2'>
                    <Image src={post.image} className='w-[40px] h-[60px] rounded-md object-cover' height={1000} width={10000} alt='' />
                    <span>{post.title}</span>
                    </Link>
                  </li>
                  ))
                }
           
    
    
            </ul>  
            )
          }
 
        </div>
   
    </div>
  )
}

export default Search