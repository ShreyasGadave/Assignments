import React from 'react'

const Navbar = () => {
  const links = ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5']

  return (
    <div className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center shrink-0">
         <img src='/logo.svg'/>
        </div>

        {/* Links + Button */}
        <div className="flex items-center gap-9">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-gray-900 hover:text-gray-600 transition-colors"
            >
              {link}
            </a>
          ))}
          <button className="bg-black text-white text-sm font-medium px-6 py-2.5 rounded-md hover:bg-gray-800 transition-colors">
            Button
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar