import Tiptap from '@/components/1-basic-tiptap'
import { CodeBlockExample } from '@/components/2-code-block-lowlight'
import { DetailsExample } from '@/components/3-details'
import { PlaceHolder } from '@/components/4-place-holder'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4 gap-10">
      <p className="text-5xl">Hello from the Tiptap page!</p>
      <div className="border-2 border-red-600 flex flex-row gap-40">
        <p className="text-5xl">Starter-kit</p>
        <Tiptap />
      </div>
      <div className="border-2 border-red-600 flex flex-row gap-40">
        <p className="text-5xl">Code Block </p>
        <CodeBlockExample />
      </div>

      <div className="border-2 border-red-600 flex flex-row gap-40">
        <p className="text-5xl">Details </p>
        <DetailsExample />
      </div>

      <div className="border-2 border-red-600 flex flex-row gap-40">
        <p className="text-5xl">PlaceHolder </p>
        <PlaceHolder />
      </div>
    </div>
  )
}
