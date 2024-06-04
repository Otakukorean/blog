'use server';
import { db } from "@/lib/db";


export const SearchPosts = async (text : string) =>{ 
      const result =  await db.post.findMany({
            where :{
                OR : [
                    {
                        title : {
                            contains : text
                        }
                    } ,{
                        Content : {
                            contains : text
                        }
                    }   
                ]
            }
        })
      return result;
}