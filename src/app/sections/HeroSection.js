"use client";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function HeroSection() {
  return (
    <div className="lg:min-h-screen flex items-center">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        loop
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex h-auto lg:h-screen slide1Bg">
            <div className="w-11/12 lg:w-8/12 slideContentSide bg-primary/90 text-white h-full p-4 py-16 lg:p-20 flex items-center">
              <div className="w-11/12 lg:w-4/5 flex flex-col gap-5 lg:gap-6">
                <p className="text-xs lg:text-sm">
                  Empower your team with top-tier staffing solutions, carefully
                  matched to your exact needs and industry standards. Empower
                  your team with top-tier staffing solutions, carefully matched
                  to your exact needs and industry standards.
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold">
                  Premier Healthcare Staffing
                </h2>
                <p className="text-sm lg:text-base">
                  Our comprehensive staffing solutions connect you with
                  Registered Nurses, Licensed Practical Nurses, Personal Support
                  Workers, and Health Care Aides who uphold the highest
                  standards. Every candidate is rigorously screened,
                  credentialed, and continuously trained to deliver
                  compassionate, competent care and support critical operations
                  in any healthcare setting.
                </p>
                <div className="flex gap-4">
                  <button className="text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-primary bg-white rounded-2xl font-semibold cursor-pointer">
                    Explore Staffing
                  </button>
                  <button className="text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-primary bg-white rounded-2xl font-semibold cursor-pointer">
                    Contact Recruitment
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/12 lg:w-4/12"></div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex h-auto lg:h-screen slide2Bg">
            <div className="w-11/12 lg:w-8/12 slideContentSide bg-primary/90 text-white h-full p-4 py-16 lg:p-20 flex items-center">
              <div className="w-11/12 lg:w-4/5 flex flex-col gap-5 lg:gap-6">
                <p className="text-xs lg:text-sm">
                  Advanced workforce management solutions keep your facility
                  running smoothly and compliantly at all times.Advanced
                  workforce management solutions keep your facility running
                  smoothly and compliantly at all times.
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold">
                  Workforce Management Technology
                </h2>
                <p className="text-sm lg:text-base">
                  Our cloud-native scheduling platform automates shift
                  assignments, time tracking, and compliance
                  reporting eliminating spreadsheets and guesswork. Real-time
                  notifications, credential monitoring, and performance
                  analytics help you optimize staffing levels, reduce costs, and
                  improve caregiver satisfaction across all care environments.
                </p>
                <div className="flex gap-4">
                  <button className="text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-primary bg-white rounded-2xl font-semibold cursor-pointer">
                    See Demo
                  </button>
                  <button className="text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-primary bg-white rounded-2xl font-semibold cursor-pointer">
                    Request Access
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/12 lg:w-4/12"></div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex h-auto lg:h-screen slide3Bg">
            <div className="w-11/12 lg:w-8/12 slideContentSide bg-primary/90 text-white h-full p-4 py-16 lg:p-20 flex items-center">
              <div className="w-11/12 lg:w-4/5 flex flex-col gap-5 lg:gap-6">
                <p className="text-xs lg:text-sm">
                  Expert consulting services to optimize your staffing
                  strategies and maximize ROI in every department.Expert
                  consulting services to optimize your staffing strategies and
                  maximize ROI in every department.
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold">
                  Strategic Staffing Consulting
                </h2>
                <p className="text-sm lg:text-base">
                  Partner with our seasoned advisors to assess your workforce
                  needs, design tailored staffing models, and implement
                  continuous improvement processes. From market analysis to
                  talent development programs, we provide end-to-end guidance to
                  help you achieve operational excellence and sustainable
                  growth.
                </p>
                <div className="flex gap-4">
                  <button className="text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-primary bg-white rounded-2xl font-semibold cursor-pointer">
                    Learn More
                  </button>
                  <button className="text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-primary bg-white rounded-2xl font-semibold cursor-pointer">
                    Schedule Consultation
                  </button>
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
