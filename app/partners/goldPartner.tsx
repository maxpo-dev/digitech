import Image from "next/image";
import GoldPartnerLogo from "@/public/images/partners/exotel new logo-03.png"; // Update with actual path and file name

const GoldPartner = () => {
  return (
    <div className="w-full max-w-xs text-navy-900">
      <div className="flex flex-col items-center justify-center bg-ivory-100 p-5 rounded-xl shadow-sm hover:shadow-md hover:scale-102 transition-all duration-500 border border-black h-52">
        <Image
          src={GoldPartnerLogo}
          alt="Gold Partner"
          width={200}
          height={200}
          className="object-contain cursor-pointer hover:scale-110 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default GoldPartner;
