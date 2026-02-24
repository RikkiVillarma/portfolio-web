"use client";

import Projects from "./components/Projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen text-gray-900 overflow-hidden bg-white">

      {/* GLOBAL ENTERPRISE BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-white via-slate-50 to-indigo-100"></div>

        {/* Soft Accent Glow */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-slate-200 rounded-full opacity-30 blur-3xl"></div>
      </div>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Backend-focused developer building scalable business systems.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl"
        >
          Python Developer specializing in APIs, Odoo Development, and system architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 flex flex-col md:flex-row gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 px-6 text-center border-t border-gray-200"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            ERP Developer focused on backend systems, business automation,
            payroll logic, and scalable architecture.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center px-6 pt-24 border-t border-gray-200"
      >
        <h2 className="text-4xl font-bold mb-12 tracking-wide">
          Projects
        </h2>

        <div className="w-full max-w-5xl">
          <Projects />
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center px-6 border-t border-gray-200"
      >
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-600">
          Let’s build scalable systems together.
        </p>
      </section>

    </main>
  );
}