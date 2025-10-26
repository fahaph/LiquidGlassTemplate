import "./App.css";
import Nav from "./Components/Nav.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Services from "./Components/Services.jsx";
import Gallery from "./Components/Gallery.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx"

export default function App() {
  return (
    <>
      <Nav />
      <div className="content">
        <Home />
        <About />
        <Services />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
