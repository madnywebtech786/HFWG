"use client";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Aperture, Star, User, Quote } from "lucide-react";
const testimonials = [
  { name: "Donald Jackman", role: "Content Creator" },
  { name: "Richard Nelson", role: "Instagram Influencer" },
  { name: "James Washington", role: "Marketing Manager" },
  { name: "Emily Carter", role: "Brand Consultant" },
  { name: "Michael Stone", role: "Photographer" },
  { name: "Sophia Blake", role: "Social Media Manager" },
];

function TestimonialCard({ name, location, quote }) {
  // derive initials
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
      <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary" />

      <div className="flex items-center mb-4 space-x-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
          {initials}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>

      <p className="text-gray-700 flex-grow mb-6 leading-relaxed">“{quote}”</p>

      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400" />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      name: "John M.",
      location: "Calgary",
      quote:
        "The team provided us with an amazing nurse who took great care of my father. We felt supported every step of the way.",
    },
    {
      name: "Rita S.",
      location: "Calgary",
      quote:
        "From the first call, their team was kind and responsive. I felt reassured knowing my family member was in good hands.",
    },
    {
      name: "Care Facility Manager",
      location: "Calgary",
      quote:
        "HFWG Support Care Services is our go-to for temporary staffing. They are responsive, flexible, and the staff they send is top-notch.",
    },
    {
      name: "Harpreet K.",
      location: "Calgary",
      quote:
        "Their application process was simple, and they matched me with the right employer within a week. Highly recommended!",
    },
  ];
  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div>
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <div className="w-50 bg-primary-gradient rounded-lg flex justify-center py-1 px-2 gap-2 items-center">
              <Aperture size={20} color="white" />
              <span className="rounded-lg text-white font-semibold uppercase">
                Our Happy Clients
              </span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            See how our reliable care and staffing services make a difference
            for families and organizations across Calgary.
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="grid gap-8 px-4 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>
      </section>
    </div>
  );
}
