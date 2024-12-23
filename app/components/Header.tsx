import Link from 'next/link'
import { InfoCircle } from 'react-bootstrap-icons'

export default function Header() {
  return (
    <header className="py-8">
      <h1 className="text-lg font-bold mb-0 font-mono flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="hover:text-gray-300 transition-colors duration-200">
            Seve Kim
          </Link>
          <span className="relative ml-2 cursor-help group">
            <InfoCircle size={12} className="text-gray-400 hover:text-white transition-colors duration-200" />
            <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 transition-opacity duration-100 ease-in-out group-hover:opacity-100 whitespace-nowrap font-normal italic">
              Pronounced: "seh-vee"
            </span>
          </span>
        </div>
        <Link href="/now" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
          Now
        </Link>
      </h1>
    </header>
  )
} 