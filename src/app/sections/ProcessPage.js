import React from "react";
import { Aperture, Route } from "lucide-react";
export default function ProcessPage() {
  const steps = [
    {
      id: 1,
      title: "Initial Consultation",
      description:
        "We discuss your needs, goals, and staffing or care requirements to understand how we can best support you.",
      align: "left",
      color: "bg-primary-gradient text-white",
    },
    {
      id: 2,
      title: "Tailored Strategy",
      description:
        "Our team develops a personalized plan to match you with the right professionals or services.",
      align: "right",
      color: "bg-slate-100 text-gray-800",
    },
    {
      id: 3,
      title: "Eligibility Check & Application",
      description:
        "Easily check if you qualify and fill out our secure form to get started, with the option to upload required documents.",
      align: "left",
      color: "bg-primary-gradient text-white",
    },
    {
      id: 4,
      title: "Screening & Matching",
      description:
        "We carefully screen and match candidates or care staff to ensure the perfect fit for your situation.",
      align: "right",
      color: "bg-slate-100 text-gray-800",
    },
    {
      id: 5,
      title: "Ongoing Support & Follow-up",
      description:
        "We provide continued assistance and support, staying connected to guarantee satisfaction and quality care.",
      align: "left",
      color: "bg-primary-gradient text-white",
    },
  ];
  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20" id="howWork">
      <section>
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <div className="w-50 bg-primary-gradient rounded-lg flex justify-center py-1 px-2 gap-2 items-center">
              <Aperture size={20} color="white" />
              <span className="rounded-lg text-white font-semibold">
                HOW IT WORKS
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

        <div className="relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full z-0"></div>

          {steps.map((step) => (
            <div
              key={step.id}
              className={`relative z-10 mb-10 flex flex-col-reverse md:flex-row items-center gap-24 md:gap-16 ${
                step.align === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Step Content Box */}
              <div className="md:w-1/2 px-4">
                <div className={`p-6 py-12 rounded-xl shadow-xl ${step.color}`}>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-sm mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Icon */}
              <div
                className={`md:w-1/2 px-4 flex justify-center mb-4 md:mb-0 ${
                  step.align === "right" ? "md:justify-end" : "md:justify-start"
                }`}
              >
                <div className="text-4xl md:text-5xl">
                  <Route
                    size={60}
                    className="bg-white shadow-2xl text-primary rounded-xl px-3 py-2"
                  />
                </div>
              </div>

              {/* Step Number */}
              <div className="absolute top-[25%] md:top-[35%] left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-12 h-12 rounded-full bg-white border-4 border-green-700 flex items-center justify-center shadow-lg">
                  <span className="text-green-700 font-bold text-lg">
                    {String(step.id).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
