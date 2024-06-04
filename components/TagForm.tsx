'use client';
import React, { useEffect, useState ,useTransition } from 'react'
import { Button } from './ui/button';
import { useCreateTagModal } from '@/hooks/use-create-tag-modal';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { Cairo } from 'next/font/google';
import { cn } from '@/lib/utils';


interface TagFormProps {
    id ?:string;
    value : string;
    Submit({}):Promise<any> ;

}

const font = Cairo({
    subsets :['arabic'] ,
    weight : '500'
})

const TagForm = ({id , value , Submit} : TagFormProps) => {
  const [input,SetInput] = useState<string>('' || value)
  const [isDisabled , Setisdisabled] = useState<boolean>(false)
  const [isPending, startTransition] = useTransition();
    const TagModal = useCreateTagModal()

  const onSubmit = () => {
    startTransition(() => {
    if(!id) { 
        Submit({name:  input}).then((res) => {
            if(res.error) {
             toast.error(res.error)
            }
            else {
              toast.success(res.success)   
              SetInput('') 
            }
            
          })
    }
    else {
        Submit({id : id,value:  input}).then((res) => {
            if(res.error) {
             toast.error(res.error)
            }
            else {
              toast.success(res.success)   
              TagModal.onClose()
            }
          })  
    }
    })}

  useEffect(() => {

 

    
    if(!input){
      Setisdisabled(true)
    }
    else if (value === input) {
        Setisdisabled(true)

    }
    else {
      Setisdisabled(false)
    }

    
  },[input,id,value])

  

  return (
    <div>
            <div className='mb-3'>
              <Input style={{direction:'rtl'}} disabled={isPending} value={input} onChange={(event) => SetInput(event.target.value)} className={cn('text-white  bg-transparent border-borderBottom border focus:border-2' , font.className)}placeholder='الاسم' />
            </div>
            <div className='text-center'>
              <Button variant={'white'} onClick={onSubmit}  disabled={isDisabled || isPending} >
                {id ? 'تعديل': 'انشاء'}

              </Button>
            </div>

    </div>
  )
}

export default TagForm