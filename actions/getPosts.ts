'use server';
import {db} from '@/lib/db'
import { revalidatePath } from 'next/cache';

export const GetPosts = async ({take = 3 , skip = 0} : {take : number , skip : number}) => {
    const result = await db.post.findMany({
            take,skip,orderBy : {
                createdAt : 'desc'
            } ,
            include : {
                PostTags : {
                    include : {
                        tag : {
                            select : {
                                id : true ,
                                name: true
                            }
                        }
                    }
                }
            }
    })
    const total= await db.post.count();
    revalidatePath('/posts')
    return  {
        data : result ,
        metadata : {
            hasNextPage : skip + take < total ,
            totalPages : Math.ceil(total / take)
        }
    }
}