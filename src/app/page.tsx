import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen ">
      <p>Testing home page</p>
      <Link href="/todos">Todos</Link>
    </main>
  )
}
