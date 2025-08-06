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
            {/* Instagram */}
            <svg
              className="w-6 h-6 hover:scale-95 hover:cursor-pointer"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
            </svg>
            {/* Facebook */}
            <svg
              className="w-8 h-8 hover:scale-95 hover:cursor-pointer"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
            </svg>

            {/* LinkedIn */}
            <svg
              className="w-6 h-6 hover:scale-95 hover:cursor-pointer"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02c1.1 0 1.98-.88 1.98-1.98C6.98 4.38 6.1 3.5 4.98 3.5zM3 8.75h3.96V21H3V8.75zm6.25 0h3.8v1.68h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07V21H17v-5.63c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21H9.25V8.75z" />
            </svg>
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
