"use client";

import { FaUser } from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons"
import {FaTag  } from "react-icons/fa6";
import { IoCreateOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/logoutButton";
import { Cairo } from "next/font/google";
import { cn } from "@/lib/utils";
import { useCreateTagModal } from "@/hooks/use-create-tag-modal";
import { useEditTagModal } from "@/hooks/use-edit-tag-modal";


const font = Cairo({
    subsets :['arabic'] ,
    weight : '600'
})
export const TagsButton = () => {
    const createtagModal = useCreateTagModal()
    const edittags =useEditTagModal()

  return (
    <DropdownMenu >
      <DropdownMenuTrigger>
      <FaTag   className='transition-all ease text-white w-5 h-5 cursor-pointer hover:text-white/75' />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 z-[9999999]" align="end">
     
          <DropdownMenuItem onClick={() => createtagModal.onOpen()} className={cn( 'cursor-pointer gap-3',font.className)}>
              
                انشاء تصنيف
                <HiPlus className="w-4 h-4" />
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => edittags.onOpen()} className={cn( 'cursor-pointer gap-3',font.className)}>
               
                 تعديل التصنيفات
                 <FaPen size={5} className="w-3 h-3"  />
          </DropdownMenuItem>
     
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
