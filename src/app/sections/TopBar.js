import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const TopBar = () => (
  <div className={`bg-primary-gradient !text-white backdrop-blur-sm py-2 text-sm border-b border-primary  dark:!text-white`}>
    <div className="w-full p-4 md:px-8 lg:px-12 2xl:px-20 flex flex-wrap justify-between items-center">
      <div className="flex space-x-6">
        <a
          href="mailto:hfwg2025@gmail.com"
          className="flex items-center  transition-colors"
        >
          <Mail className="h-4 w-4 mr-1" />
          hfwg2025@gmail.com
        </a>
        <a
          href="tel:+15877003395"
          className="flex items-center  transition-colors"
        >
          <Phone className="h-4 w-4 mr-1" />
          587-700-3395
        </a>
      </div>
      <div className="hidden lg:flex space-x-4 mt-2 md:mt-0 ">
        <a href="https://www.facebook.com/profile.php?id=61579088861667" target="_blank" className=" transition-colors">
          <Facebook size={20} />
        </a>
        <a href="https://www.instagram.com/hfwg2025/" target="_blank" className=" transition-colors">
          <Instagram size={20} />
        </a>
        <a href="https://www.tiktok.com/@hfwg2025" target="_blank" className=" transition-colors">
          <Image src={'/images/icons/tiktok.png'} width={60} height={60} className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
