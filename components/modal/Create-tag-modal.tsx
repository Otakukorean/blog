'use client';
import React from 'react'
import { Modal } from '../ui/Modal';
import { useCreateTagModal } from '@/hooks/use-create-tag-modal';
import { createTag } from '@/actions/createTag';
import TagForm from '../TagForm';
import { useSearchParams } from 'next/navigation';

const CreateTagModal = () => {
  const searchParams = useSearchParams()
  const useCreateTag = useCreateTagModal()
  console.log(searchParams.get('hello'));
  
  return (
    <div>
        <Modal title='انشاء تصنيف' description='' isOpen={useCreateTag.isOpen} onClose={useCreateTag.onClose} clsssName='rounded-md bg-background border-borderBottom text-white' >
    
        <TagForm value='' Submit={createTag} />
        </Modal>
    </div>
  )
}

export default CreateTagModal