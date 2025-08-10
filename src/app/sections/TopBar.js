import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const TopBar = () => (
  <div className={`bg-primary-gradient !text-white backdrop-blur-sm py-2 text-sm border-b border-primary  dark:!text-white`}>
    <div className="w-full p-4 md:px-8 lg:px-12 2xl:px-20 flex flex-wrap justify-between items-center">
      <div className="flex space-x-6">
        <a
          href="mailto:hfwg2025@gmail.com"
          className="flex items-center hover:text-primary transition-colors"
        >
          <Mail className="h-4 w-4 mr-1" />
          hfwg2025@gmail.com
        </a>
        <a
          href="tel:+15877003395"
          className="flex items-center hover:text-primary transition-colors"
        >
          <Phone className="h-4 w-4 mr-1" />
          587-700-3395
        </a>
      </div>
      <div className="hidden lg:flex space-x-4 mt-2 md:mt-0 ">
        <a href="#" className="hover:text-primary transition-colors">
          <Facebook size={20} />
        </a>
        <a href="#" className="hover:text-primary transition-colors">
          <Instagram size={20} />
        </a>
        <a href="#" className="hover:text-primary transition-colors">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
