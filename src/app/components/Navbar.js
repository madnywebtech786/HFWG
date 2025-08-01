"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Navbar() {
   const navLinks = [
      { name: 'HOME', path: '/' },
      { name: 'ABOUT', path: '/' },
      { name: 'SERVICES', path: '/' },
      { name: 'HOW IT WORKS', path: '/' },
      { name: 'CONTACT US', path: '/' },
   ];

   const ref = React.useRef(null)

   const [isScrolled, setIsScrolled] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 10); // <-- Use window.scrollY
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);
   return (
      <div>
         <div className="h-full mb-20">
            <nav className={`fixed top-0 left-0 bg-primary-gradient w-full flex items-center justify-between px-4 md:px-10 lg:px-20 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-white backdrop-blur-lg py-3 md:py-3" : "py-3 md:py-3"}`}>
               {/* Logo */}
               <div className="flex items-center gap-2">
                  <Image width={300} height={300} src="/images/hfwgLogo.jpg" alt="main logo" className={`w-28 h-15 rounded-xl`} />
               </div>

               {/* Desktop Nav */}
               <div className="hidden md:flex items-center gap-4 text-sm lg:gap-8 tracking-wide">
                  {navLinks.map((link, i) => (
                     <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-white" : "text-white"}`}>
                        {link.name}
                        <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                     </a>
                  ))}
               </div>

               {/* Desktop Right */}
               <div className="hidden md:flex items-center gap-2">
                  <button className={`px-3 py-2 rounded-xl text-sm text-green-700 hover:scale-95 font-semibold font-sans hover:cursor-pointer transition-all duration-200 ${isScrolled ? "text-black bg-white" : "bg-white text-black"}`}>
                     Call us Now
                  </button>
                  <button className={`px-3 py-2 rounded-xl text-sm text-green-700 hover:scale-95 font-semibold font-sans hover:cursor-pointer transition-all duration-200 ${isScrolled ? "text-black bg-white" : "bg-white text-black"}`}>
                     Take Action
                  </button>
               </div>

               {/* Mobile Menu Button */}
               <div className="flex items-center gap-3 md:hidden">
                  <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer`} fill="none" stroke="currentColor" color='white' strokeWidth="2" viewBox="0 0 24 24">
                     <line x1="4" y1="6" x2="20" y2="6" />
                     <line x1="4" y1="12" x2="20" y2="12" />
                     <line x1="4" y1="18" x2="20" y2="18" />
                  </svg>
               </div>

               {/* Mobile Menu */}
               <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                  <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                     <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                     </svg>
                  </button>

                  {navLinks.map((link, i) => (
                     <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                     </a>
                  ))}
                  <button className={`px-3 py-2 rounded-xl text-sm bg-primary-gradient text-white hover:scale-95 font-semibold font-sans hover:cursor-pointer transition-all duration-200 ${isScrolled ? "text-black bg-white" : "bg-white text-black"}`}>
                     Call us Now
                  </button>
                  <button className={`px-3 py-2 rounded-xl text-sm bg-primary-gradient text-white hover:scale-95 font-semibold font-sans hover:cursor-pointer transition-all duration-200 ${isScrolled ? "text-black bg-white" : "bg-white text-black"}`}>
                     Take Action
                  </button>
               </div>
            </nav>
         </div>
      </div>
   )
}
