'use client'

import { useState } from 'react'

export default function SourceDocument() {
  const [activeTab, setActiveTab] = useState('upload')
  const [urlInput, setUrlInput] = useState('')

  // Mapping custom variable classes for clarity and consistency
  const PRIMARY_COLOR = 'text-primary';
  const PRIMARY_BG = 'bg-primary';
  const PRIMARY_FG = 'text-primary-foreground';
  const CARD_BG = 'bg-card';
  const MUTED_FG = 'text-muted-foreground';
  const ACCENT_BORDER = 'border-accent';
  const SECONDARY_BG = 'bg-secondary';
  const FOREGROUND_COLOR = 'text-foreground';
  
  // Custom classes matching the snippet's aesthetic
  const INPUT_BG_STYLE = 'bg-stone-50/50';
  const INPUT_BORDER_STYLE = 'border-amber-200 focus:border-amber-400';
  const TEXT_DARK_AMBER = 'text-amber-900';
  const BUTTON_BG_STYLE = 'bg-amber-800 hover:bg-amber-900 text-white';

  // Helper to determine if the URL button should be disabled
  const isUrlButtonDisabled = urlInput.trim() === '';

  return (
    <div className="max-w-2xl">
      {/* Card Wrapper (matches previous step) */}
      <div className={`${CARD_BG} rounded-xl border border-border p-8 shadow-sm`}>

        {/* Header (matches previous step) */}
        <div className="flex items-center gap-3 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-book-open w-5 h-5 ${PRIMARY_COLOR}`} aria-hidden="true"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
          <h3 className={`text-2xl font-extrabold text-foreground`}>Source Document</h3>
        </div>

        {/* Tabs (matches previous step) */}
        <div
          className={`text-muted-foreground h-9 items-center justify-center rounded-xl p-[3px] grid w-full grid-cols-2 mb-6 ${SECONDARY_BG} border ${ACCENT_BORDER}`}
        >
          {/* FILE UPLOAD BUTTON */}
          <button
            onClick={() => setActiveTab('upload')}
            className={`
              inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent
              px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] disabled:opacity-50
              ${activeTab === 'upload'
                ? `${CARD_BG} ${FOREGROUND_COLOR} shadow-md`
                : `${MUTED_FG} hover:bg-white/50`
              }
            `}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-4 h-4 mr-2" aria-hidden="true">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path>
            </svg>
            <span className="hidden sm:inline">File Upload</span>
            <span className="sm:hidden">File</span>
          </button>
          
          {/* URL BUTTON */}
          <button
            onClick={() => setActiveTab('url')}
            className={`
              inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent 
              px-2 py-1 text-sm font-medium whitespace-nowrap transition-colors disabled:opacity-50
              ${activeTab === 'url'
                ? `${CARD_BG} ${FOREGROUND_COLOR} shadow-md`
                : `${MUTED_FG} hover:bg-white/50`
              }
            `}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link w-4 h-4 mr-2" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            URL
          </button>
        </div>

        {/* Content based on tab */}
        {activeTab === 'upload' ? (
          <div className="flex-1 outline-none">
            <div className="border-2 border-dashed rounded-lg p-8 text-center transition-colors border-amber-300 hover:border-amber-400 bg-stone-50/50">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload w-12 h-12 mx-auto mb-4 text-amber-700" aria-hidden="true">
                <path d="M12 3v12"></path>
                <path d="m17 8-5-5-5 5"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              </svg>
              <p className="mb-2 text-amber-900">
                Drag and drop your manuscript here
              </p>
              <p className="text-sm text-amber-700/70 mb-4">
                or click to browse
              </p>
              <button className={`h-9 px-4 py-2 ${BUTTON_BG_STYLE} inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all`}>
                Select Document
              </button>
              <input type="file" className="hidden" accept="image/jpeg,image/jpg,image/png,image/gif,image/bmp,application/pdf" />
            </div>

            <div className="mt-4 text-xs text-amber-800/70">
              <p>Supported formats: JPEG, PNG, GIF, BMP, PDF</p>
            </div>
          </div>
        ) : (
          // URL TAB CONTENT (UPDATED)
          <div data-state="active" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:r0:-trigger-url" id="radix-:r0:-content-url" tabIndex={0} data-slot="tabs-content" className="flex-1 outline-none">
            <div className="space-y-4">
              <div>
                {/* Label: text-sm, text-amber-900, block, mb-2 */}
                <label className={`text-sm ${TEXT_DARK_AMBER} mb-2 block`}>
                  Enter Image URL
                </label>
                
                <input
                  type="url"
                  data-slot="input"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://example.com/manuscript.jpg"
                  // Input Styling: uses specific border and background styles
                  className={`flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:ring-ring/50 focus-visible:ring-[3px]
                    ${INPUT_BORDER_STYLE} ${INPUT_BG_STYLE}
                  `}
                />
              </div>
              
              {/* Button: w-full and dark amber style, disabled based on state */}
              <button
                data-slot="button"
                className={`w-full h-9 px-4 py-2 ${BUTTON_BG_STYLE} inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50`}
                disabled={isUrlButtonDisabled}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link w-4 h-4 mr-2" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                Load from URL
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}