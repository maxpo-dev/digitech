'use client';
import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

interface Contact {
  id: string;
  name: string;
  designation: string | null;
  company: string | null;
  email: string;
  phone: string | null;
  country: string | null;
  interestedIn: string;
  message: string;
  termsAccepted: boolean;
  marketingConsent: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function ContactDataPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch('/api/contact-data');
        if (!response.ok) {
          throw new Error('Failed to fetch contact data');
        }
        const data = await response.json();
        setContacts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchContacts();
  }, []);

  const exportToExcel = () => {
    const exportData = contacts.map((contact) => ({
      Name: contact.name,
      Designation: contact.designation || 'N/A',
      Company: contact.company || 'N/A',
      Email: contact.email,
      Phone: contact.phone || 'N/A',
      Country: contact.country || 'N/A',
      'Interested In': contact.interestedIn,
      Message: contact.message,
      'Terms Accepted': contact.termsAccepted ? 'Yes' : 'No',
      'Marketing Consent': contact.marketingConsent ? 'Yes' : 'No',
      'Created At': new Date(contact.createdAt).toLocaleDateString(),
      'Updated At': new Date(contact.updatedAt).toLocaleDateString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Contacts');
    XLSX.writeFile(workbook, 'ContactData.xlsx');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-800 font-serif text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-600 font-serif text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-serif text-gray-800 text-center mb-12">
          Contact Form Data
        </h1>
        <h3 className="text-xl sm:text-2xl font-serif text-gray-800 mb-6 pb-2 border-b border-gray-300 tracking-wide">
          All Entries
        </h3>
        <div className="mb-6">
          <button
            onClick={exportToExcel}
            className="bg-indigo-600 text-white font-serif py-2 px-4 rounded hover:bg-indigo-700"
          >
            Export to Excel
          </button>
        </div>
        {contacts.length === 0 ? (
          <div className="text-gray-800 font-serif text-xl text-center">
            No contact entries found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gray-100">
                  {['Name', 'Designation', 'Company', 'Email', 'Phone', 'Country', 'Interested In', 'Message', 'Terms Accepted', 'Marketing Consent', 'Created At'].map((header) => (
                    <th
                      key={header}
                      className="px-4 py-2 text-left text-sm font-serif text-gray-700 border-b"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-900">{contact.name}</td>
                    <td className="px-4 py-2 text-sm text-gray-900">{contact.designation || 'N/A'}</td>
                    <td className="px-4 py-2 text-sm text-gray-900">{contact.company || 'N/A'}</td>
                    <td className="px-4 py-2 text-sm text-gray-900">{contact.email}</td>
                    <td className="px-4 py-2 text-sm text-gray-900">{contact.phone || 'N/A'}</td>
                    <td className="px-4 py-2 text-sm text-gray-900">{contact.country || 'N/A'}</td>
                    <td className="px-4 py-2 text-sm text-gray-900">{contact.interestedIn}</td>
                    <td className="px-4 py-2 text-sm text-gray-900">{contact.message}</td>
                    <td className="px-4 py-2 text-sm text-gray-900">{contact.termsAccepted ? 'Yes' : 'No'}</td>
                    <td className="px-4 py-2 text-sm text-gray-900">{contact.marketingConsent ? 'Yes' : 'No'}</td>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}