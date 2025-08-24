import Tiptap from '@/components/1-basic-tiptap'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4 gap-10">
      <p className='text-5xl'>Hello from the Tiptap page!</p>
      <Tiptap />
    </div>
  )
}
