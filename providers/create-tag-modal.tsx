"use client";

import CreateTagModal from '@/components/modal/Create-tag-modal'
import { useEffect , useState } from "react";


export const CreateTagProvider = () => {
     const [isMounted,SetIsMounted] = useState(false) ;
     useEffect(() => {
          SetIsMounted(true)
     },[])

     if(!isMounted) {
          return null
     }

     return (
          <>
          <CreateTagModal/>
          </>
     )
}

