import { getAlltags } from '@/actions/getAlltags';
import { db } from '@/lib/db';
import { cn } from '@/lib/utils';
import { Cairo } from 'next/font/google';
import { Suspense } from 'react'
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { useUpdateTagModal } from '@/hooks/use-update-tag-modal';
import { useDeleteTagModal } from '@/hooks/use-delete-tag-modal';
import { useEditTagModal } from '@/hooks/use-edit-tag-modal';

const font = Cairo({
    subsets : ['arabic'] ,
    weight : '500'
})

const EditTag =async () => {
    const useUpdateTag = useUpdateTagModal()
    const DeleteTagModal= useDeleteTagModal()
    const tageditmodal = useEditTagModal()
    const data = await getAlltags()

    const handleonClickEdit = (el : any) => {
        useUpdateTag.onOpen()
        useUpdateTag.updateId(el.id)
        useUpdateTag.updateValue(el.name)
        tageditmodal.onClose()
    }
    const handleonClickDelete = (el :any) => {
        DeleteTagModal.onOpen()
        DeleteTagModal.updateId(el.id)
        tageditmodal.onClose()
  
    }

    
  return (
    <Suspense fallback={<p>Loading ...</p>}>
    <div className='flex flex-col justify-center items-start gap-4'>
        
      {data.map((el) => (
        <div className={cn('flex justify-between items-center w-full rounded-md py-2 px-3 bg-[#1a1a1a] text-white ' , font.className)} key={el.name}>
            <div>
            <h1>{el.name}</h1>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <FaPencil onClick={() => handleonClickEdit(el)} className='transition-opacity w-4 h-4 text-white cursor-pointer hover:opacity-70 ' />
                <FaRegTrashAlt onClick={() => handleonClickDelete(el)} className='transition-opacity  w-4 h-4 text-destructive cursor-pointer hover:opacity-70  '  />
            </div>
          
        </div>
      ))}
    </div>
    </Suspense>
  )
}

export default EditTag