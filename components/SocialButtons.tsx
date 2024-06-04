import React from 'react'
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Button } from './ui/button';

const SocialButtons = () => {
    const searchParams = useSearchParams();  
    const onClick = (provider: "google" | "github") => {
      signIn(provider);
    }
  
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full bg-[#F8F4EC]"
        variant={'outline'}
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full hover:bg-background/70"
        variant="outline"
        onClick={() => onClick("github")}
      >
        <FaGithub className="h-5 w-5" color='#fff' />
      </Button>
    </div>
  )
}

export default SocialButtons