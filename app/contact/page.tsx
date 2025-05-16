'use client';

import { useState } from 'react';

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
    name: '',
    designation: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    interestedIn: '',
    message: '',
    termsAccepted: true,
    marketingConsent: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit enquiry');
      setSubmitted(true);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-serif text-gray-800 text-center">Thank You!</h2>
<p className="mt-2 text-center text-sm text-gray-600">
  We&#39;ve received your enquiry and will get back to you soon.
</p>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-serif text-gray-800 text-center mb-12">
          Contact Us
        </h1>
        <h3 className="text-xl sm:text-2xl font-serif text-gray-800 mb-6 pb-2 border-b border-gray-300 tracking-wide">
          Get in Touch
        </h3>
        {error && <div className="mb-4 text-red-600 text-center font-serif">{error}</div>}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm space-y-6">
          {['name', 'designation', 'company', 'email', 'phone', 'country'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-serif text-gray-700 capitalize">
                {field.replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                name={field}
                id={field}
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-indigo-500"
                value={formData[field as keyof FormData] as string}
                onChange={handleChange}
              />
            </div>
          ))}

          <div>
            <label htmlFor="interestedIn" className="block text-sm font-serif text-gray-700">
              Interested In
            </label>
            <select
              name="interestedIn"
              id="interestedIn"
              required
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-indigo-500"
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
            <label htmlFor="message" className="block text-sm font-serif text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-indigo-500"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              name="termsAccepted"
              id="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="termsAccepted" className="ml-2 text-sm font-serif text-gray-700">
              I accept the <a href="#" className="text-indigo-600">Terms & Conditions</a>.
            </label>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              name="marketingConsent"
              id="marketingConsent"
              checked={formData.marketingConsent}
              onChange={handleChange}
              className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="marketingConsent" className="ml-2 text-sm font-serif text-gray-700">
              I agree to receive marketing updates.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-serif py-2 rounded hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
