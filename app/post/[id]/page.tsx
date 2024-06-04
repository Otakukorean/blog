import { IfPostExist } from '@/actions/SavedPosts'
import { getPostById } from '@/actions/getPostById'
import PostPage from '@/components/PostPage'
import { PostProps } from '@/types/PostTypes'
import Image from 'next/image'
import React , {Suspense} from 'react'

interface PostPageProps {
    params : {id : string}
}

const page =async ({params} : PostPageProps) => {
    const data =await getPostById({id : params.id}) as any

    
  return (
    <div>
     <PostPage PostTags={data?.PostTags} content={data?.Content} id={data?.id} image={data?.image} title={data?.title} date={''} />
    </div>
  )
}

export default page