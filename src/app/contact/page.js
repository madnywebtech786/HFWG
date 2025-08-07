"use client";
import React, { Suspense } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactUs from "../sections/ContactUs";

export default function page() {
  return (
    <>
      <Breadcrumb name={"Contact Us"} />
      <div className="p-6 md:p-8 lg:p-12 2xl:p-20">
        <Suspense fallback={<div>Loading form...</div>}>
          <ContactUs />
        </Suspense>
      </div>
    </>
  );
}
