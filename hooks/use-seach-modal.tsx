"use client"
import { create } from "zustand";

interface useSearchStore {
     isOpen : boolean ;
     onOpen : () => void ;
     onClose : () => void ;
};


export const useSearchModal = create<useSearchStore>((set) => ({
     isOpen :  false ,
     onOpen : () => set({isOpen : true}) ,
     onClose : () => set({isOpen : false})
}))