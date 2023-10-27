import ImageBlock from '@/components/imageBlock'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-zinc-700 flex min-h-screen flex-row items-center justify-between p-24">
      <ImageBlock img='/img/leon.jpeg' />
      <ImageBlock img='/img/dylan.png' />
    </main>
  )
}
