"use client";
import { Aperture, FileText } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactUs() {
  const params = useSearchParams();
  const servicenameParam = params.get("service") || "";
  const roleParam = params.get("role") || "employee";

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
    service: services[servicenameParam],
    message: "",
    role: roleParam,
    company: "",
    address: "",
    hiringPosition: "",
  });
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

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
    setFiles(Array.from(e.target.files));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFiles(Array.from(e.dataTransfer.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, val]) => data.append(key, val));
      files.forEach((file) => data.append("attachments", file));

      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Submission failed");

      // success: clear form
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
      setError(err.message);
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
              required
              className="w-full border border-primary text-primary placeholder:text-primary rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            />
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
              required
              className="w-full border border-primary text-primary placeholder:text-primary rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            />
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
            required
            className="w-full border border-primary text-primary placeholder:text-primary rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          />
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
                required
                className="w-full border border-primary text-primary placeholder:text-primary rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
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
                required
                className="w-full border border-primary text-primary placeholder:text-primary rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
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
                required
                className="w-full border border-primary text-primary placeholder:text-primary rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
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
            required
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
            required
            className="w-full border border-primary text-primary placeholder:text-primary rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          />
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
              required
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
          <p className="text-xs text-gray-500 mt-2">
            * File attachment is required for processing
          </p>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-primary text-white font-bold py-3 px-4 rounded-xl transition-all disabled:opacity-50"
        >
          {submitting ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}
