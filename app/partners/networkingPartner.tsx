import Image from "next/image";
import KissflowLogo from "@/public/images/partners/kissflow.png";

const NetworkingPartner = () => {
  return (
    <div className="w-full max-w-xs text-navy-900">
      <div className="flex flex-col items-center justify-center bg-ivory-100 p-5 rounded-xl shadow-sm hover:shadow-md hover:scale-102 transition-all duration-500 border border-gold-200 h-52">
        <a
          href="https://kissflow.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={KissflowLogo}
            alt="Kissflow"
            width={200}
            height={100}
            className="object-contain cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
      </div>
    </div>
  );
};

export default NetworkingPartner;
