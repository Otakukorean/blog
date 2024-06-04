'use server';

import { db } from "@/lib/db";



export const getFeaturedPosts =async () => {
  const data = await db.post.findMany({
    orderBy: {
        createdAt : 'desc'
    }
  })


  return data
}

