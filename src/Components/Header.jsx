import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // menu icons
import banner from "../assets/images/banner.png";
import { motion, useInView } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Create refs and inView hooks for different sections
  const heroRef = React.useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const textRef = React.useRef(null);
  const textInView = useInView(textRef, { once: true, amount: 0.3 });

  const imageRef = React.useRef(null);
  const imageInView = useInView(imageRef, { once: true, amount: 0.3 });

  return (
    <header className="bg-white w-full top-0 left-0 z-50 shadow-md">
      {/* Navbar */}
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <div id="logo">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="h-20 w-20" />
          </div>
        </div>

        {/* Navbar Links (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-blue-700 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-700 transition-colors duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#teachings"
              className="hover:text-blue-700 transition-colors duration-300"
            >
              Teachings
            </a>
          </li>
          <li>
            <a
              href="#events"
              className="hover:text-blue-700 transition-colors duration-300"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="#donation"
              className="hover:text-blue-700 transition-colors duration-300"
            >
              Donation
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-700 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Button (Desktop) */}
        <div id="btn" className="hidden md:block">
          <a
            href="#contact"
            className="bg-blue-700 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-800 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-gray-700 font-medium">
          <a href="#home" className="block hover:text-blue-700" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="block hover:text-blue-700" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#teachings" className="block hover:text-blue-700" onClick={() => setIsOpen(false)}>Teachings</a>
          <a href="#events" className="block hover:text-blue-700" onClick={() => setIsOpen(false)}>Events</a>
          <a href="#donation" className="block hover:text-blue-700" onClick={() => setIsOpen(false)}>Donation</a>
          <a href="#contact" className="block hover:text-blue-700" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 100 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        id="home" 
        className="bg-gray-50 py-16"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <motion.div 
            ref={textRef}
            initial={{ opacity: 0, x: -100 }}
            animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Body of Christ <br />
              <span className="text-blue-600">Go Ye Apologia Ministry</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Sharing the truth of the Gospel with passion, knowledge, and love.
            </p>
            <div className="mt-8">
              <a
                href="#about"
                className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 100 }}
            animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <img
              src={banner}
              alt="Ministry Illustration"
              className="w-64 md:w-80"
            />
          </motion.div>
        </div>
      </motion.section>
    </header>
  );
};

export default Header;