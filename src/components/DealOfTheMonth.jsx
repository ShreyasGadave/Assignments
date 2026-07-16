import { useEffect, useMemo, useState } from 'react';
import imgImages from '../assets/Homepage/10.png'
import imgImages1 from  '../assets/Homepage/10.png';
import imgImages2 from  '../assets/Homepage/10.png';
import imgImages3 from  '../assets/Homepage/10.png';
import imgImages4 from  '../assets/Homepage/10.png';
import imgImages5 from  '../assets/Homepage/11.png';
import imgImage13 from '../assets/Homepage/12.png';
import imgImage14 from '../assets/Homepage/13.png';
import imgImage15 from '../assets/Homepage/10.png';

function DealOfTheMonth() {
 const target = useMemo(
    () => new Date(Date.now() + 2 * 86400000 + 6 * 3600000 + 5 * 60000 + 30000),
    []
  );
  const { days, hrs, mins, secs } = useCountdown(target);
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [imgImage13, imgImage14, imgImage15];

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#fafafa] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Left: text + timer */}
        <div className="flex-1 min-w-0">
          <p className="font-['Volkhov',serif] text-[#484848] text-4xl md:text-[46px] leading-normal mb-4">Deals Of The Month</p>
          <p className="font-['Poppins',sans-serif] text-[#8a8a8a] text-base leading-[26px] mb-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
          </p>
          <button className="bg-black text-white font-['Poppins',sans-serif] text-base px-8 py-4 rounded-[10px] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)] hover:bg-neutral-800 transition-colors mb-10">
            Buy Now
          </button>
          <p className="font-['Poppins',sans-serif] font-medium text-[#484848] text-2xl mb-4">Hurry, Before It's Too Late!</p>
          <div className="flex gap-4">
            <TimerBox value={days} label="Days" />
            <TimerBox value={hrs} label="Hr" />
            <TimerBox value={mins} label="Mins" />
            <TimerBox value={secs} label="Sec" />
          </div>
        </div>

        {/* Right: image carousel */}
        <div className="flex-1 min-w-0 relative">
          <div className="relative rounded-[10px]  overflow-hidden aspect-[3/4] max-w-sm mx-auto">
            <img src={slides[activeSlide]} alt="Deal product" className="w-full h-full object-cover transition-opacity duration-300" />
            {/* Overlay tag */}
            <div className="absolute bottom-3 left-3 backdrop-blur-sm bg-white/80 p-4 rounded">
              <p className="font-['Poppins',sans-serif] text-[#484848] text-sm">01 — Spring Sale</p>
              <p className="font-['Poppins',sans-serif] text-[#484848] text-3xl font-medium mt-1">30% OFF</p>
            </div>
          </div>
          {/* Dots + Arrows */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setActiveSlide((p) => (p - 1 + slides.length) % slides.length)}
              className="w-10 h-10 rounded-full bg-white shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] flex items-center justify-center hover:bg-neutral-100"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <div className="flex gap-3 items-center">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`transition-all ${i === activeSlide ? "w-5 h-5 rounded-full border-2 border-black bg-black" : "w-2.5 h-2.5 rounded-full bg-[#B6B6B6]"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setActiveSlide((p) => (p + 1) % slides.length)}
              className="w-10 h-10 rounded-full bg-white shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] flex items-center justify-center hover:bg-neutral-100"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── NEW ARRIVALS ─────────────────────────────────────────────────────────────

const products = [
  { name: "Shiny Dress", brand: "Al Karam", price: "$95.50", img: imgImages, reviews: "(4.1k) Customer Reviews" },
  { name: "Long Dress", brand: "Al Karam", price: "$95.50", img: imgImages2, reviews: "(4.1k) Customer Reviews" },
  { name: "Full Sweater", brand: "Al Karam", price: "$95.50", img: imgImages4, reviews: "(4.1k) Customer Reviews" },
  { name: "White Dress", brand: "Al Karam", price: "$95.50", img: imgImages1, reviews: "(4.1k) Customer Reviews" },
  { name: "Colorful Dress", brand: "Al Karam", price: "$95.50", img: imgImages3, reviews: "(4.1k) Customer Reviews" },
  { name: "White Shirt", brand: "Al Karam", price: "$95.50", img: imgImages5, reviews: "(4.1k) Customer Reviews" },
];

export default DealOfTheMonth;

function useCountdown(target) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hrs: 0, mins: 0, secs: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hrs: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return timeLeft;
}

function TimerBox({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="bg-white rounded-[10px] shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
        <span className="font-['Share_Tech_Mono',monospace] text-[#484848] text-2xl md:text-3xl leading-none">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="font-['Poppins',sans-serif] text-[#484848] text-lg md:text-2xl">{label}</span>
    </div>
  );
}