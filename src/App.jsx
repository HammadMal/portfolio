import React from "react";
import Sidebar from "./components/sidebar";
import picture from "./assets/picture.jpg";
import ContactForm from "./components/ContactForm";
import AboutSection from './components/AboutSection';
import HomeSection from "./components/Homesection";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Particles from "./components/Particles";
import Aurora from "./components/Aurora";

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>

      {/* Aurora with fixed positioning to stay centered during scroll */}
<div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
  {/* Aurora as base layer */}
  <div className="absolute inset-0">
<Aurora
  colorStops={["#1E40AF", "#3730A3", "#6B21A8"]}
  blend={1}
  amplitude={0.3}
  speed={1}
/>
  </div>
  
  {/* <div className="absolute inset-0" style={{ width: '100%', height: '100vh' }}>
    <Particles
      particleColors={['#60A5FA', '#818CF8', '#A78BFA']}
      particleCount={2000}
      particleSpread={5}
      speed={0.05}
      particleBaseSize={15}
      moveParticlesOnHover={false}
      alphaParticles={false}
      disableRotation={false}
    />
  </div> */}
</div>
      
      <div className="min-h-screen relative">
        {/* Vanta.js FOG Background with exact settings from URL */}
        {/* <VantaBackground 
          effect="FOG"                  // Use FOG effect
          backgroundAlpha={1}           // Full opacity
          baseColor={1774713}          // Exact value from URL (0x1B1B59)
          blurFactor={0.3}            // Blur intensity
          highlightColor={0}           // Black highlights (0)
          lowlightColor={2297764}      // Exact value from URL (0x230F24)
          midtoneColor={0}             // Black midtones (0)
          scale={2}                    // Scale factor
          scaleMobile={4}              // Mobile scale
          speed={1.5}                  // Animation speed
          zoom={0.9}                   // Zoom level
          mouseControls={true}         // Enable mouse interaction
          touchControls={true}         // Enable touch interaction
          gyroControls={false}         // Disable gyro
        /> */}

        

        {/* Content overlay */}
        
        <div className="relative z-10 text-white flex flex-col md:flex-row">
          <Sidebar scrollToSection={scrollToSection} />
          

          <main className="flex-1 md:ml-64 p-4 md:p-6">
            <HomeSection picture={picture} id="home" />
            <AboutSection id="about"/>
            <Services id="services" />
            <Skills id="skills" />
            <Education id="education" />
            <Projects id="work" />
            <Contact id="contact" />


          </main>
        </div>
      </div>
    </>
  );
}

export default App;