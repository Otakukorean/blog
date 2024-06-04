import React from 'react'
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import HeaderTilte from './HeaderTilte';
import { getFeaturedPosts } from '@/actions/getFeaturedPosts';




const PinnedPosts = async () => {
  const posts = await getFeaturedPosts()
  return (
    <div className='space-y-4'>
      <HeaderTilte label='المقالات المثبتة' />
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[25rem]">
    {posts.slice(0,6).map((post, i) => (
      <BentoGridItem
        key={i}
        title={post.title}
        description={post.Content}
        image={post.image}
        className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
        id={post.id}
      />
    ))}
  </BentoGrid>
  </div>
  )
}

export default PinnedPosts