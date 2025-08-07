"use client";
import { Aperture, FileText } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactUs() {
  const params = useSearchParams();
  const servicenameParam = params.get("service") || "";
  const roleParam = params.get("role") || "employee";
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    if (successMessage) {
      const reset = () => setSuccessMessage("");
      document
        .querySelector("form")
        .addEventListener("input", reset, { once: true });
      return () =>
        document.querySelector("form")?.removeEventListener("input", reset);
    }
  }, [successMessage]);
  const services = {
    "staffing-services": "Staffing Services",
    "registered-nurses": "Registered Nurses (RNs)",
    "licensed-practical-nurses": "Licensed Practical Nurses (LPNs)",
    "certified-nursing-assistants": "Certified Nursing Assistants (CNAs)",
    "health-care-aides": "Health Care Aides (HCAs)",
    "personal-support-workers": "Personal Support Workers (PSW)",
    "specialized-care-providers": "Specialized Care Providers",
    "general-labourers": "General Labourers",
    cleaners: "Cleaners",
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: services[servicenameParam] || "Staffing Services",
    message: "",
    role: roleParam,
    company: "",
    address: "",
    hiringPosition: "",
  });
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState("");

  // Pre-select service from query
  useEffect(() => {
    if (servicenameParam) {
      setFormData((prev) => ({ ...prev, service: services[servicenameParam] }));
    }
    if (roleParam) {
      setFormData((prev) => ({ ...prev, role: roleParam }));
    }
  }, [servicenameParam, roleParam]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (e) => {
    setFormData((prev) => ({ ...prev, role: e.target.value }));
  };

  const handleFileUpload = (e) => {
    const picked = Array.from(e.target.files);
    // append new files to existing ones
    setFiles((prev) => {
      // optional: filter out duplicates by name+size
      const all = [...prev, ...picked];
      const uniq = Array.from(
        all
          .reduce((map, f) => {
            const key = f.name + f.size;
            if (!map.has(key)) map.set(key, f);
            return map;
          }, new Map())
          .values()
      );
      return uniq;
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files);
    setFiles((prev) => {
      const all = [...prev, ...dropped];
      const uniq = Array.from(
        all
          .reduce((map, f) => {
            const key = f.name + f.size;
            if (!map.has(key)) map.set(key, f);
            return map;
          }, new Map())
          .values()
      );
      return uniq;
    });
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required.";
    if (!formData.phone.trim()) errs.phone = "Phone number is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!formData.role) errs.role = "Please select employee or employer.";
    if (formData.role === "employer") {
      if (!formData.company.trim()) errs.company = "Company is required.";
      if (!formData.address.trim()) errs.address = "Address is required.";
      if (!formData.hiringPosition.trim())
        errs.hiringPosition = "Position is required.";
    }
    if (!formData.service) errs.service = "Please select a service.";
    if (!formData.message.trim()) errs.message = "Message cannot be empty.";
    if (files.length === 0)
      errs.attachments = "At least one attachment is required.";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("inside");
    setErrors("");
    setSuccessMessage("");
    const validationErrors = validate();
    console.log("v", validationErrors);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, val]) => data.append(key, val));
      files.forEach((file) => data.append("attachments", file));

      const res = await fetch("/api/contact", { method: "POST", body: data });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Submission failed");

      setSuccessMessage("Your message has been sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
        role: "employee",
        company: "",
        address: "",
        hiringPosition: "",
      });
      setFiles([]);
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        response: "Something went wrong. Try again…",
      }));
    } finally {
      setSubmitting(false);
    }
  };
  const servicesOptions = [
    "Staffing Services",
    "Registered Nurses (RNs)",
    "Licensed Practical Nurses (LPNs)",
    "Certified Nursing Assistants (CNAs)",
    "Health Care Aides (HCAs)",
    "Personal Support Workers (PSW)",
    "Specialized Care Providers",
    "General Labourers",
    "Cleaners",
  ];

  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="text-center mb-16">
        <div className="flex justify-center">
          <div className="w-50 bg-primary-gradient rounded-lg flex justify-center py-1 px-2 gap-2 items-center">
            <Aperture size={20} color="white" />
            <span className="rounded-lg text-white font-semibold uppercase">
              Contact Us
            </span>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Get in Touch With Us
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Have questions or ready to get started? Fill out the form below and
          our team will connect with you shortly
        </p>
      </div>

      <form
        className="space-y-4 w-full lg:w-1/2 mx-auto p-6 bg-white shadow-2xl rounded-2xl"
        onSubmit={handleSubmit}
      >
        {/* Name & Phone */}
        <div className="flex gap-5">
          <div className="w-full">
            <label className="block text-sm font-medium text-primary mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              className="w-full border border-primary text-primary placeholder:text-primary rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-primary mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 (555) 123-4567"
              className="w-full border border-primary text-primary placeholder:text-primary rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="user@example.com"
            className="w-full border border-primary text-primary placeholder:text-primary rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Role Radio */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            I am a
          </label>
          <div className="flex gap-6">
            {["employee", "employer"].map((role) => (
              <label key={role} className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value={role}
                  checked={formData.role === role}
                  onChange={handleRoleChange}
                  className="text-primary focus:ring-primary"
                />
                <span className="text-primary capitalize">{role}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Employer-only fields */}
        {formData.role === "employer" && (
          <>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your Company Name"
                className="w-full border border-primary text-primary placeholder:text-primary rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
              {errors.company && (
                <p className="text-red-500 text-sm">{errors.company}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Company Address"
                className="w-full border border-primary text-primary placeholder:text-primary rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Hiring Position
              </label>
              <input
                type="text"
                name="hiringPosition"
                value={formData.hiringPosition}
                onChange={handleInputChange}
                placeholder="Position Title"
                className="w-full border border-primary text-primary placeholder:text-primary rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
              {errors.hiringPosition && (
                <p className="text-red-500 text-sm">{errors.hiringPosition}</p>
              )}
            </div>
          </>
        )}

        {/* Services Select */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Service Required
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full border border-primary text-primary rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none bg-no-repeat bg-[right_1rem_center] pr-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%239ca3af'><path d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/></svg>\")",
            }}
          >
            <option value="" disabled>
              Select Service
            </option>
            {servicesOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="3"
            placeholder="Tell us about your needs..."
            className="w-full border border-primary text-primary placeholder:text-primary rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        {/* Attachment */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Attachment (PDF, JPG, PNG)
          </label>
          <div
            className="file-upload-area rounded-xl p-4 text-center cursor-pointer border-dashed border-2 border-primary hover:border-primary transition-colors"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => document.getElementById("file-upload").click()}
          >
            <input
              type="file"
              id="file-upload"
              accept=".pdf,.jpg,.jpeg,.png"
              multiple
              name="attachments"
              className="hidden"
              onChange={handleFileUpload}
            />
            <div className="flex flex-col items-center">
              <FileText className="h-6 w-6 text-primary mb-3" />
              <p className="text-primary">
                Drag & drop files here or{" "}
                <span className="font-medium">browse</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Supports PDF, JPG, PNG (Max 10MB)
              </p>
            </div>
          </div>

          {/* show list of selected files */}
          {files.length > 0 && (
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              {files.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <span>{f.name}</span>
                </li>
              ))}
            </ul>
          )}

          <p className="text-xs text-gray-500 mt-2">
            * File attachment is required for processing
          </p>
        </div>
        {errors.attachments && (
          <p className="text-red-500 text-sm">{errors.attachments}</p>
        )}

        {successMessage && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {successMessage}
          </div>
        )}
        {errors.response && <p className="text-red-500">{errors.response}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="cursor-pointer w-full bg-primary text-white font-bold py-3 px-4 rounded-xl transition-all disabled:opacity-50"
        >
          {submitting ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}
