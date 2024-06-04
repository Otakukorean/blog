import React from 'react'
import { Cairo } from 'next/font/google'; 
import { cn } from '@/lib/utils';

interface HeaderTilteProps {
    label : string;
    start ?: boolean
}
const font = Cairo({
    weight : ['600'] ,
    subsets : ['arabic']
})

const HeaderTilte = ({label,start = false} : HeaderTilteProps) => {
  return (
    <div style={{direction:"rtl"}} className={`flex items-center  gap-2 ${!start && 'md:px-3 lg:px-10 mr-[10px] mt-12'}  `} >
        <div className='w-1 h-10 bg-[#39FCF2]'></div>
        <h1 className={cn( "text-2xl  text-white",font.className)} >{label}</h1>
    </div>
  )
}

export default HeaderTilte