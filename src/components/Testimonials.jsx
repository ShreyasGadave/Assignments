import React, { useState } from 'react'

const testimonials = [
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus mattis.',
    name: 'Jacqueline Wright',
    role: 'Customer',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus mattis.',
    name: 'Jacqueline Wright',
    role: 'Customer',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus mattis.',
    name: 'Jacqueline Wright',
    role: 'Customer',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus mattis.',
    name: 'Jacqueline Wright',
    role: 'Customer',
  },
]

const Avatar = ({ name }) => (
  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-xs font-semibold shrink-0">
    {name
      .split(' ')
      .map((n) => n[0])
      .join('')}
  </div>
)

const Testimonials = () => {
  const [start, setStart] = useState(0)
  const visible = 2

  const prev = () => setStart((s) => (s - 1 + testimonials.length) % testimonials.length)
  const next = () => setStart((s) => (s + 1) % testimonials.length)

  const cards = Array.from({ length: visible }, (_, i) => testimonials[(start + i) % testimonials.length])

  return (
    <div className="w-full bg-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our happy clients</h2>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-9 h-9 shrink-0 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex flex-col md:flex-row gap-6 flex-1">
            {cards.map((t, i) => (
              <div key={i} className="bg-[#f5f5f5] p-6 text-left flex-1">
                <p className="text-gray-600 text-sm leading-relaxed">{t.quote}</p>
                <div className="mt-5 flex items-center gap-3">
                  <Avatar name={t.name} />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-9 h-9 shrink-0 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials