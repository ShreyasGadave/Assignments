import React from 'react'
import logo from '../assets/logo.svg'

const linkColumns = [
  { heading: 'Heading', links: ['Link here', 'Link here', 'Link here', 'Link here'] },
  { heading: 'Heading', links: ['Link here', 'Link here', 'Link here', 'Link here'] },
  { heading: 'Heading', links: ['Link here', 'Link here', 'Link here', 'Link here'] },
]

const Footer = () => {
  return (
    <div className="w-full bg-[#f7f7f6] px-8 pt-16 pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#232323] rounded-lg px-10 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-semibold">Need more information?</h3>
            <p className="mt-2 text-gray-400 text-sm">
              Write your concern to us and our specialist will get back to you.
            </p>
          </div>
          <button className="bg-white text-gray-900 text-sm font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-colors shrink-0">
            Button
          </button>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center">
                       <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <p className="mt-5 text-sm text-gray-400 leading-relaxed max-w-xs">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sintelit
              officia consequat
            </p>
          </div>

          {linkColumns.map((col, i) => (
            <div key={i}>
              <h4 className="font-semibold text-gray-900">{col.heading}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-semibold text-gray-900">Connect with us</h4>
            <div className="mt-4 flex gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-9 h-9 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer