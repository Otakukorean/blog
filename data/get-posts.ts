"use client"
import {getFeaturedPosts} from "@/actions/getFeaturedPosts";
import { useQuery } from "@tanstack/react-query";

export  function UseGetFeaturedPosts() {
 return useQuery({
    queryFn : async () => getFeaturedPosts() ,
    queryKey : ['posts']
 })
}