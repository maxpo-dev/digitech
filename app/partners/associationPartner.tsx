import Image from "next/image";
import Association from '@/public/images/partners/IASA Logo White BG (1).png';

const AssociationPartner = () => {
  return (
    <div className="w-full max-w-sm text-black">
      {/* <h2 className="text-2xl font-bold text-center mb-6">Association Partner</h2> */}
      <h2 className="text-3xl font-bold text-center mb-16">Association Partner</h2>
      <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg h-60">
        <Image
          src={Association}
          alt="Association Partner"
          width={200}
          height={200}
          className="object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default AssociationPartner;
