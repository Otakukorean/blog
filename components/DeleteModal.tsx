import React, { useEffect, useState ,useTransition } from 'react'
import { Button } from './ui/button';
import { Cairo } from 'next/font/google';
import { cn } from '@/lib/utils';
import { useDeleteTagModal } from '@/hooks/use-delete-tag-modal';
import { toast } from 'sonner';

interface DeleteProps {
    id :string;
    label : string;
    Submit({}):Promise<any> ;
    type : 'TAG' | 'POST'

}

const DeleteModal = ({Submit ,label ,id,type}: DeleteProps) => {
    const [isPending, startTransition] = useTransition();
    const deleteTagmodal = useDeleteTagModal()


    const onSubmit = () => {
        startTransition(() => {
         
                Submit({id: id }).then((res) => {
                    if(res.error) {
                     toast.error(res.error)
                    }
                    else {
                      toast.success(res.success)   
                    }
                    
                  })
                  .finally(() => {
                    if(type === 'TAG'){
                        deleteTagmodal.onClose()
                    }
                  })
            
            })}
        
    
  return (
    <div>
         <div className='text-center mb-4'>
            <h2>{label}</h2>
            </div>     

        <div className='flex justify-center items-center gap-4'>
            <Button disabled={isPending} onClick={onSubmit} variant={'destructive'} >حذف</Button>
            <Button variant={'white'} disabled={isPending} onClick={() => deleteTagmodal.onClose()} >الغاء</Button>
        </div>
    </div>
  )
}

export default DeleteModal