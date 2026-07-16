import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="max-w-7xl mx-auto bg-white px-6 md:px-16 py-4 flex items-center justify-between">
      <p className="font-['Volkhov',serif] text-[#484848] text-3xl md:text-3xl leading-none">
        FASCO
      </p>

      <div className="hidden md:flex items-center gap-8">
        {["Home", "Deals", "New Arrivals", "Packages"].map((item) => (
          <a
            key={item}
            href="#"
            className="font-['Poppins',sans-serif] text-[#484848] text-sm hover:text-black transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-6">
        <a
          href="#"
          className="font-['Poppins',sans-serif] text-[#484848] text-sm"
        >
          Sign in
        </a>
        <button className="bg-black text-white font-['Poppins',sans-serif] text-sm px-6 py-1 rounded shadow-2xl hover:bg-neutral-800 transition-colors">
          Sign Up
        </button>
      </div>
      {/* Mobile hamburger */}
      <button
        className="md:hidden text-black"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      {menuOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-white shadow-lg z-50 flex flex-col p-6 gap-4 md:hidden">
          {["Home", "Deals", "New Arrivals", "Packages"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-['Poppins',sans-serif] text-[#484848] text-base"
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="font-['Poppins',sans-serif] text-[#484848] text-base"
          >
            Sign in
          </a>
          <button className="bg-black text-white font-['Poppins',sans-serif] text-base px-6 py-1 rounded-[10px] w-fit">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
