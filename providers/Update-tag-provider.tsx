'use client';
import UpdateTagModal from '@/components/modal/Update-tag-modal';
import React, { useEffect, useState } from 'react'

const UpdateTagProvider = () => {
    const [isMounted,SetIsMounted] = useState(false) ;
    useEffect(() => {
         SetIsMounted(true)
    },[])

    if(!isMounted) {
         return null
    }
  return (
    <UpdateTagModal/>
  )
}

export default UpdateTagProvider