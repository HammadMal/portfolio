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
import VantaBackground from "./components/VantaBackground";

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative">
      {/* Vanta.js FOG Background with exact settings from URL */}
<VantaBackground
  effect="FOG"
  mouseControls={true}
  touchControls={true}
  gyroControls={false}
  minHeight={200}
  minWidth={200}
  highlightColor={0}
  midtoneColor={0}
  lowlightColor={3043243}  // 0x2e0ebb decimal
  baseColor={793508}       // 0xc14a4 decimal
  blurFactor={0.5}
  speed={1.5}
  zoom={0.9}
/>

      
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
  );
}

export default App;