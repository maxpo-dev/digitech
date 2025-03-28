import Image from "next/image";
import CSM from '@/public/images/partners/CSM-01[1] - PNG.png';

const GovSupportingPartner = () => {
  return (
    <div className="w-full max-w-sm text-black">
      <h3 className="text-2xl font-bold text-center mb-6">Gov Supporting Partner</h3>
      <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg h-60">
        <Image
          src={CSM}
          alt="Gov Supporting Partner"
          width={200}
          height={200}
          className="object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default GovSupportingPartner;
