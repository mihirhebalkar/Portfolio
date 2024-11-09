import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

import { ReactLenis } from 'lenis/react';
import Certifications from "./components/Certifications";

export const App = () => {
  return (
    <ReactLenis root>
    <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Education />
        <Certifications />
        
        <Contact />
        
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default App;
