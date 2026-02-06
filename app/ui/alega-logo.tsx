import { inter } from './fonts';
import Image from "next/image";

export default function AlegaLogo() {
  return (
    <div className={`${inter.className} flex items-center`}>
      {/* Logo */}
      <Image
        src="/alega-logo.png"
        alt="Alega Logo"
        width={80}
        height={40}
        className="object-contain sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
      />
      
      {/* Text Column */}
      <div className="flex flex-col leading-tight text-center">
        <span className="text-md sm:text-md md:text-md font-bold text-[#FCBC00]">
          ALEGA
        </span>
        <span className="text-md sm:text-md md:text-md font-bold text-[#FCBC00]">
          TRANSMISSIONS
        </span>
      </div>
    </div>
  );
}
