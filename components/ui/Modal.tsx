"use client";

import { useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";
import { Cairo } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Cairo({
    weight : '600' ,
    subsets : ['arabic']
})

interface ModalProps {
     title :string ;
     description : string;
     isOpen : boolean ;
     onClose : () => void;
     children?: React.ReactNode ,
     clsssName ?: string
}

export const Modal:React.FC<ModalProps> = ({
     title , 
     description ,
     isOpen ,
     onClose ,
     children ,
     clsssName 
}) => {
const onChange = (open : boolean) => {
     if(!open) {
          onClose();
     }
}

useEffect(() => {
    console.log(isOpen);
    
},[isOpen])

return (
   
     <Dialog open={isOpen} onOpenChange={onChange}  >
        <div>

        </div>
          <DialogContent className={cn(clsssName)}>
               <DialogHeader>
                    <DialogTitle className={cn('text-2xl text-center',font.className)}>{title}</DialogTitle>
                    <DialogDescription className={cn(font.className)}>{description}</DialogDescription>
               </DialogHeader>
               <div>
                    {children}
               </div>
          </DialogContent>
     </Dialog>
)
}