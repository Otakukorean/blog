'use client';
import React, { Suspense } from 'react'
import { Modal } from '../ui/Modal';
import { useEditTagModal } from '@/hooks/use-edit-tag-modal';
import EditTag from '../EditTag';

const EditTagModal = () => {

  const useEditTag = useEditTagModal()
  return (
    <Suspense>
    <div>
        <Modal title='التصنيفات' description='جميع التصنيفات' isOpen={useEditTag.isOpen} onClose={useEditTag.onClose} clsssName='rounded-md bg-background border-borderBottom text-white' >
        <EditTag/>
        </Modal>
    </div>
    </Suspense>
  )
}

export default EditTagModal