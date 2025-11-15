'use client'

import { useState } from 'react'

interface SignInModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Sign in with:', { email, password })
    setEmail('')
    setPassword('')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-md">
        {/* Modal Card */}
        <div className="bg-white rounded-2xl p-6 w-full shadow-2xl relative">
          {/* X Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition-colors p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex justify-center mb-3">
            <div className="w-20 h-20 bg-amber-800 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-amber-900 text-center mb-1">Welcome Back</h2>
          <p className="text-amber-700 text-center text-sm mb-6">Sign in to access your OCR history</p>

          {/* Form */}
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="block text-black font-semibold mb-1.5 text-xs">Email</label>
              <div className="relative">
                <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 bg-white text-sm placeholder:text-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-black font-semibold mb-1.5 text-xs">Password</label>
              <div className="relative">
                <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 bg-white text-sm placeholder:text-gray-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold py-2.5 rounded-lg transition-colors mt-5 text-sm"
            >
              Sign In
            </button>
          </form>

          {/* Links */}
          <div className="mt-4 space-y-1.5">
            <div>
              <a href="#" className="text-blue-600 hover:underline font-medium text-xs">
                Don't have an account? Register
              </a>
            </div>
            <div>
              <a href="#" className="text-gray-600 text-xs">
                Forgot your password?
              </a>
            </div>
          </div>

          {/* Note */}
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-3 mt-4">
            <p className="text-amber-900 text-xs leading-relaxed">
              <span className="font-bold">Note:</span> This is a demo authentication system. In production, user data would be securely stored and managed with proper authentication.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
