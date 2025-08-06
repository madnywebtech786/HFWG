"use client";
import { Aperture } from "lucide-react";
import React, { useState } from "react";

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqsData = [
    {
      question: "What types of professionals do you provide?",
      answer:
        "We offer a wide range of certified staff including Registered Nurses (RNs), Licensed Practical Nurses (LPNs), PSWs, HCAs, CNAs, general labourers, and cleaners.",
    },
    {
      question: "How do I request staff for my facility or home care needs?",
      answer:
        "Simply contact us through our website or call us directly. We’ll schedule a consultation to understand your needs and match you with the right professionals.",
    },
    {
      question: "Are your caregivers and staff fully vetted?",
      answer:
        "Yes, all staff members undergo background checks, credential verification, and thorough screening to ensure quality and reliability.",
    },
    {
      question: "Can I apply to work with HFWG Support Care Services?",
      answer:
        "Absolutely! Visit our “Eligibility Check & Application” section to see if you qualify, submit your form, and upload your documents.",
    },
    {
      question: "Do you serve areas outside Calgary?",
      answer:
        "Currently, we primarily serve Calgary and nearby communities. Please contact us to check if we cover your specific location.",
    },
  ];
  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="w-full flex flex-col lg:flex-row  gap-5">
        <div className="w-full lg:w-[60%] flex flex-col px-3">
          <div className="w-24 bg-primary-gradient rounded-lg flex py-1 px-2 gap-2 items-center">
            <Aperture size={20} color="white" />
            <span className="rounded-lg text-white font-semibold">FAQs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-500 mt-4">
            Proactively answering FAQs boosts user confidence and cuts down on
            support tickets.
          </p>
          <div className="w-full mt-6 flex flex-col gap-4 items-start text-left">
            {faqsData.map((faq, index) => (
              <div
                key={index}
                className="flex flex-col items-start w-full border border-indigo-100 rounded-lg"
              >
                <div
                  className="flex items-center justify-between w-full cursor-pointer  p-4 "
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h2 className="text-sm font-semibold">{faq.question}</h2>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      openIndex === index ? "rotate-180" : ""
                    } transition-all duration-500 ease-in-out`}
                  >
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="#1D293D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className={`text-sm text-slate-600 px-4 transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "opacity-100 max-h-[300px] translate-y-0 p-4 pt-0"
                      : "opacity-0 max-h-0 -translate-y-2"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center lg:w-[40%]">
          <div className="flex flex-col lg:flex-row gap-4 my-4">
            <div className="bg-primary-gradient w-full py-10 lg:w-full flex justify-center items-center text-4xl font-bold text-white rounded-2xl font-mono">
              10k+
            </div>
            <div className="w-full py-10 lg:w-full flex justify-center items-center text-lg font-semibold border border-gray-300 rounded-2xl">
              <p className="text-center text-xl lg:text-base">
                Companies
                <br />
                Registered
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row gap-4 my-4">
            <div className="w-full py-10 lg:w-full flex justify-center items-center text-lg font-semibold border border-gray-300 rounded-2xl">
              <p className="text-center text-xl lg:text-base">
                Years of
                <br />
                Experience
              </p>
            </div>
            <div className="bg-primary-gradient w-full py-10 lg:w-full flex justify-center items-center text-4xl font-bold text-white rounded-2xl font-mono">
              13+
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 my-4">
            <div className="bg-primary-gradient w-full py-10 lg:w-full flex justify-center items-center text-4xl font-bold text-white rounded-2xl font-mono">
              98%
            </div>
            <div className="w-full py-10 lg:w-full flex justify-center items-center text-lg font-semibold border border-gray-300 rounded-2xl">
              <p className="text-center text-xl lg:text-base">
                Satisfied
                <br />
                Users
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
