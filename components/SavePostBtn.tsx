import React from 'react'
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Cairo } from 'next/font/google';
import { IfPostExist , SavePosts } from '@/actions/SavedPosts';
import SavePost from './SavePost';
interface SavePostBtnProps {
    id : string
}

const font = Cairo({
    weight : ['600'] ,
    subsets : ['arabic']
})




const SavePostBtn =async ({id} : SavePostBtnProps) => {
  const ifExist = await IfPostExist({postId : id})

 

  return (
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div>

       
        <SavePost id={id} ifExist={ifExist} />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        {ifExist ?        <p className={font.className}> الغاء حفظ المقال</p>: <p className={font.className}>احفظ المقال</p>}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  )
}

export default SavePostBtn