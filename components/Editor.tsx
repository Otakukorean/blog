"use client"
import React, { useEffect } from 'react'
import {BlockNoteEditor , PartialBlock} from '@blocknote/core'
import {BlockNoteView , Theme, lightDefaultTheme, useBlockNote} from '@blocknote/react'
import "@blocknote/react/style.css";
import { Cairo } from 'next/font/google'

import { cn } from '@/lib/utils';
interface EditorProps {
   
   SetContent : (value: string) => void;
    initilaContent ?:string ;
    editable ?: boolean ;
}
const font= Cairo({
  subsets : ['arabic'] ,
  weight : '800'
})

const Editor = ({ SetContent , initilaContent , editable} : EditorProps) => {
  
    const editor: BlockNoteEditor = useBlockNote({
        // Listens for when the editor's contents change.
        onEditorContentChange: (editor) => {
          // Converts the editor's contents from Block objects to HTML and saves
          // them.
          const saveBlocksAsHTML = async () => {
            const html: string = await editor.blocksToHTMLLossy(editor.topLevelBlocks);
            SetContent(html);
          };
          saveBlocksAsHTML();
        }
      });

      
  return (
    <div>
    <BlockNoteView
    editor={editor} 
    theme={'dark'}
    className={cn('pt-10',font.className)}
    defaultValue={initilaContent}
    />
    </div>
  )
}

export default Editor