"use client";

import Image from "next/image";

export default function FutureDigiTechBlogPage() {
  return (
    <div className="w-full px-2 py-5 text-center flex flex-col items-center">
      {/* Full-width Hero Image */}
      <div className="w-full h-[88vh] relative">
        <Image
          src="/images/blogs/Future DigiTech Summit and Tech Visionary Awards 2025 The Ultimate Tech Experience.jpg"
          alt="Future DigiTech Summit & Tech Visionary Awards 2025"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Blog Article Content */}
      <article className="bg-white shadow-2xl rounded-lg p-6 w-full md:w-3/4 lg:w-2/3 text-center relative mt-6">
        <h2 className="text-2xl font-extrabold mb-4">
          Future DigiTech Summit & Tech Visionary Awards 2025
        </h2>
        <h3 className="text-xl font-extrabold mt-6 mb-3">
          The Ultimate Tech Experience
        </h3>
        <p className="text-gray-800 text-base font-semibold mb-4">
          Future DigiTech Summit & Tech Visionary Awards 2025 is a game-changing event that brings together the brightest minds in technology to explore, innovate, and shape the digital future. Hosted in the passionate city of Kuala Lumpur, Malaysia, this summit showcases groundbreaking improvements and provides unparalleled networking opportunities for tech experts worldwide.
        </p>

        <p className="text-gray-800 text-base font-semibold mb-4">
          Mark your calendars for <strong>May 28–29, 2025</strong> and get ready to experience the Future DigiTech Summit & Tech Visionary Awards at the prestigious <strong>Pullman Kuala Lumpur</strong>. With over 500 attendees expected, this two-day event promises to be an unmissable platform for insightful discussions, hands-on workshops and visionary keynotes.
        </p>

        <h3 className="text-xl font-extrabold mt-6 mb-3">
          The summit will focus on the latest trends and breakthroughs in:
        </h3>
        <ul className="text-left list-decimal pl-6 text-gray-800 text-base font-semibold mb-4">
          <li>Digital Transformation</li>
          <li>Artificial Intelligence (AI)</li>
          <li>Web3 and Blockchain</li>
          <li>Cybersecurity and IoT</li>
        </ul>

        <p className="text-gray-800 text-base font-semibold mb-4">
          Attendees will gain actionable wisdom from well-known global experts, participate in interactive sessions and engage with the latest innovations shaping the future of technology.
        </p>

        <h3 className="text-xl font-extrabold mt-6 mb-3">Why Attend?</h3>
        <ul className="text-left list-none pl-6 text-gray-800 text-base font-semibold mb-4">
          <li>✔ Superior Networking – Connect with top industry leaders, visionaries, and innovators from across the globe.</li>
          <li>✔ Expert Insights – Learn from world-class speakers and thought leaders driving the next wave of digital evolution.</li>
          <li>✔ Cutting-Edge Technologies – Discover the most innovative solutions changing the industries in real time.</li>
          <li>✔ Stay Competitive – Equip yourself with the knowledge and tools to remain ahead in the ever-evolving tech landscape.</li>
        </ul>

        <h3 className="text-xl font-extrabold mt-6 mb-3">Tech Visionary Awards 2025</h3>
        <p className="text-gray-800 text-base font-semibold mb-4">
          The Tech Visionary Awards 2025 will recognize and celebrate trailblazers and pioneers in the tech industry who are revolutionizing digital transformation. This prestigious awards ceremony honors transformative solutions, forward-thinking leadership and groundbreaking innovations across multiple sectors.
        </p>

        <p className="text-left text-black text-base font-bold mb-2">Who Can Apply?</p>
        <ul className="pl-5 text-left list-none text-gray-800 text-base font-semibold mb-4">
          <li>🔹 Technology Solution Providers</li>
          <li>🔹 Industry Leaders & Enterprises</li>
        </ul>

        {/* Apply Now Button */}
        <div className="mb-4">
          <a
            href="https://www.futuredigitechsummit.com/awards"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Apply Now
          </a>
        </div>

        <h3 className="text-xl font-extrabold mt-6 mb-3">Organized by TASCON Media</h3>
        <p className="text-gray-800 text-base font-semibold mb-6">
          The summit is organized by <strong>TASCON Media</strong>, a company dedicated to elevating businesses through innovative media solutions.
        </p>

        <p className="text-gray-400 text-right mt-4">By Askar Ali</p>

        {/* Footer Image */}
        <div className="relative w-full h-64 mt-6">
          <Image
            src="/images/blogs/digitechfoot.jpg"
            alt="Future DigiTech Innovation"
            width={1600}
            height={900}
            className="w-full h-auto rounded-lg shadow-md mt-6"
          />
        </div>
      </article>
    </div>
  );
}
