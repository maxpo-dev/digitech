import Image from "next/image";
import platinumLogo1 from "@/public/images/partners/EOD_Logo400Px.jpg";
import platinumLogo2 from "@/public/images/partners/Logo Primary - 600 x 600 - Light (1).jpg";

const PlatinumPartner: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto text-navy-900 px-4 py-12 flex flex-wrap gap-6 justify-center">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-black h-64 w-64 flex items-center justify-center">
        <Image
          src={platinumLogo1}
          alt="Platinum Partner 1"
          width={180}
          height={180}
          className="object-contain cursor-pointer hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-black h-64 w-64 flex items-center justify-center">
        <Image
          src={platinumLogo2}
          alt="Platinum Partner 2"
          width={180}
          height={180}
          className="object-contain cursor-pointer hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default PlatinumPartner;
