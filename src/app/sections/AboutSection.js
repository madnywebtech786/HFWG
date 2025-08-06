import Image from "next/image";
import React from "react";
import {
  Aperture,
  UsersRound,
  UserSearchIcon,
  ArrowUpRight,
} from "lucide-react";

export default function AboutSection() {
  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="w-full flex flex-col lg:flex-row lg:items-center gap-10">
        <div className="w-full lg:w-[45%]">
          <Image
            src="/images/about-us.webp"
            width={400}
            height={400}
            alt="About Image"
            className="w-full md:w-2/3 lg:w-full mx-auto h-full rounded-2xl"
          />
        </div>
        <div className="w-full lg:w-[55%]">
          <div className="w-32 bg-primary-gradient rounded-lg flex py-1 px-2 gap-2 items-center">
            <Aperture size={20} color="white" />
            <span className="rounded-lg text-white font-semibold">
              ABOUT US
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold mt-4 mb-3">
            Bridging the Gap Between
            <br />
            Talent and Opportunity
          </h2>
          <p className="text-gray-500">
            At HFWG Support Care Services, we specialize in connecting
            compassionate care with those who need it most and linking skilled
            job seekers with employers who value reliability and dedication.
            Whether you're seeking healthcare support or staffing solutions, our
            team is committed to delivering excellence at every level
          </p>
          <div className="w-full lg:w-full flex flex-col md:flex-row gap-6 mt-5">
            <div className="w-full md:w-1/2 bg-white shadow-lg px-4 py-8 rounded-xl">
              <UsersRound
                size={45}
                className="bg-primary text-white rounded-xl py-2 mb-2"
              />
              <h3 className="text-xl font-bold mt-5">
                A Legacy of Excellence in
                <br />
                Staffing Solutions
              </h3>
              <p className="text-gray-600 mt-4">
                With years of industry experience, HFWG has built a reputation
                for sourcing toptier talent in healthcare, general labour, and
                more ensuring the right people are placed in the right roles.
              </p>
            </div>
            <div className="w-full md:w-1/2 bg-white shadow-lg px-4 py-8 rounded-xl">
              <UserSearchIcon
                size={45}
                className="bg-primary text-white rounded-xl py-2 mb-2"
              />
              <h3 className="text-xl font-bold mt-5">
                Tailored Solutions,
                <br />
                Proven Results
              </h3>
              <p className="text-gray-600 mt-4">
                Every client, every individual, every need is different. We take
                pride in offering customized support and staffing solutions
                designed for real-world impact.
              </p>
            </div>
          </div>
          <div>
            <button className="bg-primary-gradient flex gap-2 items-center py-3 px-4 rounded-xl mt-5 text-white hover:scale-95 hover:cursor-pointer">
              <span className="font-semibold text-sm">LEARN MORE</span>
              <ArrowUpRight size={20} className="inline" color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
