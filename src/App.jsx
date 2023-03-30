import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import partners from "./assets/partners.png"
import Features from "./components/Features";
import WhatWeOffer from "./components/WhatWeOffer";
import Courses from "./components/Courses";
import Connect from "./components/Connect";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="bg-[#F8F9FC] overflow-x-hidden">
      <Navbar />
      <Hero />
      <img src={partners} alt="Partners" className="w-full" />
      <Features />
      <WhatWeOffer />
      <Courses />
      <Testimonials />
      <Connect />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
