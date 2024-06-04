"use client";

import LoginModal from '@/components/modal/auth-modal'
import { useEffect , useState } from "react";


export const ModalProvider = () => {
     const [isMounted,SetIsMounted] = useState(false) ;
     useEffect(() => {
          SetIsMounted(true)
     },[])

     if(!isMounted) {
          return null
     }

     return (
          <>
          <LoginModal/>
          </>
     )
}

