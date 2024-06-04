"use client"
import { create } from "zustand";

interface useCreateTagStore {
     isOpen : boolean ;
     onOpen : () => void ;
     onClose : () => void ;
};


export const useCreateTagModal = create<useCreateTagStore>((set) => ({
     isOpen :  false ,
     onOpen : () => set({isOpen : true}) ,
     onClose : () => set({isOpen : false})
}))