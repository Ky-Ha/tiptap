'use client'

import { EditorContent, useEditor } from '@tiptap/react'
import { BubbleMenu } from '@tiptap/react/menus'
import StarterKit from '@tiptap/starter-kit'
import React, { useEffect } from 'react'
import { Button } from './ui/button'

export const BubbleExample = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    immediatelyRender: false,
    editable: false,
    content: `
      <p>
        Hey, try to select some text here. There will popup a menu for selecting some inline styles. Remember: you have full control about content and styling of this menu.
      </p>
    `,
  })

  const handleAIRequest = () => {
    if (!editor) return

    // Get the selected text
    const selectedText = editor.state.doc.textBetween(
      editor.state.selection.from,
      editor.state.selection.to
    )

    // close bundle menu

    editor.chain().focus().setTextSelection(editor.state.selection.from).run()
    // editor.chain().focus().setTextSelection({from: 5, to: 5}).run()

    // Call your AI function with the selected text
    console.log('AI Request with text:', selectedText)
  }
  return (
    <>
      {editor && (
        <BubbleMenu editor={editor} shouldShow={({ from, to }) => from !== to}>
          <Button onClick={handleAIRequest}>Ask AI</Button>
        </BubbleMenu>
      )}
      <EditorContent editor={editor} />
    </>
  )
}
