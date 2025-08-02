import React from "react";
import ServicesCard from "../components/ServicesCard";
import { Aperture } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Staffing Services",
    path: "/services/staffing-services",
    description:
      "Comprehensive staffing solutions connecting qualified healthcare professionals to facilities for efficient and reliable workforce support.",
    image: "/images/Aboutimg.png",
  },
  {
    id: 2,
    title: "Registered Nurses (RNs)",
    path: "/services/registered-nurses",
    description:
      "Highly skilled Registered Nurses delivering expert patient care, clinical assessment, and health management in diverse medical settings.",
    image: "/images/Aboutimg.png",
  },
  {
    id: 3,
    title: "Licensed Practical Nurses (LPNs)",
    path: "/services/licensed-practical-nurses",
    description:
      "Certified Licensed Practical Nurses providing compassionate bedside care, medication administration, and patient support under RN supervision.",
    image: "/images/Aboutimg.png",
  },
  {
    id: 4,
    title: "Certified Nursing Assistants (CNAs)",
    path: "/services/certified-nursing-assistants",
    description:
      "Dedicated CNAs offering personal care assistance, vital sign monitoring, and support for activities of daily living.",
    image: "/images/Aboutimg.png",
  },
  {
    id: 5,
    title: "Health Care Aides (HCAs)",
    path: "/services/health-care-aides",
    description:
      "Professional HCAs assisting with patient mobility, hygiene, and comfort to enhance quality of life in care environments.",
    image: "/images/Aboutimg.png",
  },
  {
    id: 6,
    title: "Personal Support Workers (PSW)",
    path: "/services/personal-support-workers",
    description:
      "Compassionate PSWs offering daily living assistance, companionship, and emotional support tailored to each patient’s needs.",
    image: "/images/Aboutimg.png",
  },
  {
    id: 7,
    title: "Specialized Care Providers",
    path: "/services/specialized-care-providers",
    description:
      "Expert specialized care providers delivering tailored treatment for complex conditions such as wound care and IV therapy.",
    image: "/images/Aboutimg.png",
  },
  {
    id: 8,
    title: "General Labourers",
    path: "/services/general-labourers",
    description:
      "Reliable general labourers skilled in facility maintenance, cleaning, and logistical support to ensure smooth operations.",
    image: "/images/Aboutimg.png",
  },
  {
    id: 9,
    title: "Cleaners",
    path: "/services/cleaners",
    description:
      "Professional cleaners dedicated to maintaining hygienic environments through thorough cleaning, sanitization, and infection control practices.",
    image: "/images/Aboutimg.png",
  },
];

export default function ServicesSection() {
  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="text-center mb-16">
        <div className="flex justify-center">
          <div className="w-50 bg-primary-gradient rounded-lg flex justify-center py-1 px-2 gap-2 items-center">
            <Aperture size={20} color="white" />
            <span className="rounded-lg text-white font-semibold uppercase">
              Our Services
            </span>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Our Process Simple & Effective
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Next, we craft a tailored strategy to connect the right people with
          the right roles. Our team leverages a comprehensive screening.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
