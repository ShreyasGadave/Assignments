import React from 'react'

const Placeholder = ({ className }) => (
  <div className={`relative bg-[#dcdcdc] ${className}`}>
    <svg
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <line x1="0" y1="0" x2="100" y2="100" stroke="#a0a0a0" strokeWidth="0.4" />
      <line x1="100" y1="0" x2="0" y2="100" stroke="#a0a0a0" strokeWidth="0.4" />
    </svg>
  </div>
)

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400 shrink-0 mt-0.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12.5l2.2 2.2L15.5 10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const features = [
  'Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.',
  'Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.',
  'Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.',
  'Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.',
]

const Trust = () => {
  return (
    <div className="w-full bg-white py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Why our clients trust us</h2>
        <p className="mt-5 text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Suspendisse
          lobortis vitae quis vehicula pellentesque sit id. Urna posuere consequat velit
          vulputate faucibus pretium arcu accumsan sit. Vel venenatis sapien.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-12 flex flex-col md:flex-row gap-10 items-start">
        {/* Image mosaic */}
        <div className="flex gap-4 shrink-0">
          <div className="flex flex-col gap-4">
            <Placeholder className="w-52 h-44" />
            <Placeholder className="w-44 h-36 ml-9" />
          </div>
          <Placeholder className="w-28 h-40 mt-1" />
        </div>

        {/* Checklist + button */}
        <div className="flex-1 flex flex-col gap-6">
          {features.map((text, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckIcon />
              <p className="text-gray-700 leading-snug">{text}</p>
            </div>
          ))}
          <button className="self-start bg-black text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Button
          </button>
        </div>
      </div>
    </div>
  )
}

export default Trust