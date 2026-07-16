import imgLogo from "../assets/Homepage/5.png";
import imgLogo1 from "../assets/Homepage/6.png";
import imgLogo2 from "../assets/Homepage/7.png";
import imgLogo3 from "../assets/Homepage/6.png";
import imgLogo4 from "../assets/Homepage/8.png";

function BrandLogos() {
  const logos = [imgLogo2, imgLogo3, imgLogo1, imgLogo4];

  return (
    <section className="w-full bg-white shadow-[0px_20px_52px_0px_rgba(68,68,68,0.04)] py-10">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-12 md:gap-20">
        {logos.map((logo, i) => (
          <div key={i} className="flex items-center justify-center">
            <img
              src={logo}
              alt={`Brand ${i + 1}`}
              className="h-10 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrandLogos;