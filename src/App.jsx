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

import { AnimatedBackground } from "animated-backgrounds";

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative">

      <AnimatedBackground animationName="cosmicDust" 
       blendMode="soft-light
"   style={{ opacity: 0.5 }}  // Add any additional CSS styles
 />


      
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