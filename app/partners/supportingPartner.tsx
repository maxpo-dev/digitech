import Image from "next/image";
import CSM from '@/public/images/partners/CSM-01[1] - PNG.png';
import mosti from '@/public/images/partners/MOSTI.png';

const GovSupportingPartner: React.FC = () => {
  return (
    <div className="w-full text-black">
      <h3 className="text-2xl font-bold text-center mb-6">Government Supporting Partner</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-items-center">
        {/* Image 1 */}
        <div className="bg-white p-6 rounded-xl shadow-lg w-full flex justify-center items-center min-h-[200px]">
          <Image
            src={CSM}
            alt="CyberSecurity Malaysia"
            className="w-auto h-40 sm:h-48 object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Image 2 */}
        <div className="bg-white p-6 rounded-xl shadow-lg w-full flex justify-center items-center min-h-[200px]">
          <Image
            src={mosti}
            alt="MOSTI"
            className="w-auto h-40 sm:h-48 object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default GovSupportingPartner;
