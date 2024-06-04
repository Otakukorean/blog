import { TagPosts } from '@/actions/get-posts-bytag'
import HeaderTilte from '@/components/HeaderTilte'
import PostCard from '@/components/PostCard';
import PostCardWrapper from '@/components/PostCardWrapper';
import React from 'react'

const page =async ({

    params : {tagname}

} : {params : {tagname : string}}) => {
    const data = await TagPosts(tagname);
    console.log(data);
    
  return (
    <div>
      <HeaderTilte label={decodeURIComponent(tagname)} />
      <PostCardWrapper>
        {
            data?.PostTags.map((post) => (
                <PostCard content={post.post.Content} date={post.post.createdAt} id={post.post.id} image={post.post.image} title={post.post.title} key={post.post.id} />
            ))
        }
      </PostCardWrapper>
    </div>
  )
}

export default page