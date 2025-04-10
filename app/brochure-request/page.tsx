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
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
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
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-white shadow-md rounded-lg p-8 text-center max-w-md w-full">
          <h2 className="text-2xl font-bold">Thank You!</h2>
          <p className="mt-2 text-sm text-gray-600">
            The brochure and agenda have been sent to your email.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Download Brochure & Agenda</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" type="text" placeholder="Full Name" required value={formData.name} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          <input name="designation" type="text" placeholder="Designation" required value={formData.designation} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          <input name="email" type="email" placeholder="Email ID" required value={formData.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          <input name="country" type="text" placeholder="Country" required value={formData.country} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          <input name="phone" type="tel" placeholder="Phone No" required value={formData.phone} onChange={handleChange} className="w-full border rounded px-3 py-2" />

          <select name="interestedIn" required value={formData.interestedIn} onChange={handleChange} className="w-full border rounded px-3 py-2">
            <option value="">Interested In</option>
            <option value="Speaking">Speaking</option>
            <option value="Attending">Attending</option>
            <option value="Sponsoring">Sponsoring</option>
            <option value="Partnerships">Media Partners</option>
          </select>

          <textarea name="message" rows={4} placeholder="Message" required value={formData.message} onChange={handleChange} className="w-full border rounded px-3 py-2"></textarea>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Request Brochure
          </button>
        </form>
      </div>
    </div>
  )
}
