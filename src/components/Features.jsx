import svgPaths from "../assets/Homepage/svg-p6scw9xt3f";

function Features() {
  const features = [
    {
      title: "High Quality",
      sub: "crafted from top materials",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 51 50">
          <path d={svgPaths.p208eb680} fill="black" />
          <path d={svgPaths.p36f7d480} fill="black" />
        </svg>
      ),
    },
    {
      title: "Warranty Protection",
      sub: "Over 2 years",
      icon: (
        <svg className="w-10 h-12" fill="none" viewBox="0 0 38 50">
          <path d={svgPaths.p23a1d1c0} fill="black" />
          <path d={svgPaths.p2ffcf780} fill="black" />
          <path d={svgPaths.p347eb100} fill="black" />
        </svg>
      ),
    },
    {
      title: "Free Shipping",
      sub: "Order over 150 $",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 46 50">
          <path d={svgPaths.p2166e80} fill="black" />
        </svg>
      ),
    },
    {
      title: "24 / 7 Support",
      sub: "Dedicated support",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 50 50">
          <path d={svgPaths.p1f201480} fill="black" />
          <path d={svgPaths.pcd48b00} fill="black" />
          <path d={svgPaths.p464d480} fill="black" />
          <path d={svgPaths.p24bb1580} fill="black" />
          <path d={svgPaths.p21b86a00} fill="black" />
          <path d={svgPaths.p2abba100} fill="black" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white px-8 mx-auto shadow-[0px_20px_52px_0px_rgba(68,68,68,0.04)] py-12">
      <div className="max-w-7xl mx-auto flex justify-evenly gap-8">
        {features.map((f) => (
          <div key={f.title} className="flex items-center gap-4">
            <div className="shrink-0">{f.icon}</div>
            <div>
              <p className="font-['Poppins',sans-serif] font-medium text-[#484848] text-lg leading-normal">{f.title}</p>
              <p className="font-['Poppins',sans-serif] text-[#484848] text-sm leading-[26px]">{f.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;