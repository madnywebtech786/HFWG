import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="text-white bg-primary-gradient pt-12 px-6 md:px-16 lg:px-20">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-80">
          <Image
            src="/images/hfwgLogo.jpg"
            width={300}
            height={300}
            alt="logo"
            className="mb-4 w-28 h-15 rounded-xl"
          />
          <p className="text-sm">
            Proudly serving Calgary with compassionate healthcare staffing and
            support solutions. From RNs and PSWs to cleaners and general
            labourers, we connect the right people with the right care when and
            where it matters most.
          </p>
        </div>

        <div>
          <p className="text-xl font-bold text-white ">Useful Links</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">How it works</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-bold text-white ">Services</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <Link href="#">Staffing services</Link>
            </li>
            <li>
              <Link href="#">Registered Nurses (RNs)</Link>
            </li>
            <li>
              <Link href="#">Licensed Practical Nurses (LPNs)</Link>
            </li>
            <li>
              <Link href="#">Certified Nursing Assistants (CNAs)</Link>
            </li>
            <li>
              <Link href="#">Health Care Aides (HCAs)</Link>
            </li>
            <li>
              <Link href="#">Personal Support Workers (PSW)</Link>
            </li>
            <li>
              <Link href="#">Specialized Care Providers</Link>
            </li>
            <li>
              <Link href="#">General Labourers</Link>
            </li>
            <li>
              <Link href="#">Cleaners</Link>
            </li>
          </ul>
        </div>

        <div className="max-w-80">
          <p className="text-xl font-bold text-white ">Follow Us</p>
          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://www.facebook.com/profile.php?id=61579088861667"
              className=" transition-colors"
              target="_blank"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/hfwg2025/"
              className=" transition-colors"
              target="_blank"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@hfwg2025"
              className=" transition-colors"
              target="_blank"
            >
              <Image
                src={"/images/icons/tiktok.png"}
                width={60}
                height={60}
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 mt-8" />
      <div className="flex justify-center py-5">
        Copyright &copy; 2025. All rights reserved.
      </div>
    </div>
  );
}
