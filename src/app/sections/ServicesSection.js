import React from "react";
import ServicesCard from "../components/ServicesCard";
import { Aperture } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Staffing Services",
    path: "/services/staffing-services",
    contactPath: "/contact?service=staffing-services",
    description: `We offer reliable staffing solutions for healthcare facilities, businesses, and
organizations. Our team ensures you get the right professionals on time and on
demand whether you need temporary, permanent, or contract staff.`,
    image: "/images/Staffing.webp",
  },
  {
    id: 2,
    title: "Registered Nurses (RNs)",
    path: "/services/registered-nurses",
    contactPath: "/contact?service=registered-nurses",
    description: `Our registered nurses provide expert clinical care, including medication
administration, health assessments, wound care, and ongoing monitoring. They
are committed to delivering safe and compassionate care in hospitals, clinics, and
home settings.`,
    image: "/images/RN.webp",
  },
  {
    id: 3,
    title: "Licensed Practical Nurses (LPNs)",
    path: "/services/licensed-practical-nurses",
    contactPath: "/contact?service=licensed-practical-nurses",
    description: `LPNs offer essential nursing care, assisting with treatment plans, administering
medications, and providing support under the supervision of registered nurses or
physicians. Ideal for long-term care facilities and home care needs.`,
    image: "/images/LPN.webp",
  },
  {
    id: 4,
    title: "Certified Nursing Assistants (CNAs)",
    path: "/services/certified-nursing-assistants",
    contactPath: "/contact?service=certified-nursing-assistants",
    description: `CNAs deliver hands-on care, including assistance with bathing, dressing, feeding,
and mobility. They ensure patient comfort and support nurses in maintaining a
safe and healthy environment.`,
    image: "/images/CNA.webp",
  },
  {
    id: 5,
    title: "Health Care Aides (HCAs)",
    path: "/services/health-care-aides",
    contactPath: "/contact?service=health-care-aides",
    description: `Our health care aides provide personal and supportive care, helping clients with
daily activities while promoting independence and dignity. They are experienced
in both private home care and institutional settings.`,
    image: "/images/HCA.webp",
  },
  {
    id: 6,
    title: "Personal Support Workers (PSW)",
    path: "/services/personal-support-workers",
    contactPath: "/contact?service=personal-support-workers",
    description: `PSWs assist clients with personal care, household tasks, and companionship.
They play a vital role in improving quality of life for seniors, individuals with
disabilities, or those recovering from illness.`,
    image: "/images/Support-worker.webp",
  },
  {
    id: 7,
    title: "Specialized Care Providers",
    path: "/services/specialized-care-providers",
    contactPath: "/contact?service=specialized-care-providers",
    description: `We supply highly trained professionals for complex care needs, such as dementia
support, palliative care, and post-surgical recovery. Our team ensures
compassionate and skilled attention for every client.`,
    image: "/images/Care-provider.webp",
  },
  {
    id: 8,
    title: "General Labourers",
    path: "/services/general-labourers",
    contactPath: "/contact?service=general-labourers",
    description: `We provide dependable general labour workers for businesses across industries.
From warehouse support to event setup, our workers are ready to get the job
done efficiently and safely.`,
    image: "/images/General-labour.webp",
  },
  {
    id: 9,
    title: "Cleaners",
    path: "/services/cleaners",
    contactPath: "/contact?service=cleaners",
    description: `Our professional cleaning staff ensures your space stays spotless and hygienic.
We offer residential, commercial, and healthcare facility cleaning services with
attention to detail and high standards of sanitation.`,
    image: "/images/Cleaners.webp",
  },
];

export default function ServicesSection() {
  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="text-center mb-16">
        <div className="flex justify-center">
          <div className="w-50 bg-primary-gradient rounded-lg flex justify-center py-1 px-2 gap-2 items-center">
            <Aperture size={20} color="white" />
            <span className="rounded-lg text-white font-semibold uppercase">
              Our Services
            </span>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 md:w-2/3 xl:w-3xl mx-auto">
          Comprehensive Care and Staffing Solutions for Every Need
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We provide a wide range of healthcare and staffing services tailored
          to individuals, families, and businesses
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
