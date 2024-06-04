import UpdateTagProvider from '@/providers/Update-tag-provider'
import { CreateTagProvider } from '@/providers/create-tag-modal'
import DeleteTagProvider from '@/providers/delete-tag-provider'
import { EditTagProvider } from '@/providers/edit-tag-modal'
import { ModalProvider } from '@/providers/modal-provider'
import React from 'react'
import SearchModal from './SearchModal'

const ModalContainer = () => {
  return (
    <div>
        <ModalProvider/>
        <CreateTagProvider />
        <EditTagProvider/>
        <UpdateTagProvider/>
        <DeleteTagProvider/>
        <SearchModal />
    </div>
  )
}

export default ModalContainer