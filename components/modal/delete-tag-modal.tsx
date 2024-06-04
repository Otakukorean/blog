'use client';
import React from 'react'
import { Modal } from '../ui/Modal';
import { useDeleteTagModal } from '@/hooks/use-delete-tag-modal';
import DeleteModal from '../DeleteModal';
import Deletetag from '@/actions/delete-tag';

const DeleteTagModal = () => {
    const deletemodal = useDeleteTagModal()
  return (
    <Modal title='حذف نصميف' description='' isOpen={deletemodal.isOpen} onClose={deletemodal.onClose} clsssName='rounded-md bg-background border-borderBottom text-white' >
        <DeleteModal id={deletemodal.id} label='هل انت متاكد بانك تريد حذف التصنيف ؟' Submit={Deletetag} type='TAG' />
    </Modal>
  )
}

export default DeleteTagModal