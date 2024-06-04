'use server';

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

interface CreateTagProps {
    name : string
}
export const createTag =async ({name} : CreateTagProps) => {
    const user = await currentUser()

    if(user?.role !== 'ADMIN'){
        return {error : 'Your Not Allowed To Do That !'}
    }

    if(!name){
        return {error : 'Name Is Required !'}

    }

    const checkIfexist = await db.tags.findFirst({
        where :{
            name : name
        }
    })

    if(checkIfexist){
        return {error : 'The Tag is alredy Exist!'}
    }

    await db.tags.create({
        data : {
            name : name
        }
    })

    return {success : "Tag Created Successfully!"}

}
