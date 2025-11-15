'use client' 

const features = [
  {
    icon: (
    
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-stack w-12 h-12 text-amber-700 mx-auto" aria-hidden="true">
        <path d="M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1"></path>
        <path d="M16 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"></path>
        <path d="M21 6a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z"></path>
      </svg>
    ),
    title: 'Multiple Formats',
    titleAmharic: 'በርካታ ቅርጸቶች',
    description: 'Upload images, scanned PDFs, or provide URLs. Preview before processing.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-pen-line w-12 h-12 text-amber-700 mx-auto" aria-hidden="true">
        <path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"></path>
        <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
        <path d="M8 18h1"></path>
      </svg>
    ),
    title: 'Edit & Export',
    titleAmharic: 'አርትዕ እና ላክ',
    description: 'Edit converted text and download as plain text, Word document, or PDF.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-archive w-12 h-12 text-amber-700 mx-auto" aria-hidden="true">
        <circle cx="15" cy="19" r="2"></circle>
        <path d="M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"></path>
        <path d="M15 11v-1"></path>
        <path d="M15 17v-2"></path>
      </svg>
    ),
    title: 'Archive Tracking',
    titleAmharic: 'ማህደር መከታተል',
    description: 'Register to save your digitization history and access previous conversions anytime.',
  },
]

export default function Features() {
  return (
    <div className="px-8 py-16"> 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-background border border-amber-200 rounded-2xl p-8 hover:shadow-md transition-shadow"
          >
            <div className="mb-4">
              {feature.icon}
            </div>
            
            <h3 className="mb-1 text-amber-900"> 
              {feature.title}
            </h3>
            
            <p className="text-sm text-amber-800/70 mb-2">
              {feature.titleAmharic}
            </p>
            
            <p className="text-sm text-amber-900/60">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}