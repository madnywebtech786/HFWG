import AboutSection from "./sections/AboutSection";
import ContactUs from "./sections/ContactUs";
import FAQsSection from "./sections/FAQsSection";
import ProcessPage from "./sections/ProcessPage";
import ServicesSection from "./sections/ServicesSection";
import Testimonials from "./sections/Testimonials";
import WhyChooseUs from "./sections/WhyChooseUs";

export default function Home() {
  return (
    <div>
       <AboutSection/>
       <ServicesSection/>
       <WhyChooseUs />
       <ProcessPage/>
       <Testimonials/>
       <FAQsSection/>
       <ContactUs />
    </div>
  );
}
