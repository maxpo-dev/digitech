import Image from "next/image";
import Link from "next/link";
import MaxpoLogo from "@/public/images/Layer 1.png"; // Make sure the logo is in the correct path

export const MaxpoExhibition = () => {
  return (
    <section className="from-blue-950/80 via-purple-800/80 to-indigo-900/80 py-12">
      <div className="container mx-auto px-6 text-center">
        {/* Logo */}
        <Image
          src={MaxpoLogo}
          alt="Maxpo Exhibitions Logo"
          width={180}
          height={60}
          className="mx-auto mb-4"
        />

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
          Group Company of Maxpo Exhibitions
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-6">
          Maxpo Exhibitions is a premier organizer of global events, fostering
          connections in real estate, technology, and investment sectors.
        </p>

        {/* Visit Site Button */}
        <Link
          href="https://www.maxpo.ae/"
          target="_blank"
          className="inline-block bg-blue-600 text-white px-6 py-3 text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Visit Site
        </Link>
      </div>
    </section>
  );
};
