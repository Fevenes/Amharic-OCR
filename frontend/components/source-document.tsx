'use client'

import { useState } from 'react'

export default function SourceDocument() {
  const [activeTab, setActiveTab] = useState('upload')

  return (
    <div className="max-w-4xl">
      <div className="bg-white rounded-xl border-2 border-amber-700 p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <h3 className="text-2xl font-bold text-amber-900">Source Document</h3>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-amber-100 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex-1 py-3 px-4 rounded-md font-semibold flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'upload'
                ? 'bg-yellow-300 text-amber-900'
                : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            File Upload
          </button>
          <button
            onClick={() => setActiveTab('url')}
            className={`flex-1 py-3 px-4 rounded-md font-semibold flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'url'
                ? 'bg-yellow-300 text-amber-900'
                : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            URL
          </button>
        </div>

        {/* Upload Area */}
        <div className="space-y-6">
          <div className="border-2 border-dashed border-yellow-400 rounded-lg p-16 text-center bg-yellow-50 cursor-pointer hover:bg-yellow-100 transition-colors">
            <svg className="mx-auto mb-6 w-14 h-14 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <p className="text-amber-900 font-semibold text-lg mb-2">
              {activeTab === 'upload'
                ? 'Drag and drop your manuscript here'
                : 'Enter document URL'}
            </p>
            <p className="text-amber-700 text-sm mb-6">
              {activeTab === 'upload'
                ? 'or click to browse'
                : 'Paste the URL of the document you want to digitize'}
            </p>
            <button className="bg-amber-800 hover:bg-amber-900 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Select Document
            </button>
          </div>

          {/* Supported formats info */}
          {activeTab === 'upload' && (
            <p className="text-amber-700 text-sm">
              Supported formats: JPEG, PNG, GIF, BMP, PDF
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
