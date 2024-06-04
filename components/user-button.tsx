"use client";

import { FaUser } from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons"
import { FaBookmark } from 'react-icons/fa6';

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
import Link from "next/link";


const font = Cairo({
    subsets :['arabic'] ,
    weight : '600'
})
export const UserButton = () => {
  const user = useCurrentUser();


  return (
    <DropdownMenu >
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 z-[9999999]" align="end">
        <LogoutButton>
          <DropdownMenuItem className={cn( 'cursor-pointer',font.className)}>
            <ExitIcon className={cn("h-4 w-4 mr-2")} />
            تسجيل خروج
          </DropdownMenuItem>
        </LogoutButton>
        <DropdownMenuItem className={cn( 'cursor-pointer ',font.className)}>
          <Link href={'/saved'} className="flex items-center justify-center gap-3">
          <FaBookmark color='#face15' /> 
            الحفظ
          </Link>
    
          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
