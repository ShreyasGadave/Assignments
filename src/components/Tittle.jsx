import React from 'react'

const Hero = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* Left content panel */}
      <div className="w-full md:w-1/2 bg-[#f3f3f3] flex items-center px-10 py-24 md:py-32">
        <div className="max-w-md">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Great design is invisible
          </h1>
          <p className="mt-6 text-gray-500 text-base">
            Lorem ipsum dolor sit amet constreteur
          </p>
          <button className="mt-8 bg-black text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Button
          </button>
        </div>
      </div>

      {/* Right image placeholder */}
      <div className="w-full md:w-1/2 relative bg-[#c9c9c9] aspect-square md:aspect-auto">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <line x1="0" y1="0" x2="100" y2="100" stroke="#999999" strokeWidth="0.3" />
          <line x1="100" y1="0" x2="0" y2="100" stroke="#999999" strokeWidth="0.3" />
        </svg>
      </div>
    </div>
  )
}

export default Hero