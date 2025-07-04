import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import tailwind from "../assets/tailwind.png"; // Assuming you have a tailwind logo in your assets
import { img } from "framer-motion/client";

import FadeContent from "./FadeContent";

// Import tech logos (assuming these exist in the assets directory)
// You may need to adjust the imports based on actual file locations
const reactLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
const nodeLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
const expressLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg";
const reactNativeLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
const tailwindlogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" // Using React logo as placeholder

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  const scrollToSection = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };  

  
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };
  
  const serviceCardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Define services
  const services = [
    {
      id: "web",
      title: "Web Application Development",
      icon: "🌐",
      color: "from-blue-500 to-indigo-600",
      shortDesc: "Building responsive and dynamic web applications with modern frameworks.",
      fullDesc: "I design and develop custom web applications tailored to your specific needs. Using the latest technologies and frameworks, I create responsive, user-friendly, and scalable solutions that work flawlessly across all devices. My expertise covers frontend development with React.js and backend integration with Node.js and Express.",
      features: [
        "Custom UI/UX design for engaging user experiences",
        "Responsive layouts that work on all screen sizes",
        "Interactive elements using modern JavaScript frameworks",
        "RESTful API integration and development",
        "Database design and implementation"
      ],
      techs: [
        { name: "React.js", logo: reactLogo },
        { name: "Node.js", logo: nodeLogo },
        { name: "Express.js", logo: expressLogo },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Tailwind CSS", logo: tailwindlogo }
      ]
    },
    {
      id: "mobile",
      title: "Mobile Application Development",
      icon: "📱",
      color: "from-green-500 to-teal-600",
      shortDesc: "Creating native and cross-platform mobile applications for iOS and Android.",
      fullDesc: "I develop high-performance, feature-rich mobile applications that deliver exceptional user experiences across platforms. Whether you need a native app or a cross-platform solution, I work with modern frameworks like React Native to ensure your app functions seamlessly on both iOS and Android devices while maintaining a native feel.",
      features: [
        "Cross-platform development with React Native",
        "Native-like performance and user experience",
        "Integration with device features (camera, GPS, etc.)",
        "Offline functionality and data synchronization",
        "App store submission assistance"
      ],
      techs: [
        { name: "React Native", logo: reactNativeLogo },
        { name: "Node.js", logo: nodeLogo }
      ]
    },
    {
      id: "api",
      title: "API Development & Integration",
      icon: "🔄",
      color: "from-purple-500 to-pink-600",
      shortDesc: "Developing robust APIs and seamlessly integrating third-party services.",
      fullDesc: "I specialize in building secure, scalable, and well-documented APIs that power your applications and connect with external services. Whether you need a RESTful API for your web application or integration with third-party services, I create reliable and efficient solutions that ensure smooth data flow and functionality across your digital ecosystem.",
      features: [
        "RESTful API design and implementation",
        "Third-party API integration",
        "Authentication and authorization",
        "API documentation and testing",
        "Performance optimization and scaling"
      ],
      techs: [
        { name: "Node.js", logo: nodeLogo },
        { name: "Express.js", logo: expressLogo }
      ]
    }
  ];

  return (
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>

    <motion.section
      id="services"
      className="min-h-screen py-16 md:py-24 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={serviceCardVariants}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          >
            <span className="text-5xl">👨‍💻</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-blue-500 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Services
          </motion.h1>
          
          <motion.p
            className="text-white text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I offer specialized solutions tailored to meet your unique requirements.
            Click on a service to explore more details about what I can do for you.
          </motion.p>
        </motion.div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <React.Fragment key={service.id}>
              <motion.div
                className={`rounded-xl overflow-hidden cursor-pointer relative ${
                  selectedService === service.id ? "ring-2 ring-blue-500" : ""
                }`}
                variants={serviceCardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedService(
                  selectedService === service.id ? null : service.id
                )}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Gradient border */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                
                <div className="p-6 bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <motion.div
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-900/50"
                      animate={{ rotate: selectedService === service.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 text-blue-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    </motion.div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.shortDesc}</p>
                  
                  {/* Hover overlay effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 pointer-events-none flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredService === service.id && selectedService !== service.id ? 0.7 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span 
                      className="text-white font-medium px-4 py-2 rounded-full bg-blue-500/50 backdrop-blur-sm"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ 
                        scale: hoveredService === service.id && selectedService !== service.id ? 1 : 0.8,
                        opacity: hoveredService === service.id && selectedService !== service.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Mobile-only expanded content */}
              <AnimatePresence>
                {selectedService === service.id && (
                  <motion.div
                    className="md:hidden col-span-1 bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6">
                      <div className="flex flex-col gap-6">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-4">
                            {service.title}
                          </h3>
                          <p className="text-gray-300 mb-6">
                            {service.fullDesc}
                          </p>
                          
                          <h4 className="text-lg font-semibold text-blue-400 mb-3">
                            Features & Benefits
                          </h4>
                          <ul className="space-y-2 mb-6">
                            {service.features.map((feature, index) => (
                              <motion.li
                                key={index}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <span className="text-blue-500 mr-2">✓</span>
                                <span className="text-gray-300">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-blue-400 mb-4">
                            Technologies Used
                          </h4>
                          <div className="grid grid-cols-2 gap-4">
                            {service.techs.map((tech, index) => (
                              <motion.div
                                key={index}
                                className="bg-blue-900/30 p-4 rounded-lg flex flex-col items-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                              >
                                <img 
                                  src={tech.logo} 
                                  alt={tech.name} 
                                  className="w-10 h-10 mb-2"
                                />
                                <span className="text-sm text-gray-300">{tech.name}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </React.Fragment>
          ))}
        </div>

        {/* Desktop-only expanded service details */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="hidden md:block bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden mb-16"
              initial={{ opacity: 0, y: 50, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 50, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              {services
                .filter(service => service.id === selectedService)
                .map(service => (
                  <div key={service.id} className="p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-2/3">
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 mb-6">
                          {service.fullDesc}
                        </p>
                        
                        <h4 className="text-lg font-semibold text-blue-400 mb-3">
                          Features & Benefits
                        </h4>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, index) => (
                            <motion.li
                              key={index}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <span className="text-blue-500 mr-2">✓</span>
                              <span className="text-gray-300">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="md:w-1/3">
                        <h4 className="text-lg font-semibold text-blue-400 mb-4">
                          Technologies Used
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {service.techs.map((tech, index) => (
                            <motion.div
                              key={index}
                              className="bg-blue-900/30 p-4 rounded-lg flex flex-col items-center"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ y: -5 }}
                            >
                              <img 
                                src={tech.logo} 
                                alt={tech.name} 
                                className="w-12 h-12 mb-2"
                              />
                              <span className="text-sm text-gray-300">{tech.name}</span>
                            </motion.div>
                          ))}
                        </div>
                        
                        <motion.button
                          className="mt-6 w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => scrollToSection("#contact")

                          }
                        >
                          Discuss Your Project
                        </motion.button>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Process Section */}
        <motion.div
          className="mt-16"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-semibold text-blue-500 mb-10 text-center"
            variants={serviceCardVariants}
          >
            My Development Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { 
                step: 1, 
                title: "Discovery", 
                icon: "🔍", 
                desc: "I start by understanding your requirements, goals, and vision for the project." 
              },
              { 
                step: 2, 
                title: "Planning", 
                icon: "📝", 
                desc: "Creating detailed specifications and architectural plans for the development." 
              },
              { 
                step: 3, 
                title: "Development", 
                icon: "👨‍💻", 
                desc: "Building the solution with regular updates and milestone reviews." 
              },
              { 
                step: 4, 
                title: "Delivery", 
                icon: "🚀", 
                desc: "Testing, deployment, and ongoing support to ensure everything works perfectly." 
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 relative"
                variants={serviceCardVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-xl font-bold mb-6">
                  {process.step}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                  <span className="mr-2">{process.icon}</span>
                  {process.title}
                </h3>
                
                <p className="text-gray-300 text-sm">
                  {process.desc}
                </p>
                
                {index < 3 && (
                  <motion.div 
                    className="absolute top-10 -right-3 md:right-0 w-6 h-6 text-blue-500 hidden md:block"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          variants={serviceCardVariants}
        >
          <p className="text-gray-300 mb-6">
            Ready to start a project or have questions about my services?
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
    </FadeContent>
  );
};

export default ServicesSection;