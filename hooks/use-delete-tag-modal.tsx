"use client"
import { create } from "zustand";

interface useDeleteTagStore {
     isOpen : boolean ;
     onOpen : () => void ;
     onClose : () => void ;
     id :  string ;
     updateId : (id : string) => void ;
};


export const useDeleteTagModal = create<useDeleteTagStore>((set) => ({
     isOpen :  false ,
     onOpen : () => set({isOpen : true}) ,
     onClose : () => set({isOpen : false}) ,
     id : '' ,
     updateId: (id) => set(() => ({ id: id })) ,

}))