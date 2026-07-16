import imgColor from "../assets/Homepage/1.png";
import imgImage17 from "../assets/Homepage/2.png";
import imgImage16 from "../assets/Homepage/3.png";
import imgImage18 from "../assets/Homepage/4.png";

function Hero() {
  return (
    <section className="max-w-6xl overflow-hidden relative flex items-stretch gap-1 min-h-screen px-4 py-4">
      {/* Left model */}
      <div className="hidden lg:block relative w-[30%] shrink-0">
        <div className="absolute inset-0 rounded-[10px] overflow-hidden bg-[#e0e0e0]">
          <img
            src={imgColor}
            alt="Model"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex flex-col px-5 items-center justify-center text-center relative z-10">
        {/* Top banner image */}
        <div className="w-full max-w-md h-full md:h-[140px] rounded-[10px] overflow-hidden mb-8 bg-[#e0e0e0]">
          <img
            src={imgImage17}
            alt="Collection banner"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <p className="font-['Poppins',sans-serif] font-medium text-[#484848] text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-2">
          ULTIMATE
        </p>
        <p
          className="font-['Poppins',sans-serif] font-medium text-transparent text-8xl md:text-[130px] lg:text-[170px] leading-none tracking-tighter select-none"
          style={{ WebkitTextStroke: "2px #484848" }}
        >
          SALE
        </p>
        <p className="font-['Poppins',sans-serif] text-[#484848] text-base md:text-xl tracking-[2px] uppercase mt-4 mb-8">
          New Collection
        </p>
        <button className="bg-black text-white font-['Poppins',sans-serif] font-medium text-base px-10 py-4 rounded-[10px] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)] hover:bg-neutral-800 transition-colors">
          SHOP NOW
        </button>
        {/* Bottom banner image */}
<div className="w-full max-w-md h-[100px] md:h-[140px] rounded-[10px] overflow-hidden mt-8">
  <img
    src={imgImage16}
    alt="Sale banner"
    className="w-full h-full object-cover object-[center_30%]"
  />
</div>
      </div>

      {/* Right model */}
      <div className="hidden lg:block relative w-[30%] shrink-0">
        <div className="absolute inset-0 rounded-[10px] overflow-hidden bg-[#e0e0e0]">
          <img
            src={imgImage18}
            alt="Model"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;