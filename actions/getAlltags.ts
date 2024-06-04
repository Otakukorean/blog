'use server';

import { db } from "@/lib/db";


export const getAlltags =async () => {
    
    const data = await db.tags.findMany()
    
    return data

}

  