import { inter } from './fonts';
import Image from "next/image";

export default function AlegaLogoSymbol() {
  return (
    <div className={`${inter.className} flex items-center`}>
      {/* Logo */}
      <Image
      src="/alega-logo.png"
      alt="Alega Logo"
      fill
      sizes="(max-width: 640px) 48px, 64px" // Tells Next.js exactly how to optimize the source image asset size
      className="object-contain"
    />
      
      
    </div>
  );
}
