'use server';
import { currentRole , currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";


export const getSavedPosts = async () => {
    const user = await currentUser();

    if(!user){
        return null
    }

  const data=  await db.savedPosts.findMany({
        where :{
            userId : user.id
        }
    })

    return data

}
export const SavePosts = async ({postId} : {postId : string} ) => {
    const user = await currentUser();

    if(!user){
        return null
    }

    if(!postId) {
        return {error : 'You Should Provide A Post Id!'}
    }

    const ifExist = await db.savedPosts.findFirst({
        where : {
            userId : user.id!,
            postId : postId
        }
    })

    if(ifExist){
      const data =  await db.savedPosts.delete({
            where : {
                id : ifExist.id ,
                userId : user.id ,
                postId : postId
            }
        })
        revalidatePath(`/post/[id]`)
    return data
        }

  const data=  await db.savedPosts.create({
        data :{
            userId : user.id! ,
            postId : postId
        }
    })

revalidatePath(`/post/[id]`)

    return data

}
export const IfPostExist = async ({postId} : {postId : string} ) => {
    const user = await currentUser();

    if(!user){
        return null
    }

    if(!postId) {
        return {error : 'You Should Provide A Post Id!'}
    }

    return db.savedPosts.findFirst({
        where   : {
            userId : user.id ,
            postId : postId
        }
    })
}

