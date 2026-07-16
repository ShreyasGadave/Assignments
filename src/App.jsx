import Navbar from "../src/components/Navbar";
import Hero from "./components/Hero";
import BrandLogos from "./components/Brand";
import DealOfTheMonth from "./components/DealOfTheMonth";
import NewArrivals from "./components/NewArrivial";
import ProductFeature from "./components/ProductFeatured";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testmonial";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Fotter";

export default function App() {
  return (
    <div className=" relative mx-auto">
      <div className="sticky top-0 z-50 e shadow-sm">
        <Navbar />
      </div>
      <section className=" mx-auto">
        <section className=" w-full">
          <Hero />
          <BrandLogos />
        </section>

        <DealOfTheMonth/>
        <NewArrivals />
        {/* <ProductFeature /> */}
        <Features/>
        <Gallery />
        <Testimonials />
        <Subscribe />
        <Footer/>
      </section>
    </div>
  );
}
