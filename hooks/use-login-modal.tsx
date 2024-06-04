"use client"
import { create } from "zustand";

interface useLoginodalStore {
     isOpen : boolean ;
     onOpen : () => void ;
     onClose : () => void ;
};


export const useLoginModal = create<useLoginodalStore>((set) => ({
     isOpen :  false ,
     onOpen : () => set({isOpen : true}) ,
     onClose : () => set({isOpen : false})
}))