import Tiptap from '@/components/1-basic-tiptap'
import { CodeBlockExample } from '@/components/2-code-block-lowlight'
import { DetailsExample } from '@/components/3-details'
import { PlaceHolder } from '@/components/4-place-holder'
import { BubbleExample } from '@/components/5-buddle'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4 gap-10">
      Bubble
      <div className="border-2 border-red-600 flex flex-row gap-40">
        <p className="text-5xl">BubbleExample </p>
        <BubbleExample />
      </div>
    </div>
  )
}
