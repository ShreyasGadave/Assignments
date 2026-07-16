import Navbar from "../src/components/Navbar";
import Hero from "./components/Hero";
import BrandLogos from "./components/Brand";
import DealOfTheMonth from "./components/DealOfTheMonth";
import NewArrivals from "./components/NewArrivial";

export default function App() {
  return (
    <div className=" relative mx-auto">
      <div className="sticky top-0 z-50 e shadow-sm">
        <Navbar />
      </div>
      <section className="max-w-6xl mx-auto">
        <section className=" w-full">
          <Hero />
          <BrandLogos />
        </section>

        <DealOfTheMonth/>
        <NewArrivals />
        {/* <ProductFeature /> */}
        {/* <Features /> */}
        {/* <Gallery /> */}
        {/* <Testimonials /> */}
        {/* <Subscribe /> */}
        {/* <Footer /> */}
      </section>
    </div>
  );
}
