import Image from "next/image";
import CSM from "@/public/images/partners/CSM-01[1] - PNG.png";
import mosti from "@/public/images/partners/MOSTI.png";

const GovSupportingPartner: React.FC = () => {
  return (
    <div className="w-full max-w-lg text-navy-900 flex flex-col items-center space-y-4">
      <div className="flex flex-col sm:flex-row items-center gap-8">
        {/* mosti Image */}
        <div
          className="flex flex-col items-center justify-center bg-ivory-100 p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-102 transition-all duration-500 border border-gold-200 h-64"
        >
          <Image
            src={mosti}
            alt="MOSTI - Government Supporting Partner"
            width={320}
            height={320}
            className="object-contain cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </div>
        {/* CSM Image */}
        <div
          className="flex flex-col items-center justify-center bg-ivory-100 p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-102 transition-all duration-500 border border-gold-200 h-64"
        >
          <Image
            src={CSM}
            alt="CSM - Government Supporting Partner"
            width={340}
            height={340}
            className="object-contain cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default GovSupportingPartner;