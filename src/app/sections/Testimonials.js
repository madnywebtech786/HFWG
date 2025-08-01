"use client";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Aperture } from "lucide-react";

const testimonials = [
  { name: "Donald Jackman", role: "Content Creator" },
  { name: "Richard Nelson", role: "Instagram Influencer" },
  { name: "James Washington", role: "Marketing Manager" },
  { name: "Emily Carter", role: "Brand Consultant" },
  { name: "Michael Stone", role: "Photographer" },
  { name: "Sophia Blake", role: "Social Media Manager" },
];

export default function Testimonials() {
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
            Our Process Simple & Effective
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Next, we craft a tailored strategy to connect the right people with
            the right roles. Our team leverages a comprehensive screening.
          </p>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 30 },
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        modules={[Autoplay]}
        className="w-4/5 mx-auto testimonials-swiper"
      >
        {testimonials.map((person, index) => (
          <SwiperSlide key={index}>
            <div className="text-sm w-full border border-gray-200 pb-6 pt-16 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5">
              <div className="flex flex-col items-center px-5 py-4 relative">
                <Image
                  width={300}
                  height={300}
                  loading="lazy"
                  className="h-24 w-24 absolute -top-14 rounded-full"
                  src="/images/Aboutimg.png"
                  alt={`userImage${index + 1}`}
                />
                <div className="pt-8 text-center">
                  <h2 className="text-lg font-medium text-gray-800">
                    {person.name}
                  </h2>
                  <p className="text-gray-800/80">{person.role}</p>
                </div>
              </div>
              <p className="text-gray-500 px-6 text-center">
                I have been using imagify for nearly two years, primarily for
                Instagram, and it has been incredibly user-friendly, making my
                work much easier.
              </p>
              <div className="flex justify-center pt-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="18"
                      height="18"
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                        fill="#FF532E"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
