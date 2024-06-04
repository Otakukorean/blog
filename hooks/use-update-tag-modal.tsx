"use client"
import { create } from "zustand";

interface useUpdateTagStore {
     isOpen : boolean ;
     onOpen : () => void ;
     onClose : () => void ;
     id : string ;
     updateId : (id : string) => void ;
     value : string ;
     updateValue : (value : string) => void
    

};


export const useUpdateTagModal = create<useUpdateTagStore>((set) => ({
     isOpen :  false ,
     onOpen : () => set({isOpen : true}) ,
     onClose : () => set({isOpen : false}) ,
     id :'' ,
     value : '' ,
     updateId: (id) => set(() => ({ id: id })) ,
     updateValue: (value) => set(() => ({ value: value })) ,
}))