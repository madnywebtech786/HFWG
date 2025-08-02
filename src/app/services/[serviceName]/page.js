"use client";
import React from "react";
import { useParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/autoplay";

export default function page() {
  const params = useParams();
  const name = params.serviceName.replace("-", " ");
  const universalGallery = [
    "/images/standard.png",
    "/images/universal.png",
    "/images/standard.png",
    "/images/universal.png",
  ];
  const standardGallery = [
    "/images/standard.png",
    "/images/universal.png",
    "/images/standard.png",
    "/images/universal.png",
  ];
  return (
    <>
      <Breadcrumb name={name} />
      <div className=" p-6 md:p-8 lg:p-12 2xl:p-20">
        {name == "staffing services" ? (
          <div className="flex gap-10 flex-col lg:flex-row items-center overflow-hidden service-card">
            <div className="w-full lg:w-1/2 max-h-[500px] rounded-2xl overflow-hidden relative">
              <img
                src="/images/AboutImg.png"
                alt="Precast Concrete Steps"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-40"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white capitalize">
                  {name}
                </h3>
                <p className="text-white">
                  Architectural precision for residential & commercial
                  applications
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
              <h2 className="text-4xl font-bold text-primary mb-6 capitalize">
                {name}
              </h2>
              <p className="text-black mb-6">
                Our precast concrete steps are manufactured with exacting
                tolerances using high-strength concrete mixes. Customizable in
                size, finish, and reinforcement to match any architectural
                requirement while exceeding safety standards.Our precast
                concrete steps are manufactured with exacting tolerances using
                high-strength concrete mixes. Customizable in size, finish, and
                reinforcement to match any architectural requirement while
                exceeding safety standards.
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
