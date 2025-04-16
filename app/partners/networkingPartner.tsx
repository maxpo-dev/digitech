import Image from "next/image";
import KissflowLogo from '@/public/images/partners/kissflow.png';

const networkingPartners = [
  {
    name: "Kissflow",
    logo: KissflowLogo,
    link: "https://kissflow.com/",
    description:
      "Kissflow is an AI-powered low-code platform that enables business and IT collaboration to build apps faster. Trusted by enterprises in 160 countries, it simplifies workflows, boosts productivity, and accelerates digital transformation with a blend of no-code and low-code tools.",
  },
];

const NetworkingPartner = () => {
  return (
    <div className="py-10 text-black">
      <h2 className="text-3xl font-bold text-center mb-16">Our Networking Partner</h2>

      <div className="flex justify-center">
        {networkingPartners.map((partner) => (
          <a
            key={partner.name}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300 w-full max-w-md"
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={100}
                className="object-contain mb-4"
              />
              <p className="text-sm text-gray-700">{partner.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NetworkingPartner;
