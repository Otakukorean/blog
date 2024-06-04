"use client";

import React from 'react'
import { Modal } from '../ui/Modal';
import { useLoginModal } from '@/hooks/use-login-modal';
import { Button } from '../ui/button';
import SocialButtons from '../SocialButtons';
import { useSearchParams } from 'next/navigation';

const AuthModal = () => {
    const loginmodal = useLoginModal()
    
  return (
    <div className=''>
        <Modal  title='تسجيل دخول' description='قم بتسجيل الدخول' isOpen={loginmodal.isOpen} onClose={loginmodal.onClose} > 

        <SocialButtons />
        </Modal>
   
    </div>
  )
}

export default AuthModal