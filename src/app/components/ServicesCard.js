"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ServicesCard({ service }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const threshold = 12;

  const handleMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({ x: y * -threshold, y: x * threshold });
  };

  const handleLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer w-full lg:max-w-90 bg-white hover:shadow-2xl"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      aria-label={service.title}
    >
      <div className="relative h-80 w-full">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800">
        {service.title}
      </h3>
      <p className="text-sm px-4 pb-4 text-gray-600">{service.description}</p>
      <div className="mb-6 flex gap-1 items-center px-5">
        <p className="py-2 text-primary hover:cursor-pointer rounded-lg">
          Read More
        </p>
        <ArrowUpRight size={20} className="inline" color="green" />
      </div>
    </div>
  );
}
