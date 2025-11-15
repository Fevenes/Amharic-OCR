const features = [
  {
    icon: '📄',
    title: 'Multiple Formats',
    titleAmharic: 'በርካታ ቅርጾች',
    description: 'Upload images, scanned PDFs, or provide URLs. Preview before processing.',
  },
  {
    icon: '✍️',
    title: 'Edit & Export',
    titleAmharic: 'አርትዕ እና ላክ',
    description: 'Edit converted text and download as plain text, Word document, or PDF.',

  },
  {
    icon: '📚',
    title: 'Archive Tracking',
    titleAmharic: 'ማህደር መከታተል',
    description: 'Register to save your digitization history and access previous conversions anytime.',
  },
]

export default function Features() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border-2 border-yellow-300 rounded-2xl p-8 hover:shadow-lg transition-shadow"
          >
            <div className="text-5xl mb-4 text-center">{feature.icon}</div>
            <h3 className="text-2xl font-bold text-amber-900 mb-2 text-center">
              {feature.title}
            </h3>
            <p className="text-sm text-amber-700 text-center mb-4">
              {feature.titleAmharic}
            </p>
            <p className="text-amber-800 text-center leading-relaxed">
              {feature.description}
            </p>            
          </div>
        ))}
      </div>
    </div>
  )
}
