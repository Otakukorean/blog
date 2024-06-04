'use server';

import { db } from "@/lib/db";

interface PageProps {
    id: string;
}

export const getPostById =async ({id} : PageProps) => {
    

    return db.post.findUnique({
        where : {
            id : id
        } ,
        include :{
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


}

