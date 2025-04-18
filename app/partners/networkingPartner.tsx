import Image from "next/image";
import KissflowLogo from "@/public/images/partners/kissflow.png";

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
    <div className="py-6 text-navy-900">
      <div className="flex justify-center">
        {networkingPartners.map((partner) => (
          <a
            key={partner.name}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ivory-100 p-5 rounded-xl shadow-sm hover:shadow-md hover:scale-102 transition-all duration-500 w-full max-w-xs border border-gold-200"
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={100}
                className="object-contain mb-4 transition-transform duration-500 hover:scale-110"
              />
              <p className="text-sm text-navy-700 leading-relaxed font-sans">{partner.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NetworkingPartner;