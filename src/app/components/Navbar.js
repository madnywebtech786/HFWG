"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TopBar from "../sections/TopBar";

export default function Navbar() {
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about-us" },
    {
      name: "SERVICES",
      path: "/",
      dropdown: [
        { name: "Staffing Services", path: "/services/staffing-services" },
        {
          name: "Registered Nurses (RNs)",
          path: "/services/registered-nurses",
        },
        {
          name: "Licensed Practical Nurses (LPNs)",
          path: "/services/licensed-practical-nurses",
        },
        {
          name: "Certified Nursing Assistants (CNAs)",
          path: "/services/certified-nursing-assistants",
        },
        {
          name: "Health Care Aides (HCAs)",
          path: "/services/health-care-aides",
        },
        {
          name: "Personal Support Workers (PSW)",
          path: "/services/personal-support-workers",
        },
        {
          name: "Specialized Care Providers",
          path: "/services/specialized-care-providers",
        },
        { name: "General Labourers", path: "/services/general-labourers" },
        { name: "Cleaners", path: "/services/cleaners" },
      ],
    },
    { name: "HOW IT WORKS", path: "/#howWork" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`${
        isScrolled ? "fixed top-0" : "fixed top-0"
      } z-50 transition-all duration-300   w-full ${
        isScrolled ? " backdrop-blur-md" : " backdrop-blur-sm"
      }`}
    >
      <TopBar isScrolled={isScrolled} />
      <nav
        className={` w-full flex bg-white py-3 items-center justify-between px-4 md:px-10 lg:px-20 transition-all duration-500 z-50`}
      >
        {/* Logo */}
        <Image
          src="/images/hfwgLogo.jpg"
          width={112}
          height={60}
          alt="main logo"
          className="rounded-xl"
        />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4 text-sm lg:gap-8 tracking-wide relative text-white">
          {navLinks.map((link, idx) => {
            if (link.dropdown) {
              return (
                <div
                  key={idx}
                  className={`relative group text-primary `}
                >
                  <a
                    href={link.path}
                    className="cursor-pointer flex gap-3 items-center"
                  >
                    {link.name}
                    <ChevronDown
                      size={20}
                      className="group-hover:rotate-180 duration-200"
                    />
                  </a>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {link.dropdown.map((item, j) => (
                      <a
                        key={j}
                        href={item.path}
                        className="text-xs block px-4 py-2 text-primary hover:bg-primary/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <a
                key={idx}
                href={link.path}
                className={`cursor-pointer text-primary`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <Link href={"/contact"}>
            <button
              className={`cursor-pointer px-3 py-2 rounded-xl text-sm bg-primary-gradient text-white hover:scale-95 font-semibold transition-all duration-200  `}
            >
              Apply Now
            </button>
          </Link>
          <Link href={"/contact?role=employer"}>
            <button
              className={`cursor-pointer px-3 py-2 rounded-xl text-sm bg-primary-gradient text-white hover:scale-95 font-semibold transition-all duration-200  `}
            >
              Hire Now
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div
          className={`flex items-center gap-3 text-primary lg:hidden `}
        >
          <svg
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="h-6 w-6 cursor-pointer"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-gray-800 transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>

          {navLinks.map((link, idx) => {
            if (link.dropdown) {
              return (
                <div key={idx} className="w-max px-4">
                  <button
                    onClick={() => setOpenServices(!openServices)}
                    className="w-full text-center flex gap-3 items-center justify-center"
                  >
                    {link.name}
                    <ChevronDown
                      size={20}
                      className={`${
                        openServices ? "rotate-180" : "rotate-0"
                      } duration-200 `}
                    />
                  </button>
                  {openServices && (
                    <div className="mt-2 bg-white rounded-2xl shadow-inner w-full">
                      {link.dropdown.map((item, j) => (
                        <a
                          key={j}
                          href={item.path}
                          className="text-sm block px-4 py-2 text-primary hover:bg-primary/10"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <a
                key={idx}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            );
          })}
          <button className="px-3 py-2 rounded-xl text-sm bg-primary-gradient text-white">
            Call us Now
          </button>
          <button className="px-3 py-2 rounded-xl text-sm bg-primary-gradient text-white">
            Take Action
          </button>
        </div>
      </nav>
    </div>
  );
}
