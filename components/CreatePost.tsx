"use client"
import Editor from '@/components/Editor'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UseCurrentRole }  from '@/hooks/use-current-role'
import { cn } from '@/lib/utils'
import { Cairo } from 'next/font/google'
import { redirect } from 'next/navigation'
import React, { useEffect, useState ,useTransition} from 'react'
import {  CldUploadButton } from 'next-cloudinary';
import Image from 'next/image'
import { createPost } from '@/actions/createPost'
import Select from 'react-select'
import { getFormTags } from '@/actions/getFormTags'
import { useRouter } from 'next/navigation'


const font= Cairo({
  subsets : ['arabic'] ,
  weight : '800'
})

// eslint-disable-next-line @next/next/no-async-client-component
const CreatePost = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Content , SetContent] = useState(`
  
  <h1 class="bn-inline-content">Boku dake Gu</h1><figure><img src="https://images3.alphacoders.com/132/thumb-1920-1322308.jpeg"></figure><p class="bn-inline-content"></p>
  `)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [imageUrl,SetImageUrl] = useState<string>("")
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isDisabled , SetIsDisable] = useState<boolean>(false)
  // eslint-disable-next-line react-hooks/rules-of-hooks
   const [title , SetTilte] = useState<string>('')
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error , SetError] = useState<string>('')
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data , Setdata] = useState<any>([])
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selected , Setselected] = useState<{label : string , value : string}[]>([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isPending, startTransition] = useTransition();
    const router = useRouter()

    const role = UseCurrentRole()

    if(role !== 'ADMIN') {
        redirect('/')
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if(!imageUrl || !title || Content.length < 10) {
        SetIsDisable(true)
      }
      else {
        SetIsDisable(false)

      }

      
    },[Content , imageUrl , title])
    useEffect(() => {
      const fetchData = async () =>{
        await getFormTags().then((res) => {
          Setdata(res)
        })
      }
      fetchData()
    },[])
    const handleChange = (selectedOption :any) => {
      Setselected(selectedOption);
    };

    const Submit =async () => {
      startTransition(() => {
        createPost({
          title : title ,
          content : Content ,
          image : imageUrl ,
          tags  : selected
        }).then((data : any) => {
          if(data.error){
           return SetError(data.error)
          }
          
          
        }).finally(() => {
          router.push("/")
        })
      })
    }


  return (
    <div className='px-[7%] pt-5  space-y-20'>

   
          <div className='text-center'>
              <h1 className={cn('text-3xl text-white' , font.className)}> 🩹 انشاء منشور   </h1>
          </div>
          {
            imageUrl && (
              <div>
              <Image src={imageUrl} className='w-full object-cover h-[60vh] rounded-md' height={1000} width={10000} alt='image' />
              
            </div>
            )
          }
    

          <div style={{direction:'rtl'}} className='flex  items-center justify-center gap-4 flex-wrap'>
            <Input style={{direction:'rtl'}} disabled={isPending} onChange={(event) => SetTilte(event.target.value)} placeholder='Title' className={cn('bg-transparent border-borderBottom   p-5 text-2xl text-white placeholder:text-white/60 placeholder:text-2xl ',font.className)} />
            <Select className='w-[50%]' isMulti options={data} onChange={handleChange} />
          
          <Button disabled={isPending}>  <CldUploadButton className=''    uploadPreset="z1w6dtxd" onUpload={(result :any) => {
          SetImageUrl(result?.info?.secure_url)
    
          }} /></Button>
          </div>
      <div>
      <Editor  initilaContent={Content} SetContent={SetContent}  />
      </div>
 
      <div className='text-center'>
        <Button className={cn(font.className)} onClick={Submit} variant={'default'} disabled={isDisabled || isPending} >نشر</Button>
      </div>
          {error && (
            <div className='text-center'>
            <span className={cn('text-destructive text-2xl',font.className)}>{error}</span>
          </div>
          )}
   
    </div>
  )
}

export default CreatePost