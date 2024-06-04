'use server';

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
interface UpdateTagProps {
    id : string ;
    value : string
}



export const UpdateTag =async ({id, value} : UpdateTagProps) => {
    const user =await currentUser()
    if(user?.role !== 'ADMIN'){
        return null
    }

    if(!id || !value) {
        return {error : "Please Fill All The Fields !"}
    }

    await db.tags.update({
        where  :{
            id : id
        } ,
        data : {
            name : value
        }        
    })

    return {success :'The Tag Has Been Updated Successfuly!'}
   
}

