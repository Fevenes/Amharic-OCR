//froentend/components/hero.tsx
export default function Hero() {
  return (
    <section className="bg-background px-8 py-16 text-center">
      <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-amber-800 via-amber-700 to-yellow-900 bg-clip-text text-transparent">
        የአማርኛ የእጅ ጽሑፍ OCR
      </h2>
      <p className="text-lg text-amber-900/80 max-w-2xl mx-auto">
        Preserve and digitize ancient Amharic scriptures and manuscripts
      </p>
      <p className="text-sm text-amber-800/60 mt-2">
        Advanced OCR technology for historical document preservation
      </p>
    </section>
  )
}