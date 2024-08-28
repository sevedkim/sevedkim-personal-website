'use client'

import { useState, useEffect } from 'react'

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText('sevedkim@gmail.com')
    setCopied(true)
  }

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 800) // Reduced to match animation duration
      return () => clearTimeout(timer)
    }
  }, [copied])

  return (
    <div className="relative inline-flex items-center">
      <button
        onClick={handleClick}
        className="flex items-center text-gray-400 hover:text-turquoise transition-colors duration-200"
        title="sevedkim@gmail.com"
      >
        <span>Email</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </button>
      {copied && (
        <span className="absolute left-full ml-2 px-2 py-1 text-xs bg-gray-800 text-white rounded-full whitespace-nowrap animate-slide-in-fade-out">
          Copied!
        </span>
      )}
    </div>
  )
}
