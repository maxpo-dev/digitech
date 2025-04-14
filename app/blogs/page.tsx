"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BlogsPage() {
  const router = useRouter();

  const blogCards = [
    {
      image: "/images/blogs/Future DigiTech Summit and Tech Visionary Awards 2025 The Ultimate Tech Experience.jpg", // Ensure this image exists in your public folder
      title: "Future DigiTech Summit & Tech Visionary Awards 2025",
      excerpt:
        "The Ultimate Tech Experience. Future DigiTech Summit & Tech Visionary Awards 2025 is a game-changing event in Kuala Lumpur that brings together the brightest minds in technology to explore, innovate, and shape the digital future.",
      route: "/blogs/futuredigitech",
      author: "Askar Ali",
    },
    // ... other blog cards (if any) can be added here
  ];

  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-bold mb-12">Latest Future DigiTech Blogs</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        {blogCards.map((card, idx) => (
          <article
            key={idx}
            className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-auto text-center flex flex-col items-center cursor-pointer hover:shadow-xl transition"
            onClick={() => router.push(card.route)}
          >
            <div className="w-full h-48 relative mb-4">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover rounded-lg shadow-md"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-700 text-sm">{card.excerpt}</p>
            <p className="text-gray-400 text-xs mt-2">by {card.author}</p>
            <button
              className="mt-3 text-blue-500 hover:underline focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                router.push(card.route);
              }}
            >
              Read More
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
