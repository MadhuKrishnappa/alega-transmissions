'use client';

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white pt-12 pb-8 overflow-hidden">
      {/* Industrial grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Watermark Logo */}
      <div
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-5 bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: "url('/alega-logo.png')" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center border-t border-gray-700 pt-6">
        <p className="text-gray-400 text-sm">
          © 2025 <span className="text-[#F8A900]">Alega Transmissions</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
