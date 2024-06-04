'use server';

import { UserRole } from "@prisma/client";
import { currentRole , currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface CreatePostProps {
    title : string ;
    content : string ;
    image : string;
    tags : {
        label : string ;
        value : string ;
    }[]
}

export const createPost =async ({title ,content , image ,tags} : CreatePostProps) => {

    const user = await currentUser()
    if(user?.role !== 'ADMIN') {
        return {error : 'Forbidden Server Action!'}
    }

    if(!title || content.length < 10 || !image) {
        return {error : 'All The fields Required !'}
    }

    await db.post.create({
        data :{
            title : title ,
            Content: content ,
            image : image,
            userId :user.id as any 
        }
    }).then(async (res) => {
             tags.map(async (el) => {
                await db.postTags.create({
                    data :{
                        postId : res.id ,
                        tagId : el.value
                    }
                })
            })
    })

    revalidatePath('/')

    return {success : 'Post Created Successfuly'}
}

