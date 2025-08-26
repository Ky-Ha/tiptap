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
    content: `
      <p>
        Hey, try to select some text here. There will popup a menu for selecting some inline styles. Remember: you have full control about content and styling of this menu.
      </p>
    `,
  })

  const [showMenu, setShowMenu] = React.useState(true)
  const [isEditable, setIsEditable] = React.useState(true)

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable)
    }
  }, [isEditable, editor])

  const handleButtonClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation() // This prevents the event from bubbling up
    action()
  }

  return (
    <>
      <Button
        type="button"
        onClick={() => {
          setShowMenu((old) => !old)
          if (editor) {
            editor.commands.focus()
          }
        }}
      >
        Toggle menu
      </Button>
      <div className="control-group">
        <label>
          <input
            type="checkbox"
            checked={isEditable}
            onChange={() => setIsEditable(!isEditable)}
          />
          Editable
        </label>
      </div>

      {editor && showMenu && (
        <BubbleMenu
          editor={editor}
          options={{ placement: 'bottom', offset: 8 }}
        >
          <div className="bubble-menu">
            <Button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive('bold') ? 'is-active' : ''}
              type="button"
            >
              Bold
            </Button>
            <Button
              onClick={(e) => handleButtonClick(e, () => console.log('qq'))}
            >
              log
            </Button>
            <Button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive('italic') ? 'is-active' : ''}
              type="button"
            >
              Italic
            </Button>
            <Button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive('strike') ? 'is-active' : ''}
              type="button"
            >
              Strike
            </Button>
          </div>
        </BubbleMenu>
      )}
      <EditorContent editor={editor} />
    </>
  )
}
