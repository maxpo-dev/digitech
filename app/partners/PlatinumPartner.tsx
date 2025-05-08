import Image from "next/image";
import platinumLogo1 from "@/public/images/partners/EOD_Logo400Px.jpg";

const PlatinumPartner: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto text-navy-900 px-4 py-12 flex justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-black h-64 w-full max-w-md flex items-center justify-center">
        <Image
          src={platinumLogo1}
          alt="Platinum Partner"
          width={220}
          height={220}
          className="object-contain cursor-pointer hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default PlatinumPartner;
