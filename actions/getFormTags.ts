'use server';

import { db } from "@/lib/db";


export const getFormTags =async () => {
    const xprisma = db.$extends({
        result: {
          tags: {
            value: {
              // the dependencies
              needs: { id: true },
              compute(tags) {
                // the computation logic
                return tags.id
              },
            },
            label: {
              // the dependencies
              needs: { name: true },
              compute(tags) {
                // the computation logic
                return tags.name
              },
            },
          },
        },
      })
   const result =await xprisma.tags.findMany({
    select : {
        label :true ,
        value : true
    }
   });
   return result
}