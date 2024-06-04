"use client"
import { create } from "zustand";

interface useEditTagStore {
     isOpen : boolean ;
     onOpen : () => void ;
     onClose : () => void ;
};


export const useEditTagModal = create<useEditTagStore>((set) => ({
     isOpen :  false ,
     onOpen : () => set({isOpen : true}) ,
     onClose : () => set({isOpen : false})
}))