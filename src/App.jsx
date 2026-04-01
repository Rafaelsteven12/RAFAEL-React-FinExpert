import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="font-sans text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <Pricing />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;