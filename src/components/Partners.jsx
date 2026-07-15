import React from 'react'

const LogoIpsum = () => (
  <div className="flex items-center gap-1.5 text-gray-400">
    <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.35" />
      <path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor" />
    </svg>
    <span className="text-lg font-semibold">
      logoipsum<sup className="text-xs align-super">°</sup>
    </span>
  </div>
)

const Partners = () => {
  return (
    <div className="w-full bg-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900">Our Partners</h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <LogoIpsum key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Partners