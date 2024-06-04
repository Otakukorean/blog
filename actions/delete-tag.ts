'use server';

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

interface DeleteTag {
    id : string
}

const Deletetag =async ({id} : DeleteTag) => {
    const user = await currentUser()
    if(user?.role !== 'ADMIN') {
        return {error : 'You Are Not Alloed To Do That'}
    }

    await db.tags.delete({
        where :{
            id:id
        }
    })

    return {success :"The Tag Has Been Deleted Successfuly!"}
}

export default Deletetag