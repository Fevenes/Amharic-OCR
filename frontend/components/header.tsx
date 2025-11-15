'use client'

import { useState } from 'react'
import SignInModal from './sign-in-modal'

export default function Header() {
  const [isSignInOpen, setIsSignInOpen] = useState(false)

  return (
    <>
      <header className="bg-amber-50 border-b border-amber-200 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="w-12 h-12 bg-amber-800 rounded-lg flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Ａ</span>
          </div>
          <div>
            <h1 className="text-amber-900 font-bold text-lg">Amharic Scripture Digitizer</h1>
            <p className="text-amber-700 text-sm">የአማርኛ ጽሑፍ መለወጫ • Manuscript Preservation</p>
          </div>
        </div>

        <button
          onClick={() => setIsSignInOpen(true)}
          className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span>Sign In</span>
        </button>
      </header>

      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </>
  )
}
