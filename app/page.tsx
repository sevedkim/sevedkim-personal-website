import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <div className="flex-grow max-w-3xl mx-auto px-8 w-full pb-0">
        <header className="py-8">
          <h1 className="text-lg font-bold mb-0 font-mono">Seve Kim</h1>
        </header>
        <main className="space-y-12 pb-0">
          <section className="bg-gray-900 rounded-lg p-6 font-['JetBrains_Mono',_monospace]">
            <h2 className="text-sm font-semibold mb-4">Now</h2>
            <p className="text-xs text-gray-400">
              1. <a href="https://www.strava.com/athletes/84698281" className="hover:text-turquoise transition-colors duration-200 external-link">Training</a> for my first New York City Marathon.
            </p>
            <p className="text-xs text-gray-400">
              2. Creating software using Cursor + Claude + v0
            </p>
            <p className="text-xs text-gray-400">
              3. Launching Spotify's first SaaS business, <a href="https://backstage.spotify.com/portal" className="hover:text-turquoise transition-colors duration-200 external-link">Portal</a>
            </p>
            <p className="text-[11px] font-normal italic text-gray-500 mt-4">Last updated August 26, 2024</p>
          </section>
          <section className="grid grid-cols-3 gap-8">
            <div>
              <h2 className="text-lg font-semibold mb-4">Experience</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-medium flex items-center">
                    Spotify
                    <span className="ml-2 px-1.5 py-0.5 text-[10px] bg-gray-800 text-gray-300 rounded-full">Current</span>
                  </h3>
                  <p className="text-sm text-gray-400">Product for <a href="https://backstage.io" className="hover:text-turquoise transition-colors duration-200 external-link">Backstage</a></p>
                </li>
                <li>
                  <h3 className="font-medium">Unstoppable Domains</h3>
                  <p className="text-sm text-gray-400">Led developer SDK for blockchain domain names.</p>
                </li>
                <li>
                  <h3 className="font-medium">Wikimedia Foundation</h3>
                  <p className="text-sm text-gray-400">Led API & developer experience platform.</p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Projects</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-medium"><a href="https://backstage.spotify.com/portal" className="hover:text-turquoise transition-colors duration-200 external-link">Spotify Portal</a></h3>
                  <p className="text-sm text-gray-400">Spotify's enterprise SaaS offering built on open source Backstage.</p>
                </li>
                <li>
                  <h3 className="font-medium"><a href="https://github.com/unstoppabledomains/resolution" className="hover:text-turquoise transition-colors duration-200 external-link">Blockchain Resolution</a></h3>
                  <p className="text-sm text-gray-400">A library to resolve blockchain domain names.</p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Writing</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-medium">
                    <a href="/writing/execution" className="hover:text-turquoise transition-colors duration-200 italic">
                      Execution is cheap
                    </a>
                  </h3>
                  <p className="text-sm text-gray-400">Execution is cheap, ideas are everything.</p>
                </li>
                <li>
                  <h3 className="font-medium">
                    <a href="/writing/tinkering" className="hover:text-turquoise transition-colors duration-200 italic">
                      Tinkering
                    </a>
                  </h3>
                  <p className="text-sm text-gray-400">To spend time tinkering is to spend time being human.</p>
                </li>
                <li>
                  <h3 className="font-medium">
                    <a href="/writing" className="hover:text-turquoise transition-colors duration-200">
                      More...
                    </a>
                  </h3>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
      <footer className="py-8 mt-0 text-xs text-gray-400 font-sans">
        <div className="max-w-3xl mx-auto px-8">
          <div className="flex space-x-16">
            <div>
              <h3 className="mb-2">Follow</h3>
              <ul className="space-y-0">
                <li><a href="https://www.are.na/seve-kim" className="hover:text-turquoise transition-colors  external-link">Are.na</a></li>
                <li><a href="https://twitter.com/sevedkim" className="hover:text-turquoise transition-colors  external-link">Twitter</a></li>
                <li><a href="https://developerproducts.com" className="hover:text-turquoise transition-colors external-link">Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2">Connect</h3>
              <ul className="space-y-0">
                <li><a href="mailto:sevedkim@gmail.com" className="hover:text-turquoise transition-colors external-link">Email</a></li>
                <li><a href="https://linkedin.com/in/sevedkim" className="hover:text-turquoise transition-colors external-link">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <Link href="/colophon" className="hover:text-turquoise transition-colors">Colophon</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
    
  )
}