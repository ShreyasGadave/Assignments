import imgImage5 from "../assets/Homepage/12.png";
import imgImage6 from "../assets/Homepage/12.png";
import imgImage7 from "../assets/Homepage/12.png";
import imgImage8 from "../assets/Homepage/12.png";
import imgImage9 from "../assets/Homepage/12.png";
import imgImage10 from "../assets/Homepage/12.png";
import imgImage11 from "../assets/Homepage/12.png";

function Gallery() {
  const photos = [
    imgImage5,
    imgImage6,
    imgImage7,
    imgImage8,
    imgImage9,
    imgImage10,
    imgImage11,
  ];

  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-['Volkhov'] text-[46px] text-[#484848]">
            Follow Us On Instagram
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-[#8A8A8A]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin.
          </p>
        </div>

        <div className="flex justify-center items-end gap-0 overflow-hidden">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`
                overflow-hidden
                transition-all
                duration-300
                hover:scale-105

                ${index === 0 ? "w-[180px] h-[220px]" : ""}
                ${index === 1 ? "w-[180px] h-[300px]" : ""}
                ${index === 2 ? "w-[180px] h-[250px]" : ""}
                ${index === 3 ? "w-[180px] h-[300px]" : ""}
                ${index === 4 ? "w-[180px] h-[250px]" : ""}
                ${index === 5 ? "w-[180px] h-[300px]" : ""}
                ${index === 6 ? "w-[180px] h-[220px]" : ""}
              `}
            >
              <img src={photo} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
