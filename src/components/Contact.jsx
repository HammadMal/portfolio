import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
// Import Leaflet components
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import Leaflet for custom marker icons

// Leaflet uses images for its markers which need to be handled properly in React
// This is a fix for the marker icon issue
const LocationMap = () => {
  useEffect(() => {
    // Fix for marker icons in React Leaflet
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);

  // Karachi coordinates
  const position = [24.8607, 67.0011];

  return (
    <MapContainer 
      center={position} 
      zoom={12} 
      style={{ width: '100%', height: '100%', borderRadius: '0.5rem' }}
      attributionControl={true}
    >
      {/* Using CartoDB Voyager tiles which have better English language support */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      <Marker position={position}>
        <Popup>
          <div className="text-center">
            <p className="font-medium">Hammad Malik</p>
            <p className="text-sm">Karachi, Sindh, Pakistan</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const formRef = useRef();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Update form state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    
    emailjs
      .sendForm(
        "service_2gnqpji",
        "template_u0pz4uc",
        formRef.current,
        "-YI9gtyMonMW4acLf"
      )
      .then(
        (result) => {
          setStatus({ success: true, message: "Message sent successfully! I'll get back to you soon." });
          setFormState({ name: "", email: "", subject: "", message: "" });
          setLoading(false);
        },
        (error) => {
          setStatus({ success: false, message: "Oops! Something went wrong. Please try again later." });
          setLoading(false);
        }
      );
  };

  // Contact info items
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "Hammadmalik40a@gmail.com",
      href: "mailto:Hammadmalik40a@gmail.com",
      animation: "translateY(10px)"
    },
    {
      icon: "🔗",
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/hammad-malik-a4883a212/",
      animation: "translateX(10px)"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+92 302 0241682",
      href: "tel:+923020241682",
      animation: "translateY(-10px)"
    }
  ];

  return (
    <motion.section
      id="contact"
      className="min-h-screen py-16 md:py-24 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-blue-500 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch <span className="inline-block animate-pulse">📧</span>
          </motion.h1>
          
          <motion.p
            className="text-white text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'd love to hear from you! Whether you have a question, project idea,
            or just want to say hello, feel free to reach out.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-2xl font-semibold text-white mb-8"
              variants={itemVariants}
            >
              Contact Information
            </motion.h2>
            
            {/* Contact cards */}
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.label === "LinkedIn" ? "_blank" : undefined}
                rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                }}
                className="flex items-start p-5 bg-blue-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl transition-all duration-300 block"
              >
                <motion.div 
                  className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-2xl mr-4 flex-shrink-0"
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.7 } 
                  }}
                >
                  {item.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-1">{item.label}</h3>
                  <p className="text-blue-300">{item.value}</p>
                </div>
              </motion.a>
            ))}
            
            {/* Social presence */}
            <motion.div
              variants={itemVariants}
              className="mt-10"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Find me online</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/HammadMal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-300 hover:bg-blue-700/30 hover:text-blue-200 transition-all"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="GitHub Profile"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-6 h-6"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/hammad-malik-a4883a212/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-300 hover:bg-blue-700/30 hover:text-blue-200 transition-all"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn Profile"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-6 h-6"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </motion.a>
                
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-300 hover:bg-blue-700/30 hover:text-blue-200 transition-all"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Portfolio"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-6 h-6"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3"
            variants={containerVariants}
          >
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-blue-950/30 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 shadow-xl"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <div>
                  <label className="block text-blue-300 text-sm font-medium mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="from_name"
                    value={formState.name}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
                
                {/* Email Field */}
                <div>
                  <label className="block text-blue-300 text-sm font-medium mb-2" htmlFor="email">
                    Your Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="reply_to"
                    value={formState.email}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
              </div>
              
              {/* Subject Field */}
              <div className="mb-6">
                <label className="block text-blue-300 text-sm font-medium mb-2" htmlFor="subject">
                  Subject
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
              
              {/* Message Field */}
              <div className="mb-6">
                <label className="block text-blue-300 text-sm font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
              
              {/* Submit Button */}
              <motion.button
                type="submit"
                className={`w-full py-3 px-6 rounded-lg font-medium text-white ${
                  loading 
                    ? "bg-blue-700/50 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                } transition-all duration-300 relative overflow-hidden`}
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-blue-700"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2 }}
                  />
                )}
                <span className="relative z-10">
                  {loading ? "Sending..." : "Send Message"}
                </span>
              </motion.button>
              
              {/* Form submission status */}
              {status && (
                <motion.div
                  className={`mt-4 p-3 rounded-lg text-sm ${
                    status.success 
                      ? "bg-green-500/20 text-green-300" 
                      : "bg-red-500/20 text-red-300"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {status.message}
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </div>
        
        {/* Interactive map replacing the placeholder */}
        <motion.div
          className="mt-20 text-center"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-2xl font-semibold text-white mb-8"
            variants={itemVariants}
          >
            Based in Karachi, Pakistan
          </motion.h2>
          
          <motion.div
            className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20 overflow-hidden h-96"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            {/* Real map implementation */}
            <LocationMap />
          </motion.div>
          <motion.p
            className="text-gray-400 text-sm mt-4"
            variants={itemVariants}
          >
            Available for remote work worldwide
          </motion.p>
        </motion.div>
        
        {/* FAQ Section - Common questions */}
        <motion.div
          className="mt-20"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-2xl font-semibold text-white mb-8 text-center"
            variants={itemVariants}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {[
              {
                question: "What is your preferred way of communication?",
                answer: "Email is my preferred method for initial contact. For ongoing projects, I'm flexible with using tools like Slack, Microsoft Teams, or any platform that works best for you."
              },
              {
                question: "Are you available for freelance work?",
                answer: "Yes, I'm open to freelance opportunities and remote work. Feel free to reach out with your project details, and we can discuss how I can help."
              },
              {
                question: "What is your typical response time?",
                answer: "I usually respond to inquiries within 24 hours. For urgent matters, please mention it in your message, and I'll get back to you as soon as possible."
              },
              {
                question: "Do you work internationally?",
                answer: "Yes, I work with clients from around the world and am comfortable with different time zones. I'm flexible with scheduling meetings to accommodate various locations."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-blue-950/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.2)"
                }}
              >
                <h3 className="text-lg font-medium text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Call to action footer */}
        <motion.div 
          className="mt-16 text-center py-8 border-t border-blue-800/30"
          variants={containerVariants}
        >
          <motion.p 
            className="text-gray-300 mb-4"
            variants={itemVariants}
          >
            Thank you for visiting my portfolio! Looking forward to connecting with you.
          </motion.p>
          
          <motion.div
            className="flex justify-center space-x-8 mt-6"
            variants={itemVariants}
          >
            <motion.a
              href="#home"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Back to Top
            </motion.a>
            <motion.a
              href="#work"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#skills"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;