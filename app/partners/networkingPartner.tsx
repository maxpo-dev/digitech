import Image from "next/image";
import KissflowLogo from "@/public/images/partners/kissflow.png";
import kraft from "@/public/images/partners/kraft2.jpg";
import ConvergentDS from "@/public/images/partners/ConvergentDS.jpg";

const NetworkingPartner: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto text-navy-900 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Kissflow Image */}
        <div className="flex items-center justify-center bg-ivory-100 p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-102 transition-all duration-500 border border-black h-64">
          <Image
            src={KissflowLogo}
            alt="Kissflow - Networking Partner"
            width={220}
            height={220}
            className="object-contain cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </div>
        {/* Kraft Image */}
        <div className="flex items-center justify-center bg-ivory-100 p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-102 transition-all duration-500 border border-black h-64">
          <Image
            src={kraft}
            alt="Kraft - Networking Partner"
            width={220}
            height={220}
            className="object-contain cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </div>
        {/* ConvergentDS .*/}
        <div className="flex items-center justify-center bg-ivory-100 p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-102 transition-all duration-500 border border-black h-64">
          <Image
            src={ConvergentDS}
            alt="ConvergentDS - Networking Partner"
            width={220}
            height={220}
            className="object-contain cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default NetworkingPartner;
