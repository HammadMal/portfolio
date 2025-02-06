import React from "react";
import { motion } from "framer-motion";

import reactlogo from "../assets/react-logo.png";
import nodelogo from "../assets/node-logo.png";
import expresslogo from "../assets/express-logo.png";
import reactnative from "../assets/react-native-logo.png";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Services data with descriptions
  const services = [
    {
      title: "Web Application Development",
      description: "Building responsive and dynamic web applications using modern frameworks and technologies."
    },
    {
      title: "Mobile Application Development",
      description: "Creating native and cross-platform mobile applications for iOS and Android platforms."
    },
    {
      title: "API Development & Integration",
      description: "Developing robust APIs and seamlessly integrating third-party services into applications."
    }
  ];

  // Technology logos data
  const techLogos = [
    { src: reactlogo, alt: "React" },
    { src: nodelogo, alt: "Node.js" },
    { src: expresslogo, alt: "Express.js" },
    { src: reactnative, alt: "React Native" }
  ];

  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="rounded-lg shadow-2xl min-h-screen flex flex-col items-center justify-center px-4 py-12 md:px-12 text-center"
    >
      <motion.div 
        className="max-w-4xl"
        variants={containerVariants}
      >
        <motion.h1 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-extrabold text-blue-500 mb-6"
        >
          My Services! 👨🏻‍💻
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-white mb-8 text-sm md:text-base leading-relaxed"
        >
          I specialize in delivering cutting-edge solutions to help you achieve your goals. 
          Below are the core services I provide:
        </motion.p>

        {/* Service List */}
        <motion.div 
          className="space-y-6 md:space-y-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="relative p-6 rounded-lg transition-all duration-300 group overflow-hidden"
            >
              {/* Blurred background */}
              <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm -z-10" />
              
              {/* Content container - no blur */}
              <div className="relative z-10">
                <motion.h2 
                  className="text-xl md:text-2xl font-semibold text-white mb-3"
                >
                  {service.title}
                </motion.h2>
                <motion.p 
                  className="text-white-700 text-sm md:text-base opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Logos */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mt-12"
          variants={containerVariants}
        >
          {techLogos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo.src}
              alt={logo.alt}
              variants={logoVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
              className="w-100 h-20"
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Services;