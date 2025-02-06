import React from "react";
import Sidebar from "./components/sidebar";
import picture from "./assets/picture.jpg";


import ContactForm from "./components/ContactForm";
import AboutSection from './components/AboutSection';


import { AnimatedBackground } from 'animated-backgrounds';
import HomeSection from "./components/Homesection";


import Services from "./components/Services";


import Skills from "./components/Skills";


import Education from "./components/Education";


import Projects from "./components/Projects";



import Contact from "./components/Contact";
function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (

    <div>
      <AnimatedBackground animationName="quantumField" 
       blendMode="normal"
       style={{ opacity: 0.2 }} 
       
       />
       <div className="text-white flex flex-col md:flex-row">
        <Sidebar scrollToSection={scrollToSection} />

        <main className="flex-1 md:ml-64 p-4 md:p-6">
        <HomeSection picture={picture} id="home" />


        <AboutSection id ="about"/>


        <Services id="services" />

        <Skills id="skills" />




        <Education id="education" />



        {/* <section>

        <div className="max-w-4xl">


            <h1 className=" text-center text-3xl md:text-4xl font-extrabold text-blue-600 mb-6 p-4">Projects</h1>
          </div>





          
        </section> */}


        
        <Projects id="work" />

        <Contact id="contact" />


      </main>
    </div>
    </div>
  );
}

export default App;
