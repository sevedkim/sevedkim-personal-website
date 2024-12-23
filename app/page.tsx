import Link from 'next/link'
import CopyEmailButton from './components/CopyEmailButton'
import { InfoCircle } from 'react-bootstrap-icons';
import Footer from './components/footer'
import Header from './components/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <div className="flex-grow max-w-3xl mx-auto px-8 w-full pb-0">
        <Header />
        <main className="space-y-12 pb-0">
          <section className="grid grid-cols-3 gap-8 mt-32">
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
                  <h3 className="font-medium"><a href="https://github.com/unstoppabledomains/resolution" className="hover:text-turquoise transition-colors duration-200 external-link">Blockchain Domain Resolution</a></h3>
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
      <Footer />
    </div>
    
  )
}