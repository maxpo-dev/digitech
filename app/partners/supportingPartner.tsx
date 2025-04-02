import Image from "next/image";
import CSM from '@/public/images/partners/CSM-01[1] - PNG.png';
import mosti from '@/public/images/partners/MOSTI.png';

const GovSupportingPartner: React.FC = () => {
  return (
    <div className="w-full max-w-3xl text-black mx-auto">
      <h3 className="text-3xl font-bold text-center mb-6">Government Supporting Partner</h3>
      <div className="flex items-center justify-center space-x-6 p-8 rounded-2xl shadow-2xl h-80">
        <div className="flex items-center justify-center bg-gray-100 p-6 rounded-xl shadow-lg w-1/2 h-full">
          <Image
            src={CSM}
            alt="Gov Supporting Partner 1"
            width={250}
            height={250}
            className="object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex items-center justify-center bg-gray-100 p-6 rounded-xl shadow-lg w-1/2 h-full">
          <Image
            src={mosti}
            alt="Gov Supporting Partner 2"
            width={250}
            height={250}
            className="object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default GovSupportingPartner;
