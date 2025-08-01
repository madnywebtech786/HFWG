"use client";
import { Aperture, FileText } from "lucide-react";
import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      setFiles([]);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

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
          Our Process Simple & Effective
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Next, we craft a tailored strategy to connect the right people with
          the right roles. Our team leverages a comprehensive screening.
        </p>
      </div>{" "}
      <form className="space-y-4 w-full lg:w-1/2 mx-auto p-6 bg-white shadow-2xl rounded-2xl">
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
              className="w-full border border-primary !text-primary placeholder:text-primary  rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              placeholder="John Doe"
              required
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
              className="w-full border border-primary !text-primary placeholder:text-primary  rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              placeholder="+1 (555) 123-4567"
              required
            />
          </div>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-primary mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-primary !text-primary placeholder:text-primary  rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            placeholder="User@gmail.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Type
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full border border-primary !text-primary placeholder:text-primary  rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none bg-no-repeat bg-[right_1rem_center] pr-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%239ca3af'><path d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/></svg>\")",
            }}
          >
            <option className="text-primary" value="">
              Select Type
            </option>
            <option className="text-primary" value="precast-steps">
              Employee
            </option>
            <option className="text-primary" value="window-well">
              Employer
            </option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="3"
            className="w-full border border-primary !text-primary placeholder:text-primary  rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            placeholder="Tell us about your project..."
            required
          ></textarea>
        </div>

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
              className="hidden"
              id="file-upload"
              accept=".pdf,.jpg,.jpeg,.png"
              multiple
              required
              onChange={handleFileUpload}
            />
            <div className="flex flex-col items-center">
              <FileText className="h-6 w-6 text-primary mb-3" />
              <p className="text-primary">
                Drag & drop files here or{" "}
                <span className="text-primary font-medium">browse</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Supports PDF, JPG, PNG (Max 10MB)
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            * File attachment is required for quote processing
          </p>
        </div>
        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-primary text-white font-bold py-3 px-4 rounded-xl transition-all disabled:opacity-50"
          whileHover={{ scale: submitting ? 1 : 1.02 }}
          whileTap={{ scale: submitting ? 1 : 0.98 }}
        >
          {submitting ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}
