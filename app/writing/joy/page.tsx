import Link from 'next/link'

export default function JoyLog() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <div className="flex-grow max-w-3xl mx-auto px-8 w-full">
        <header className="py-8 flex justify-between items-center">
          <Link href="/writing" className="text-sm text-gray-400 hover:text-turquoise transition-colors duration-200">
            ← Writing
          </Link>
        </header>

        <main className="py-8">
          <h1 className="text-2xl font-bold mb-4">Joy Log</h1>
          <time className="text-sm text-gray-400 mb-8 block">September 18, 2023</time>

          <article className="space-y-4 text-gray-300">
            <p>A list of things and memories to remind myself what gives me joy</p>

            <ul className="list-disc pl-5 space-y-2">
              <li>"The Alchemist" by Paulo Coelho</li>
              <li>"That's on you" by Kid Ink</li>
              <li>Somtum Der Thai Restaurant</li>
              <li>"Yellow Stone"</li>
              <li>"True Detective" Season 1</li>
              <li>Afrobeat</li>
            </ul>

            <p className="mt-6">Last updated: 2023.11.16</p>
          </article>
        </main>
      </div>
    </div>
  )
}