'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import SourceDocument from '@/components/source-document'
import Features from '@/components/features'

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
        <main className="flex-1">
          <Hero />
          <div className="px-8 py-12">
            <SourceDocument />
          </div>
          <Features />
        </main>
      </div>
  )
}
