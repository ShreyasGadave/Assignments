import { useState } from "react";
import imgImage from "../assets/Homepage/18.png";
import imgImage1 from "../assets/Homepage/19.png";
import imgImage4 from "../assets/Homepage/20.png";

function Testimonials() {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      name: "James K.",
      role: "Traveler",
      text: '"You won\'t regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!"',
      img: imgImage4,
    },
    {
      name: "Suzan B.",
      role: "UI Designer",
      text: '"Items That I ordered were the best investment I ever made. I can\'t say enough about your quality service."',
      img: imgImage1,
    },
    {
      name: "Megen W.",
      role: "UI Designer",
      text: '"Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great."',
      img: imgImage,
    },
  ];

  const t = testimonials[active];

  return (
    <section className="w-full bg-[#fafafa] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-['Volkhov',serif] text-[#484848] text-4xl md:text-[46px] leading-normal">
            This Is What Our Customers Say
          </p>
          <p className="font-['Poppins',sans-serif] text-[#8a8a8a] text-base leading-[26px] mt-3 max-w-lg mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis
          </p>
        </div>

        {/* Featured large card */}
        <div className="bg-white rounded-[10px] shadow-[0px_20px_60px_0px_rgba(46,33,61,0.08)] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center max-w-3xl mx-auto mb-8">
          <div className="relative shrink-0">
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-[#d9d9d9] rounded" />
            <div className="relative w-40 h-40 overflow-hidden">
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <Stars />
            <p className="font-['Poppins',sans-serif] text-[#484848] text-base leading-normal mt-4 mb-6">
              {t.text}
            </p>
            <div className="h-px w-48 bg-[#484848] mb-3" />
            <p className="font-['Volkhov',serif] text-[#484848] text-3xl leading-normal">
              {t.name}
            </p>
            <p className="font-['Poppins',sans-serif] text-[#484848] text-base">
              {t.role}
            </p>
          </div>
        </div>

        {/* Smaller cards row */}
        <div className="hidden md:grid grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonials
            .filter((_, i) => i !== active)
            .map((tt, i) => (
              <div
                key={i}
                className="bg-white rounded-[10px] shadow-[0px_15px_45px_0px_rgba(46,33,61,0.08)] p-6 flex gap-4 items-start cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setActive(testimonials.indexOf(tt))}
              >
                <div className="relative shrink-0">
                  <div className="absolute -bottom-1 -right-1 w-full h-full bg-[#d9d9d9]" />
                  <div className="relative w-16 h-16 overflow-hidden">
                    <img
                      src={tt.img}
                      alt={tt.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <Stars count={5} />
                  <p className="font-['Poppins',sans-serif] text-[#484848] text-xs leading-normal mt-2 line-clamp-3">
                    {tt.text}
                  </p>
                  <div className="h-px w-24 bg-[#484848] mt-3 mb-2" />
                  <p className="font-['Volkhov',serif] text-[#484848] text-lg">
                    {tt.name}
                  </p>
                  <p className="font-['Poppins',sans-serif] text-[#484848] text-xs">
                    {tt.role}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-4 justify-center mt-8">
          <button
            onClick={() =>
              setActive(
                (p) => (p - 1 + testimonials.length) % testimonials.length,
              )
            }
            className="w-12 h-12 rounded-full bg-white shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] flex items-center justify-center hover:bg-neutral-100"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="#B6B6B6"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => setActive((p) => (p + 1) % testimonials.length)}
            className="w-12 h-12 rounded-full bg-white shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] flex items-center justify-center hover:bg-neutral-100"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;



function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
}

function StarIcon() {
  return (
    <svg className="w-4 h-4" fill="#FCA120" viewBox="0 0 20 20">
      <path d="M9.5 0L11.6646 7.12771H19L13.0652 11.742L15.2679 19L9.5 14.5146L3.73214 19L5.93479 11.742L0 7.12771H7.33536L9.5 0Z" />
    </svg>
  );
}
