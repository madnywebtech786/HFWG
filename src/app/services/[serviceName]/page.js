"use client";
import React from "react";
import { useParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";
import Head from "next/head";

const serviceData = {
  "staffing-services": {
    title: "Staffing Services",
    image: "/images/Staffing.webp",
    description: `Staffing Services in Calgary
At HFWG Support Care Services, we understand the urgent need for qualified,
dependable staff. Whether you're a healthcare facility looking for last-minute shift
coverage or a business in need of reliable labourers, our staffing solutions are
tailored to meet your specific requirements. We vet and match candidates
carefully, ensuring quality and compliance every time.
We work closely with employers across Calgary to deliver pre-screened, job
ready professionals in various sectors including healthcare, general labour, and
cleaning. Our flexible staffing solutions allow you to scale your workforce
efficiently while maintaining high standards of service.`,
    keyPoints: [
      "Fast and reliable staff placement across multiple industries",
      "Custom staffing options: temporary, permanent, or contract",
      "Candidates vetted and trained to meet Alberta workplace standards",
    ],
    qualifications: [
      "Competitive candidates possess excellent communication and organizational skills.",
      "Experience in healthcare recruitment or human resources is an asset.",
      "Must meet provincial licensing and credential requirements for the position being filled.",
      "Strong background checks and references are mandatory.",
    ],
  },
  "registered-nurses": {
    title: "Registered Nurses (RNs)",
    image: "/images/RN.webp",
    description: `Registered Nurses (RNs)
Our Calgary-based Registered Nurses deliver expert clinical care across hospitals,
long-term care homes, and private residences. With years of hands-on
experience, our RNs are skilled in administering medications, managing chronic
conditions, and delivering compassionate, patient-centered care.
Whether you need short-term relief or long-term staffing, our RNs ensure
professional healthcare delivery that meets Alberta’s regulatory standards. They  also collaborate closely with interdisciplinary teams to support individualized care
plans and improve patient outcomes.`,
    keyPoints: [
      "Licensed professionals with advanced clinical training",
      "Experience in acute, chronic, and palliative care settings",
      "Skilled in medication administration, wound care, and assessments",
    ],
    qualifications: [
      "Must complete an approved Bachelor of Nursing (BN or BScN) from a post-secondary institution approved by Alberta’s Nursing Education Program Approval Committee (NEPAC).",
      "Must pass the NCLEX-RN national licensing exam.",
      "Must be registered with the College of Registered Nurses of Alberta (CRNA) and obtain a valid practice permit.",
      "Must complete a jurisprudence exam, show proof of English language proficiency, and submit a criminal record check.",
      "International applicants must have credentials assessed and may need to complete bridging programs.",
      "Required to maintain continuing competency and renew registration annually with CRNA.",
    ],
  },
  "licensed-practical-nurses": {
    title: "Licensed Practical Nurses (LPNs)",
    image: "/images/LPN.webp",
    description: `Licensed Practical Nurses (LPNs)
LPNs serve as an essential bridge between patients and primary care teams. Our
Calgary-based LPNs are experienced in providing basic nursing care under the
supervision of RNs or physicians. They assist with treatments, patient hygiene,
and day-to-day care needs.
LPNs from HFWG Support Care Services bring professionalism and compassion to
each patient interaction. They are an ideal staffing choice for facilities and families
needing dependable medical support without compromising on quality.`,
    keyPoints: [
      "Daily health monitoring and routine care",
      "Administer medications and dress wounds",
      "Ideal for long-term and rehabilitation settings",
    ],
    qualifications: [
      "Must graduate from a Government of Alberta–approved Practical Nurse Diploma program (usually 2 years).",
      "Must pass the Canadian Practical Nurse Registration Examination (CPNRE).",
      "Must register with the College of Licensed Practical Nurses of Alberta (CLPNA).",
      "Must complete jurisprudence module, submit background checks, and meet English language requirements.",
      "International applicants may be eligible through equivalency assessment or bridging programs.",
    ],
  },
  "certified-nursing-assistants": {
    title: "Certified Nursing Assistants (CNAs)",
    image: "/images/CNA.webp",
    description: `Certified Nursing Assistants (CNAs)
CNAs are crucial in supporting both nurses and patients. They provide hands-on
care and emotional support for individuals in a variety of settings across Calgary.
Our CNAs are trained to assist with mobility, hygiene, feeding, and reporting
changes in patient conditions. They bring warmth and attentiveness to every
interaction, helping patients maintain comfort and dignity in care environments.`,
    keyPoints: [
      "Personal hygiene and daily living assistance",
      "Basic health monitoring and emotional support",
      "Ideal for seniors, rehab, and palliative care",
    ],
    qualifications: [
      "In Alberta, these roles align with Health Care Aide (HCA) classification.",
      "No formal provincial regulation, but certification is required to work in publicly funded health settings.",
      "Must complete a recognized Health Care Aide program (typically 8 months, 695+ hours) based on Alberta's 2019 Provincial Curriculum.",
      "Must pass the Alberta HCA Provincial Exam and be enrolled in the Alberta HCA Directory.",
      "Prior training may be assessed for Substantial Equivalence or Prior Learning Assessment Recognition (PLAR).",
      "Roles include basic care, mobility, hygiene support, and monitoring under supervision of licensed nurses.",
    ],
  },
  "health-care-aides": {
    title: "Health Care Aides (HCAs)",
    image: "/images/HCA.webp",
    description: `Health Care Aides (HCAs)
Our HCAs are trained to help with the everyday tasks of living, offering respectful
and dignified support. Based in Calgary, they undergo Alberta-certified training
and background checks.
HCAs provide critical support for those with physical or cognitive limitations. Their
services include assistance with grooming, meals, mobility, and ensuring a safe,
clean living environment for clients.`,
    keyPoints: [
      "Alberta-trained aides for personal support",
      "Help with bathing, dressing, and eating",
      "Available for homes, group settings, or live-in care",
    ],
    qualifications: [
      "Same classification as Certified Nursing Assistants and Personal Support Workers in Alberta.",
      "Must complete an approved Alberta HCA Certificate Program and pass the provincial certification exam.",
      "Must register with the Alberta HCA Directory (mandatory for public sector employment).",
      "Applicants with relevant education or experience may undergo equivalency assessments.",
      "Must meet academic admission standards (English 20-2 or 30-2 or GED) and health requirements (immunizations, clear criminal check).",
      "Responsible for assisting with personal care, nutrition, ambulation, and simple medical tasks.",
    ],
  },
  "personal-support-workers": {
    title: "Personal Support Workers (PSWs)",
    image: "/images/Support-worker.webp",
    description: `Personal Support Workers (PSWs)
PSWs are the backbone of home and community care services. They help
individuals maintain independence at home by offering non-medical support and
companionship.
Our PSWs work closely with clients and families across Calgary to improve daily
living through personal care, mobility assistance, and emotional support. They are
vital for aging individuals or those with disabilities seeking comfort and
independence.`,
    keyPoints: [
      "In-home personal care and companionship",
      "Light housekeeping and medication reminders",
      "Tailored support for independent living",
    ],
    qualifications: [
      "In Alberta, PSWs are classified under Health Care Aides (HCAs).",
      "All the same requirements apply:",
      "Completion of an Alberta HCA Certificate Program (or equivalent).",
      "Registration in the HCA Directory.",
      "Eligibility through certification, PLAR, or Substantial Equivalence assessment.",
      "PSWs working in Alberta must meet all provincial standards for HCAs if working in government-funded positions.",
    ],
  },
  "specialized-care-providers": {
    title: "Specialized Care Providers",
    image: "/images/Care-provider.webp",
    description: `Specialized Care Providers
HFWG Support Care Services offers specialized care professionals trained to
assist individuals with complex medical or mental health needs. These caregivers are carefully matched with clients requiring dementia support, palliative care, or
post-operative recovery.
Our specialized providers work under clinical direction to deliver advanced care
while ensuring safety, comfort, and emotional well-being. Their services are ideal
for families seeking high-level, compassionate support in Calgary.`,
    keyPoints: [
      "Trained in dementia, Alzheimer’s, and post-surgical care",
      "One-on-one attention with safety and dignity in focus",
      "Ideal for high-acuity and long-term care situations",
    ],
    qualifications: [
      "No universal regulatory body; roles fall under Community Disability Services, Mental Health, or FSCD (Family Support for Children with Disabilities) programs.",
      "Qualifications vary based on job type but commonly include:",
      "Post-secondary education in human services, social work, or rehabilitation therapy.",
      "Experience or training in supporting persons with disabilities, mental health conditions, or behavioral challenges.",
      "Must meet employer and agency criteria, including background checks, First Aid/CPR certification, and targeted training (e.g., non-violent crisis intervention).",
      "Often employed by approved service providers contracted through Alberta government programs.",
    ],
  },
  "general-labourers": {
    title: "General Labourers",
    image: "/images/General-labour.webp",
    description: `General Labourers
Our general labour staffing solutions provide Calgary businesses with reliable,
physically capable workers for short- or long-term roles. These labourers are
screened for work ethic, punctuality, and physical fitness.
Whether it's warehouse support, construction site help, or event setup, our
general labourers are ready to meet your needs with minimal supervision and
maximum effort.`,
    keyPoints: [
      "Skilled in loading, lifting, and site setup",
      "Available for day jobs, seasonal roles, and full-time work",
      "Fully screened and safety-trained",
    ],
    qualifications: [
      "No formal education or certification required for general labourer positions.",
      "Physical ability and experience with tools or equipment are often required by employers.",
      "For those working in construction:",
      "May seek apprenticeship or trade certification under Construction Craft Labourer.",
      "Trade certification is voluntary, but applicants can apply via Alberta's Apprenticeship and Industry Training (AIT):",
      "Pathways include either a recognized program or sufficient hours of work experience (minimum 3,000 hours).",
      "Must follow workplace safety regulations and may require WHMIS or CSTS training.",
    ],
  },
  cleaners: {
    title: "Cleaners",
    image: "/images/Cleaners.webp",
    description: `Cleaners
HFWG provides professional cleaning services across Calgary, delivering
sparkling results for homes, offices, and healthcare settings. Our cleaners use
eco-friendly products and follow strict hygiene protocols.
Whether you need a one-time deep clean or ongoing maintenance, our cleaning
staff is punctual, reliable, and detail-oriented to maintain your space’s cleanliness
and safety.`,
    keyPoints: [
      "Residential, commercial, and medical facility cleaning",
      "Custom cleaning schedules available",
      "Trained in disinfection and sanitation best practices",
    ],
    qualifications: [
      "No certification or education requirements regulated by Alberta for most cleaning jobs.",
      "Must be physically fit, detail-oriented, and able to work independently or on teams.",
      "May be employed in:",
      "Residential (house cleaners, maid services),",
      "Commercial (office, retail),",
      "Institutional settings (schools, hospitals—may require additional screening).",
      "Common employer requirements:",
      "Criminal record check, valid driver's license (for mobile cleaning jobs), and First Aid/CPR may be preferred.",
      "In health care or food facilities, may need to complete infection prevention or hazardous materials handling courses.",
    ],
  },
};

export default function ServicePage() {
  const params = useParams();
  const key = params.serviceName;
  const service = serviceData[key];

  if (!service) {
    return <p className="p-8 text-red-600">Service not found.</p>;
  }

  const pageUrl = `https://hfwg-support-care.example.com/services/${service.slug}`;

  return (
    <>
      <Head>
        <title>{service.title}</title>
        <meta name="description" content={service.description} />
        <meta
          name="keywords"
          content="HFWG, support care, Calgary, staffing, healthcare, nursing, LPN, CNA, HCA, PSW"
        />
        <meta property="og:title" content={service.title} />
        <meta property="og:description" content={service.description} />
        <meta property="og:image" content={service.image} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.title} />
        <meta name="twitter:description" content={service.description} />
        <meta name="twitter:image" content={service.image} />
      </Head>
      <Breadcrumb name={service.title} />
      <div className="p-6 md:p-8 lg:p-12 2xl:p-20 space-y-12">
        {/* Hero Section */}
        <div className="lg:flex lg:items-center lg:space-x-10 service-card">
          <div className="relative w-full lg:w-1/2 h-64 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-40" />
          </div>
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <h2 className="text-3xl lg:text-4xl text-primary font-bold mb-4">
              {service.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-col gap-3 mt-3">
              <h6 className="text-xl font-bold">Key points</h6>
              {service.keyPoints && (
                <ul className="list-disc list-inside text-gray-800 space-y-2">
                  {service.keyPoints.map((kp, i) => (
                    <li key={i}>{kp}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Qualifications Section */}
        <section className="bg-primary-extra-light p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Qualifications Required
          </h2>
          <ul className="space-y-4">
            {service.qualifications.map((qual, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle2 className="mt-1 flex-shrink-0 text-primary" />
                <span className="text-gray-800">{qual}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
