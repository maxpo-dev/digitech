"use client"

import { useState } from "react"

export default function BrochureRequestPage() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    email: "",
    country: "",
    phone: "",
    interestedIn: "",
    message: "",
    acceptTerms: true, // Default checked
    allowContact: true, // Default checked
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      const response = await fetch("/api/breg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to request brochure")
      }

      setSubmitted(true)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("Something went wrong. Please try again later.")
      }
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="bg-white shadow-xl rounded-lg p-12 text-center max-w-2xl w-full">
          <h2 className="text-3xl font-semibold text-gray-800">Thank You!</h2>
          <p className="mt-3 text-lg text-gray-600">
            The brochure and agenda have been sent to your email.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-8 mb-4">
      <div className="bg-white shadow-xl rounded-lg p-12 w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Download Brochure & Agenda</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border-2 rounded-lg px-4 py-3 text-lg"
          />
          <input
            name="designation"
            type="text"
            placeholder="Designation"
            required
            value={formData.designation}
            onChange={handleChange}
            className="w-full border-2 rounded-lg px-4 py-3 text-lg"
          />
          <input
            name="email"
            type="email"
            placeholder="Email ID"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border-2 rounded-lg px-4 py-3 text-lg"
          />
          <input
            name="country"
            type="text"
            placeholder="Country"
            required
            value={formData.country}
            onChange={handleChange}
            className="w-full border-2 rounded-lg px-4 py-3 text-lg"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone No"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-2 rounded-lg px-4 py-3 text-lg"
          />

          <select
            name="interestedIn"
            required
            value={formData.interestedIn}
            onChange={handleChange}
            className="w-full border-2 rounded-lg px-4 py-3 text-lg"
          >
            <option value="">Interested In</option>
            <option value="Speaking">Speaking</option>
            <option value="Attending">Attending</option>
            <option value="Sponsoring">Sponsoring</option>
            <option value="Partnerships">Media Partners</option>
          </select>

          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border-2 rounded-lg px-4 py-3 text-lg"
          ></textarea>

          {/* Checkboxes */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="mt-1"
              required
            />
            <label className="text-lg text-gray-700">
              I confirm that I have read, understand and accept the{" "}
              <a href="/policy" className="text-blue-600 underline" target="_blank">
                Terms & Conditions and Privacy Policy
              </a>{" "}
              of FutureDigitechSummit.
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="allowContact"
              checked={formData.allowContact}
              onChange={handleChange}
              className="mt-1"
              required
            />
            <label className="text-lg text-gray-700">
              I agree to allow FutureDigitechSummit to contact me about their events and other marketing updates from time to time.
              FutureDigitechSummit may also share my details with carefully vetted third parties and other participants to improve the overall event experience.
            </label>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg text-xl hover:bg-blue-700 transition">
            Request Brochure
          </button>
        </form>
      </div>
    </div>
  )
}
