import imgImage12 from "../assets/Homepage/17.png";

function ProductFeature() {
  return (
    <section className="w-full flex  border   pt-10">
      <div className="max-w-7xl mx-auto flex bg-gray-300 flex-col lg:flex-row relative overflow-hidden">
        <img
          src={imgImage12}
          alt="Peaky Blinders"
          className="w-full h-full object-cover object-top"
          style={{ maxHeight: 570 }}
        />
        {/* Hotspot labels */}
      </div>
      <div className="relative w-full p-3 lg:w-[55%] bg-gray-300 h-[360px] overflow-hidden">
        <div>
          <p className="font-['Poppins',sans-serif] text-[#767676] text-base mb-2">
            Women Collection
          </p>
          <p className="font-['Volkhov',serif] text-[#484848] text-4xl md:text-[46px] leading-normal mb-4">
            Peaky Blinders
          </p>
          <p className="font-['Poppins',sans-serif] text-base leading-none underline text-black mb-3">
            DESCRIPTION
          </p>
          <p className="font-['Poppins',sans-serif] text-[#767676] text-base leading-normal max-w-md mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Scelerisque duis.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-['Poppins',sans-serif] text-[#767676] text-base">
              Size:
            </span>
            <div className="bg-black text-white font-['Poppins',sans-serif] text-base px-5 py-1.5 rounded-[10px]">
              M
            </div>
          </div>
          <p className="font-['Poppins',sans-serif] font-medium text-black text-3xl mb-6">
            $100.<span className="text-2xl">00</span>
          </p>
     <button className="bg-black text-white font-['Poppins',sans-serif] text-base px-10 py-4 rounded-[10px] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)] hover:bg-neutral-800 transition-colors">
  Buy Now
</button>
        </div>
      </div>
    </section>
  );
}

export default ProductFeature;
