import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";
import Services from "../Services/Services.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import About from "../About/About.jsx";
import Insurance from "../Insurance/Insurance.jsx";
import Faq from "../Faq/Faq.jsx";
import Contact from "../Contact/Contact.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";
import Footer from "../Footer/Footer.jsx";
import "./App.css";
export default function App() {
  return (
    <div className="site">
      <a className="site__skip" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main className="site__main" id="main-content">
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Insurance />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
