import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const contactInfo = [
    {
      label: "Email:",
      href: "mailto:Hammadmalik40a@gmail.com",
      text: "Hammadmalik40a@gmail.com"
    },
    {
      label: "LinkedIn:",
      href: "https://www.linkedin.com/in/hammad-malik-a4883a212/",
      text: "View Profile",
      isExternal: true
    },
    {
      label: "Phone:",
      href: "tel:+923020241682",
      text: "+92 302 0241682"
    }
  ];

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="rounded-lg shadow-md min-h-screen flex flex-col items-center justify-center px-4 md:px-12 text-center mt-10 md:mt-0"
    >
      <motion.div 
        className="max-w-4xl"
        variants={containerVariants}
      >
        <motion.h1 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-extrabold text-blue-500 mb-6"
        >
          Contact Me! 📧
        </motion.h1>

        <motion.div 
          className="mb-8 space-y-4"
          variants={containerVariants}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col md:flex-row items-center justify-center gap-2"
            >
              <motion.strong 
                className="text-lg text-white"
                whileHover={{ scale: 1.05 }}
              >
                {info.label}
              </motion.strong>
              <motion.a
                href={info.href}
                target={info.isExternal ? "_blank" : undefined}
                rel={info.isExternal ? "noopener noreferrer" : undefined}
                className="text-lg text-blue-500 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {info.text}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <ContactForm />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;