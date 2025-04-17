"use client";

import { useState } from "react";

export default function PartnershipEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    partnerType: "", // New field
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Failed to send the enquiry. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  if (submitted) {
    return (
      <div className="bg-white shadow sm:rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900">Thank You!</h3>
        <p className="mt-2 text-sm text-gray-500">
          We&apos;ve received your partnership enquiry and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6 p-6">
        <center><h3>Enquiry Form</h3></center>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
          <input
            type="text"
            name="company"
            id="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="partnerType" className="block text-sm font-medium text-gray-700">Type of Partner</label>
          <select
            name="partnerType"
            id="partnerType"
            required
            value={formData.partnerType}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="" disabled>Select partner type</option>
            <option value="Networking Partner">Networking Partner</option>
            <option value="Media Partner">Media Partner</option>
            <option value="Community Partner">Community Partner</option>
            <option value="Associated Partner">Associated Partner</option>
            <option value="Supporting Partner">Supporting Partner</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            id="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit Enquiry
          </button>
        </div>
      </form>
    </div>
  );
}
