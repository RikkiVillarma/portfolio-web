"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled ? "bg-gray-900 shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white">
          Rikki Villarma
        </div>

        <div className="space-x-6">
          <Link href="#home" className="text-white hover:text-gray-400">Home</Link>
          <Link href="#about" className="text-white hover:text-gray-400">About</Link>
          <Link href="#projects" className="text-white hover:text-gray-400">Projects</Link>
          <Link href="#contact" className="text-white hover:text-gray-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
