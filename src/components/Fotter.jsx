function Footer() {
  const links = ["Support Center", "Invoicing", "Contract", "Careers", "Blog", "FAQ's"];
  return (
    <footer className="w-full border-t border-[#DEDFE1] py-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-['Volkhov',serif] text-[#484848] text-3xl">FASCO</p>
        <div className="flex flex-wrap gap-6 justify-center">
          {links.map((l) => (
            <a key={l} href="#" className="font-['Poppins',sans-serif] text-[#484848] text-base hover:text-black transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
      <p className="font-['Poppins',sans-serif] text-[#484848] text-xs text-center mt-6">
        Copyright © 2026 Xpro . All Rights Reserved.
      </p>
    </footer>
  );
}
export default Footer;