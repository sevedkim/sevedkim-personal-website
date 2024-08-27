import Link from 'next/link'

export default function Colophon() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <div className="flex-grow max-w-3xl mx-auto px-8 w-full">
        <header className="py-8 flex justify-between items-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-turquoise transition-colors duration-200">
            ← Home
          </Link>
          <h1 className="text-xl font-semibold">Colophon</h1>
        </header>

        <main className="space-y-12 py-8">
          <section>
            <h2 className="text-lg font-semibold mb-4">Technology Stack</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Built with <a href="https://nextjs.org/" className="hover:text-turquoise transition-colors duration-200 external-link">Next.js</a></li>
              <li>Styled using <a href="https://tailwindcss.com/" className="hover:text-turquoise transition-colors duration-200 external-link">Tailwind CSS</a></li>
              <li>Deployed on <a href="https://vercel.com/" className="hover:text-turquoise transition-colors duration-200 external-link">Vercel</a></li>
              <li>Version control with <a href="https://github.com/" className="hover:text-turquoise transition-colors duration-200 external-link">GitHub</a></li>
              <li>Developed using <a href="https://www.cursor.com/" className="hover:text-turquoise transition-colors duration-200 external-link">Cursor</a> and <a href="https://www.anthropic.com" className="hover:text-turquoise transition-colors duration-200 external-link">Claude 3.5 Sonnet</a></li>
            </ul>
          </section>

                <p className="text-[11px] font-normal italic text-gray-500 mt-4">Last Updated August 26, 2024</p>
        </main>
      </div>
    </div>
  )
}
