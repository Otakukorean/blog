'use server';

import { db } from "@/lib/db";


export const TagPosts = async (tag : string) => {
    const result = db.tags.findFirst({
        where :{
            name : decodeURIComponent(tag)
        } ,
        include : {
            PostTags : {
                include : {
                    post : {
                        include :{
                            PostTags : true
                        }
                    }
                }
            }
        }
    })
    return result;
}