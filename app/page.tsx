"use client";

import Projects from "./components/Projects";
import { motion } from "framer-motion";
import AnimatedHeading from "./components/AnimatedHeading";
export default function Home() {
  return (
<main>
    <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-red-900 opacity-70 -z-10"></div>
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-red-800 rounded-full opacity-20 blur-3xl animate-pulseSlow -z-10"></div>
          <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-red-700 rounded-full opacity-15 blur-3xl animate-pulseSlow -z-10"></div>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold leading-tight relative z-10 text-white"
        >
          Backend-focused developer building scalable business systems.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl relative z-10"
        >
          Python Developer, specializing in Python, APIs, Odoo Development, and system architecture.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 flex flex-col md:flex-row gap-4 relative z-10"
        >
          <a
            href="#projects"
            className="px-6 py-3 border border-gray-600 hover:bg-gray-800 transition duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-600 hover:bg-gray-800 transition duration-300"
          >
            Contact Me
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8 flex gap-4 flex-wrap justify-center text-gray-400 text-sm md:text-base relative z-10"
        >
          <span>Python</span>
          <span>FastAPI</span>
          <span>PostgreSQL</span>
          <span>Docker</span>
          <span>Odoo</span>
          <span>APIs</span>
        </motion.div>
      </section>


  <section id="about" className="py-20 bg-black text-white">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-gray-400 text-lg leading-relaxed">
        Python Developer, specializing in Python, APIs, and system architecture.
      </p>
    </div>
  </section>

  <section
    id="projects"
    className="min-h-screen flex flex-col items-center px-6 pt-24 bg-black text-white"
  >
    <h2 className="text-4xl font-bold mb-12 tracking-wide">
      Projects
    </h2>

    <div className="w-full max-w-5xl">
      <Projects />
    </div>
  </section>

  <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6">
    <h2 className="text-3xl font-bold">Contact</h2>
    {/* Contact form / email info goes here */}
  </section>
</main>

  )
}
