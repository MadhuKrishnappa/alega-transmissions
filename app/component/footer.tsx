'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: 'Gear Couplings', href: '#product-portfolio' },
    { name: 'Disc Couplings', href: '#product-portfolio' },
    { name: 'Pin Bush Couplings', href: '#product-portfolio' },
    { name: 'Keyless Devices', href: '#product-portfolio' },
    { name: 'Industrial Pulleys', href: '#product-portfolio' }
  ];

  const companyLinks = [
    { name: 'About Engineering', href: '#about-us' },
    { name: 'Quality Metrics', href: '#quality-assurance' },
    { name: 'Career Board', href: '#careers' },
    { name: 'Contact Matrix', href: '#contact-us' }
  ];

  return (
    <footer className="relative bg-[#0b0f17] text-gray-300 pt-16 pb-8 border-t border-gray-800/80 overflow-hidden antialiased selection:bg-[#F8A900]/30 font-sans">
      
      {/* 1. HIGH-FIDELITY INDUSTRIAL TECH BACKGROUND LAYER */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      
      {/* Subtle CAD Alignment Vectors */}
      <div className="absolute top-0 left-10 w-[1px] h-full bg-gradient-to-b from-gray-800/60 to-transparent pointer-events-none hidden md:block" />
      <div className="absolute top-0 right-10 w-[1px] h-full bg-gradient-to-b from-gray-800/60 to-transparent pointer-events-none hidden md:block" />

      {/* Heavy Machinery Blueprint Watermark Logo */}
      <div
        className="absolute right-[-5%] bottom-[-5%] w-[480px] h-[480px] opacity-[0.02] bg-no-repeat bg-contain pointer-events-none select-none filter invert"
        style={{ backgroundImage: "url('/alega-logo.png')" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        
        {/* ================= 2. UPPER TELEMETRY MARQUEE & META GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-gray-800/60 items-start">
          
          {/* Brand Vector Identity Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="space-y-1">
             
              <h3 className="text-lg font-black text-white uppercase tracking-tight">
                ALEGA <span className="text-[#F8A900]">TRANSMISSIONS</span>
              </h3>
            </div>
            <p className="text-xs text-gray-400 font-medium leading-relaxed max-w-sm">
              Engineered for absolute rigidity. Manufacturers of premium industrial couplings, custom shaft lock geometries, and heavy dynamic power tractions.
            </p>
           
          </div>

          {/* Nav Map A: Product Arrays */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest border-l-2 border-[#F8A900] pl-2">
              Power Transmission
            </h4>
            <ul className="space-y-2 text-xs font-semibold uppercase tracking-wide">
              {productLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#F8A900] transition-colors duration-150 flex items-center gap-1 group">
                    <span className="text-[10px] text-gray-600 font-mono group-hover:text-[#F8A900] transition-colors">↳</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Map B: Corporate Vectors */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest border-l-2 border-gray-700 pl-2">
              Operations
            </h4>
            <ul className="space-y-2 text-xs font-semibold uppercase tracking-wide">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#F8A900] transition-colors duration-150 flex items-center gap-1 group">
                    <span className="text-[10px] text-gray-600 font-mono group-hover:text-[#F8A900] transition-colors">▪</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* System Coordinate & Location Node */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest border-l-2 border-gray-700 pl-2">
              HQ Network Terminal
            </h4>
            <div className="text-[11px] text-gray-400 font-medium leading-relaxed font-sans space-y-1">
              <p className="font-semibold text-white">Alega Transmissions Private Limited</p>
              <p className="text-xs text-gray-400">Premium industrial manufacturing corridors engineered to ISO 1940 balancing requirements.</p>
              <div className="pt-2 font-mono text-[9px] text-gray-500 uppercase">
                <div>Loc: Peenya, Bangalore, India // Core Node</div>
                <div>Status: Fully Operational</div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= 3. LOWER LEGAL MATRICES & SYSTEM METRICS ================= */}
        <div className="pt-2 justify-center gap-6 text-[11px] font-mono text-gray-500 font-medium">
          
          {/* Dynamic Technical Copyright Stack */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>
              © {currentYear} <span className="text-white font-bold tracking-tight">ALEGA TRANSMISSIONS</span>
            </span>
            <span className="hidden sm:inline text-gray-700">|</span>
            <span className="text-gray-400 font-sans font-bold uppercase text-[10px] tracking-wider">
              Precision Motion Architecture
            </span>
          </div>

          

        </div>

      </div>

      {/* Industrial Hazard-Accent Strip Divider along extreme base boundary */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[linear-gradient(to_right,#F8A900_30%,#111827_30%,#111827_35%,#F8A900_35%,#F8A900_65%,#111827_65%,#111827_70%,#F8A900_70%)] bg-[length:40px_2px]" />
    </footer>
  );
}