"use client";

import EditTag from '@/components/EditTag';
import CreateTagModal from '@/components/modal/Create-tag-modal'
import EditTagModal from '@/components/modal/edit-tag-modal';
import { useEffect , useState } from "react";


export const EditTagProvider = () => {
     const [isMounted,SetIsMounted] = useState(false) ;
     useEffect(() => {
          SetIsMounted(true)
     },[])

     if(!isMounted) {
          return null
     }

     return (
          <>
          <EditTagModal/>
          </>
     )
}

