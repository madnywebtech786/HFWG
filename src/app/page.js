import React, { Suspense } from "react";

import AboutSection from "./sections/AboutSection";
import ContactUs from "./sections/ContactUs";
import FAQsSection from "./sections/FAQsSection";
import HeroSection from "./sections/HeroSection";
import ProcessPage from "./sections/ProcessPage";
import ServicesSection from "./sections/ServicesSection";
import Testimonials from "./sections/Testimonials";
import WhyChooseUs from "./sections/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessPage />
      <Testimonials />
      <FAQsSection />
      <Suspense
        fallback={
          <div className="py-16 text-center">Loading contact form…</div>
        }
      >
        <ContactUs />
      </Suspense>{" "}
    </div>
  );
}
