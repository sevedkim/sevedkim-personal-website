import Link from 'next/link'
import CopyEmailButton from './../components/CopyEmailButton'
import { InfoCircle } from 'react-bootstrap-icons';
import Footer from './../components/footer'
import Header from './../components/Header'

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white font-sans flex flex-col">
            <div className="flex-grow max-w-3xl mx-auto px-8 w-full pb-0">
                <Header />
                <main className="space-y-12 pb-0">
                    <section className="bg-gray-900 rounded-lg p-6 font-['JetBrains_Mono',_monospace]">
                        <h2 className="text-sm font-semibold mb-4">Now</h2>
                        <p className="text-xs text-gray-400">
                            1. Designing garments for <a href="https://www.instagram.com/workhorsenyc/" className="hover:text-turquoise transition-colors duration-200 external-link">Workhorse NYC</a>
                        </p>
                        <p className="text-xs text-gray-400">
                            2. Picking up golf again while in Florida with family
                        </p>
                        <p className="text-xs text-gray-400">
                            3. Honing the craft of <a href="https://en.wikipedia.org/wiki/Worldbuilding" className="hover:text-turquoise transition-colors duration-200 external-link">worldbuilding</a> through visual storytelling
                        </p>
                        <p className="text-[11px] font-normal italic text-gray-500 mt-4">December 22, 2024</p>
                    </section>
                    <section className="bg-gray-900 rounded-lg p-6 font-['JetBrains_Mono',_monospace]">
                        <h2 className="text-sm font-semibold mb-4">Previously</h2>
                        <p className="text-xs text-gray-400">
                            1. <a href="https://en.wikipedia.org/wiki/Worldbuilding" className="hover:text-turquoise transition-colors duration-200 external-link">Training</a> for my first New York City Marathon.
                        </p>
                        <p className="text-xs text-gray-400">
                            2. Creating software using Cursor + Claude + v0
                        </p>
                        <p className="text-xs text-gray-400">
                            3. Launching Spotify's first SaaS business, <a href="https://backstage.spotify.com/portal" className="hover:text-turquoise transition-colors duration-200 external-link">Portal</a>
                        </p>
                        <p className="text-[11px] font-normal italic text-gray-500 mt-4">August 26, 2024</p>
                    </section>
                    
                </main>
            </div>
            <Footer />
        </div>

    )
}