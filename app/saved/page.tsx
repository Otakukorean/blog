import { SavedPosts } from '@/actions/get-saved-posts'
import HeaderTilte from '@/components/HeaderTilte'
import PostCard from '@/components/PostCard'
import PostCardWrapper from '@/components/PostCardWrapper'
import React from 'react'
export type PageProps = {
	params ?: { [key: string]: string | string[] | undefined };
	searchParams?: { [key: string]: string | string[] | undefined };
};


const page =async (props: PageProps) => {
  const pageNumber = Number(props?.searchParams?.page || 1)
  const take = 3;
  const skip = (pageNumber -1) * take;
  const {data,metadata} = await SavedPosts({skip ,take });
  
  return (
    <div>
      <HeaderTilte label='المقالات' />
      <PostCardWrapper>
        {data?.map((post) => (
          <PostCard content={post.post.Content} date={post.post.createdAt} id={post.post.id} image={post.post.image} title={post.post.title}  key={post.post.id} />
        ))}
      </PostCardWrapper>
    </div>
  )
}

export default page