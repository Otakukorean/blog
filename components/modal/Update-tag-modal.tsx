'use client'
import { useUpdateTagModal } from '@/hooks/use-update-tag-modal'
import React from 'react'
import { Modal } from '../ui/Modal'
import TagForm from '../TagForm'
import { UpdateTag } from '@/actions/update-tag'

const UpdateTagModal = () => {
    const updateTag = useUpdateTagModal()
  return (
    <div>
        <Modal title='التصنيفات' description='جميع التصنيفات' isOpen={updateTag.isOpen} onClose={updateTag.onClose} clsssName='rounded-md bg-background border-borderBottom text-white' >
            <TagForm id={updateTag.id} value={updateTag.value} Submit={UpdateTag}   />
        </Modal>
    </div>  
  )
}

export default UpdateTagModal