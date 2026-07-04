import { inter } from './fonts';
import Image from "next/image";

export default function AlegaLogo() {
  return (
    <div className={`${inter.className} flex flex-col items-center justify-center text-center select-none`}>
      
      {/* Center Sandwich: Upgraded Logo Asset Area */}
      <div className="my-2 flex items-center justify-center">
        <Image
          src="/alega-logo.png"
          alt="Alega Mark"
          width={80}
          height={36}
          className="object-contain w-auto h-14 opacity-95 transition-transform duration-300 hover:scale-105"
          priority
        />
      </div>
    </div>
  );
}