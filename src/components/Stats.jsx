import React from 'react'

const stats = [
  { label: 'Clients', value: '12K' },
  { label: 'Annual growth', value: '55%' },
  { label: 'No of projects', value: '5k' },
  { label: 'Positive ratings', value: '80%' },
]

const Stats = () => {
  return (
    <div className="w-full bg-[#f5f5f5] py-16 px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 leading-snug">
          Our business strategy has helped many businesses across the globe
        </h2>
        <p className="mt-5 text-gray-500 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Suspendisse
          lobortis vitae quis vehicula pellentesque sit id
        </p>

        <div className="mt-10 inline-flex bg-[#efefec] rounded-md overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-8 py-5 text-left ${
                i !== 0 ? 'border-l border-gray-300' : ''
              }`}
            >
              <div className="text-sm font-semibold text-gray-900">{stat.label}</div>
              <div className="mt-1 text-gray-500">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-10">
        <div className="relative bg-[#d9d9d9] aspect-video w-full">
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <line x1="0" y1="0" x2="100" y2="100" stroke="#a0a0a0" strokeWidth="0.3" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="#a0a0a0" strokeWidth="0.3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Stats