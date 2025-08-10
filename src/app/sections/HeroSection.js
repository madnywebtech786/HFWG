"use client";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="lg:min-h-screen flex items-center pt-32">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        loop
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex h-auto lg:h-screen slide1Bg ">
            <div className="min-h-[380px] w-11/12 lg:w-8/12 slideContentSide bg-primary/90 text-white h-full p-4 py-16 lg:p-20 flex items-center">
              <div className="w-11/12 lg:w-4/5 flex flex-col gap-5 lg:gap-6">
                <h2 className="text-3xl md:text-5xl xl:text-6xl font-semibold">
                  Professional Care You Can Trust
                </h2>
                <p className="text-sm lg:text-lg">
                  We offer compassionate healthcare, personal support, and home
                  care services tailored to each client's needs with dignity and
                  respect at the core of everything we do.
                </p>
                <div className="flex gap-4">
                  <Link href={"/contact"}>
                    <button className="text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-primary bg-white rounded-2xl font-semibold cursor-pointer">
                      Get Support Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-1/12 lg:w-4/12"></div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex h-auto lg:h-screen slide2Bg ">
            <div className="min-h-[380px] w-11/12 lg:w-8/12 slideContentSide bg-primary/90 text-white h-full p-4 py-16 lg:p-20 flex items-center">
              <div className="w-11/12 lg:w-4/5 flex flex-col gap-5 lg:gap-6">
                <h2 className="text-3xl md:text-5xl xl:text-6xl font-semibold">
                  Join a Team That Cares
                </h2>
                <p className="text-sm lg:text-lg">
                  Whether you're a certified healthcare professional or seeking
                  general labour work, we have rewarding opportunities waiting
                  for you.
                </p>
                <div className="flex gap-4">
                  <Link href={"/contact"}>
                    <button className="text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-primary bg-white rounded-2xl font-semibold cursor-pointer">
                      Apply for a Job
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-1/12 lg:w-4/12"></div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex h-auto lg:h-screen slide3Bg ">
            <div className="min-h-[380px] w-11/12 lg:w-8/12 slideContentSide bg-primary/90 text-white h-full p-4 py-16 lg:p-20 flex items-center">
              <div className="w-11/12 lg:w-4/5 flex flex-col gap-5 lg:gap-6">
                <h2 className="text-3xl md:text-5xl xl:text-6xl font-semibold">
                  Reliable Staffing Solutions for Your Business
                </h2>
                <p className="text-sm lg:text-lg">
                  From healthcare assistants to general labourers, we connect
                  employers with skilled, dependable workers fast and
                  hassle-free.
                </p>
                <div className="flex gap-4">
                  <Link href={"/contact?type=employer"}>
                    <button className="text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-primary bg-white rounded-2xl font-semibold cursor-pointer">
                      Hire Staff Today
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-1/12 lg:w-4/12"></div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="flex h-auto lg:h-screen slide4Bg ">
            <div className="min-h-[380px] w-11/12 lg:w-8/12 slideContentSide bg-primary/90 text-white h-full p-4 py-16 lg:p-20 flex items-center">
              <div className="w-11/12 lg:w-4/5 flex flex-col gap-5 lg:gap-6">
                <h2 className="text-3xl md:text-5xl xl:text-6xl font-semibold">
                  Excellence in Every Service We Provide
                </h2>
                <p className="text-sm lg:text-lg">
                  At HFWG, we’re more than a service provider we’re a dedicated
                  partner in your well-being and success, committed to
                  empowering lives through care and opportunity.
                </p>
                <div className="flex gap-4">
                  <Link href={"/about-us"}>
                    <button className="text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-primary bg-white rounded-2xl font-semibold cursor-pointer">
                      Learn More About Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-1/12 lg:w-4/12"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
