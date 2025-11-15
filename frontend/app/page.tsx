'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import SourceDocument from '@/components/source-document'
import Features from '@/components/features'

export default function Home() {
  return (
    <>
      {/* 1. The Fixed Header */}
      <Header />
      
      {/* 2. CRITICAL FIX: Spacer div to push the content down 
             by the height of the fixed header. h-20 (80px) is a good 
             starting point for your header height.
      */}
      <div className="h-20"></div>

      {/* 3. Main Content Wrapper */}
      <div className="min-h-screen">
        <main className="flex-1">
          <Hero />
          <div className="px-8 py-12">
            <SourceDocument />
          </div>
          <Features />
        </main>
      </div>
    </>
  )
}