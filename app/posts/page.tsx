import { GetPosts } from '@/actions/getPosts'
import HeaderTilte from '@/components/HeaderTilte'
import Pagination from '@/components/Pagination'
import PostCard from '@/components/PostCard'
import PostCardWrapper from '@/components/PostCardWrapper'
import React from 'react'
export type PageProps = {
	params: { [key: string]: string | string[] | undefined };
	searchParams?: { [key: string]: string | string[] | undefined };
};


const page =async (props: PageProps) => {
  const pageNumber = Number(props?.searchParams?.page || 1)
  const take = 3;
  const skip = (pageNumber -1) * take;
  const {data,metadata} = await GetPosts({skip ,take });
  
  return (
    <div>
      <HeaderTilte label='المقالات' />
      <PostCardWrapper>
        {data.map((post) => (
          <PostCard content={post.Content} date={post.createdAt} id={post.id} image={post.image} title={post.title} PostTags={post.PostTags} key={post.id} />
        ))}
      </PostCardWrapper>
      <footer>
        <Pagination {...props.searchParams} {...metadata}  />
      </footer>
    </div>
  )
}

export default page