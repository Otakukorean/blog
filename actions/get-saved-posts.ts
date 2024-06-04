"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";


export const SavedPosts = async ({take = 3 , skip = 0} : {take : number , skip : number}) => {
    const user = await currentUser();

    if(!user){
        return {error :"User is Not Found!"}
    }
    const result = await db.savedPosts.findMany({
        where :{
            userId : user.id
        } ,
        take,
        skip ,
        include :{
            post : true
        }
    })
    const total= await db.savedPosts.count({
        where :{
            userId : user.id
        }
    });

    revalidatePath('/saved')

    return  {
        data : result ,
        metadata : {
            hasNextPage : skip + take < total ,
            totalPages : Math.ceil(total / take)
        }
    }


}