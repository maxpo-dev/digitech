import Image from "next/image";
import KissflowLogo from "@/public/images/partners/kissflow.png";
import kraft from "@/public/images/partners/kraft2.jpg";

const NetworkingPartner: React.FC = () => {
  return (
    <div className="w-full max-w-lg text-navy-900 flex flex-col items-center space-y-4">
      <div className="flex flex-col sm:flex-row items-center gap-8">
        {/* Kissflow Image */}
        <div className="flex flex-col items-center justify-center bg-ivory-100 p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-102 transition-all duration-500 border border-black h-64">
          <Image
            src={KissflowLogo}
            alt="Kissflow - Networking Partner"
            width={320}
            height={320}
            className="object-contain cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </div>
        {/* Kraft Image */}
        <div className="flex flex-col items-center justify-center bg-ivory-100 p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-102 transition-all duration-500 border border-black h-64">
          <Image
            src={kraft}
            alt="Kraft - Networking Partner"
            width={320}
            height={320}
            className="object-contain cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default NetworkingPartner;
