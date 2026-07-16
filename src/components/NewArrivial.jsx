import { useState } from "react";
import imgImages from "../assets/Homepage/11.png";
import imgImages1 from "../assets/Homepage/12.png";
import imgImages2 from "../assets/Homepage/13.png";
import imgImages3 from "../assets/Homepage/14.png";
import imgImages4 from "../assets/Homepage/15.png";
import imgImages5 from "../assets/Homepage/16.png";

function NewArrivals() {
  const [activeCategory, setActiveCategory] = useState(1);

  const categories = [
    "Men's Fashion",
    "Women's Fashion",
    "Women Accessories",
    "Men Accessories",
    "Discount Deals",
  ];

  const products = [
    {
      name: "Shiny Dress",
      brand: "Al Karam",
      price: "₹1200",
      img: imgImages,
      reviews: "(4.1k) Customer Reviews",
    },
    {
      name: "Long Dress",
      brand: "Al Karam",
      price: "₹1300",
      img: imgImages2,
      reviews: "(4.1k) Customer Reviews",
    },
    {
      name: "Full Sweater",
      brand: "Al Karam",
      price: "₹900",
      img: imgImages4,
      reviews: "(4.1k) Customer Reviews",
    },
    {
      name: "White Dress",
      brand: "Al Karam",
      price: "₹500",
      img: imgImages1,
      reviews: "(4.1k) Customer Reviews",
    },
    {
      name: "Colorful Dress",
      brand: "Al Karam",
      price: "₹420",
      img: imgImages3,
      reviews: "(4.1k) Customer Reviews",
    },
    {
      name: "White Shirt",
      brand: "Al Karam",
      price: "₹950",
      img: imgImages5,
      reviews: "(4.1k) Customer Reviews",
    },
  ];

  return (
    <section className=" max-w-5xl mx-auto py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-['Volkhov',serif] text-[#484848] text-4xl md:text-[46px] leading-normal">
            New Arrivals
          </p>
          <p className="font-['Poppins',sans-serif] text-[#8a8a8a] text-base leading-[26px] mt-3 max-w-lg mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(i)}
              className={`font-['Poppins',sans-serif] text-base px-4 py-1 rounded transition-all ${
                activeCategory === i
                  ? "bg-black text-white shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)]"
                  : "bg-[#fafafa] text-[#8a8a8a] hover:bg-neutral-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-black text-white font-['Poppins',sans-serif] text-base px-10 py-2 rounded-[10px] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)] hover:bg-neutral-800 transition-colors">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
export default NewArrivals;

function ProductCard({ name, brand, price, img }) {
  return (
    <div className="bg-white rounded-[10px] shadow-[0px_40px_90px_0px_rgba(0,0,0,0.06)] overflow-hidden group cursor-pointer">
      <div className="h-52 overflow-hidden rounded-[10px] m-4">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="px-4 pb-5">
        <p className="font-['Poppins',sans-serif] font-medium text-[#484848] text-lg leading-none">
          {name}
        </p>
        <p className="font-['Poppins',sans-serif] font-medium text-[#8a8a8a] text-xs mt-1">
          {brand}
        </p>
        <div className="flex items-center gap-1 mt-2">
          <Stars />
        </div>
        <p className="font-['Poppins',sans-serif] font-medium text-[#484848] text-xs mt-1">
          (4.1k) Customer Reviews
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="font-['Poppins',sans-serif] font-medium text-[#484848] text-2xl tracking-tight">
            {price}
          </span>
          <span className="font-['Poppins',sans-serif] text-[#ff4646] text-xs">
            Almost Sold Out
          </span>
        </div>
      </div>
    </div>
  );
}

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
