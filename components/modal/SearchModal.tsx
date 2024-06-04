"use client";

import React, { useEffect, useState } from 'react'
import { Modal } from '../ui/Modal';
import {useSearchModal} from '@/hooks/use-seach-modal'
import Search from '../Search';
import useDebounce from '@/hooks/useDebouncy';
import {SearchPosts} from '@/actions/searchPosts'
const SearchModal = () => {
  const searchModal = useSearchModal()
  
  return (
    
    <div>
    <Modal title='البحث' description='' isOpen={searchModal.isOpen} onClose={searchModal.onClose} clsssName='rounded-md bg-background border-borderBottom text-white' >
        <Search />
    </Modal>  
    </div>
  )
}

export default SearchModal