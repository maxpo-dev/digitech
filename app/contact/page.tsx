"use client";

import { useState } from "react";

// Define a type for form data
interface FormData {
  name: string;
  designation: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  interestedIn: string;
  message: string;
  termsAccepted: boolean;
  marketingConsent: boolean;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    designation: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    interestedIn: "",
    message: "",
    termsAccepted: true,
    marketingConsent: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const { name, value } = target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the enquiry. Please try again later.");
      }

      setSubmitted(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-pink-200 flex items-center justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-white py-8 px-6 shadow-lg rounded-lg">
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Thank You!</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We&apos;ve received your enquiry and will get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 to-gray-50 py-12 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Contact Us</h1>

        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-lg rounded-xl p-8">
          {["name", "designation", "company", "email", "phone", "country"].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
              <input
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                name={field}
                id={field}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 sm:text-sm focus:ring-2 focus:ring-indigo-500 transition-all"
                value={formData[field as keyof FormData] as string} // Make sure this is a string
                onChange={handleChange}
              />
            </div>
          ))}

          <div>
            <label htmlFor="interestedIn" className="block text-sm font-medium text-gray-700">Interested In</label>
            <select
              name="interestedIn"
              id="interestedIn"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 sm:text-sm focus:ring-2 focus:ring-indigo-500 transition-all"
              value={formData.interestedIn}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="Speaking">Speaking</option>
              <option value="Attending">Attending</option>
              <option value="Sponsoring">Sponsoring</option>
              <option value="Partnerships">Partnerships</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 sm:text-sm focus:ring-2 focus:ring-indigo-500 transition-all"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="termsAccepted"
              id="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="h-4 w-4 mt-1 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="termsAccepted" className="text-sm text-gray-700">
              I confirm that I have read, understand and accept the Terms & Conditions and <a href="/policy" className="text-indigo-600 underline">Privacy Policy</a> of FutureDigiTechSummit.
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="marketingConsent"
              id="marketingConsent"
              checked={formData.marketingConsent}
              onChange={handleChange}
              className="h-4 w-4 mt-1 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="marketingConsent" className="text-sm text-gray-700">
              I agree to allow FutureDigiTechSummit to contact me about their events and other marketing updates from time to time. Also, FutureDigiTechSummit may share my details with carefully vetted third parties and other participants to improve the overall event experience.
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="px-6 py-5">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900">Future DigiTech Summit</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                <dd className="mt-1 text-sm text-gray-900">+91 9741744869</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900">info@futuredigitech.com</dd>
                <dd className="mt-1 text-sm text-gray-900">tarannum.s@tasconmedia.com</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Event Address</dt>
                <dd className="mt-1 text-sm text-gray-900">Malaysia</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
