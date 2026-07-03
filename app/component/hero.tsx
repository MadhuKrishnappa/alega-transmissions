import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden py-12 md:py-20 bg-gray-50"
    >
      {/* Background (Kept identical as requested) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200" />

      {/* Industrial grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] md:bg-[size:48px_48px] bg-[size:32px_32px]" />

      {/* Watermark Logo */}
      <div
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: "url('/alega-logo.png')" }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between gap-8">

        {/* ================= CENTERED TITLE HEADBOARD ================= */}
        <div className="text-center max-w-5xl mx-auto mb-6">
          <span className="inline-flex items-center gap-3 rounded-full border border-gray-300/80 bg-white/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500 shadow-sm backdrop-blur-md mb-4">
            {/* Modern High-Tech Ping Signal Indicator */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F8A900] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F8A900]"></span>
            </span>

            <span>Alega Transmissions Private Limited</span>

            {/* Sleek Vertical Divider Pin */}
            <span className="h-3 w-[1px] bg-gray-300" />
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.1]">
            DRIVING INDUSTRIAL
            <br />
            <span className="text-[#F8A900]">MOTION WITH CONFIDENCE</span>
          </h1>

          {/* INNOVATIVE DETACHED BLOCK VIEW */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">

            {/* Block 1: Corporate Mission Profile */}
            <div className="relative group rounded-xl border border-gray-200/80 bg-white/40 backdrop-blur-md p-4 transition-all duration-300 hover:border-gray-300 hover:bg-white/80 shadow-sm">
              <div className="absolute top-0 left-4 -translate-y-1/2 bg-[#F8A900] text-[9px] font-black text-black px-2 py-0.5 rounded uppercase tracking-wider">
                Enterprise Identity
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed pt-1">
                Founded in <strong>2026</strong>, Alega Transmissions Private Limited is a <strong>Bengaluru-based</strong> engineering company dedicated to industrial coupling design, manufacturing, and customized power transmission solutions.
              </p>
            </div>

            {/* Block 2: Operations Capability Profile */}
            <div className="relative group rounded-xl border border-gray-200/80 bg-white/40 backdrop-blur-md p-4 transition-all duration-300 hover:border-gray-300 hover:bg-white/80 shadow-sm">
              <div className="absolute top-0 left-4 -translate-y-1/2 bg-gray-900 text-[9px] font-black text-white px-2 py-0.5 rounded uppercase tracking-wider">
                Core Competency
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed pt-1">
                Alega Transmissions designs and manufactures precision-engineered industrial coupling solutions for reliable power transmission across diverse industrial applications.
              </p>
            </div>

          </div>
        </div>

        {/* ================= THE NOTICE BOARD GRID ================= */}
        {/* ================= THE TACTICAL HUD NOTICE BOARD GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch font-sans">

          {/* CARD 1: Why Choose Alega (Engineering Specs) */}
          <div className="group relative lg:col-span-1 bg-white/40 backdrop-blur-xl border border-gray-300/70 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#F8A900] shadow-sm hover:shadow-md rounded-xl overflow-hidden">
            {/* Tech Accent Corners */}
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-[#F8A900] transition-colors" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-transparent group-hover:border-[#F8A900] transition-colors" />

            <div>
              {/* Header telemetry style */}
              <div className="flex items-center justify-between mb-5 pb-2 border-b border-dashed border-gray-300">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-[#F8A900] bg-[#F8A900]/10 px-1.5 py-0.5 rounded font-bold">VAL-01</span>
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">Why Choose Alega</h3>
                </div>
                <div className="text-[10px] font-mono text-gray-400 group-hover:text-[#F8A900] transition-colors">// CORE_ADV</div>
              </div>

              <div className="space-y-3.5">
                {[
                  { title: "Engineering Expertise", desc: "Backed by 60+ years of combined industry experience." },
                  { title: "Precision Manufacturing", desc: "Modern machining and quality-controlled production processes." },
                  { title: "Quality Assurance", desc: "Inspection, traceability, and performance validation at every stage." },
                  { title: "Custom Solutions", desc: "Application-specific coupling solutions tailored to requirements." },
                  { title: "Responsive Support & Value", desc: "Guidance from design to commissioning at optimal quality/cost." }
                ].map((item, idx) => (
                  <div key={idx} className="relative pl-3 border-l-2 border-gray-200 group-hover:border-[#F8A900]/40 transition-colors">
                    <h4 className="text-xs font-extrabold text-gray-900 flex items-center gap-1.5">
                      <span className="text-[9px] text-gray-400 font-mono">0{idx + 1}</span>
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 2: Core Engineering Capabilities & System Overview */}
          <div className="relative lg:col-span-1 bg-gray-900 text-white p-6 flex flex-col justify-between shadow-xl shadow-gray-900/10 rounded-xl overflow-hidden ring-1 ring-white/10">
            {/* Micro grid glow background for tech aesthetics */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(248,169,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(248,169,0,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#F8A900]/10 rounded-full blur-xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-black bg-[#F8A900] px-1.5 py-0.5 rounded font-bold">SYS-02</span>
                  <h3 className="text-xs font-black uppercase tracking-widest text-white">System Capability</h3>
                </div>
                <span className="h-1.5 w-1.5 rounded-full bg-[#F8A900] animate-pulse" />
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10 relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F8A900]" />
                <span className="block text-[9px] font-mono uppercase tracking-widest text-[#F8A900] mb-1">Mission Statement //</span>
                <p className="text-xs text-gray-200 font-medium leading-relaxed">
                  From standard industrial couplings to application-specific engineered solutions, Alega Transmissions delivers reliable torque transmission systems designed for performance, durability, and long service life.
                </p>
              </div>

              {/* Action Buttons styled like high-contrast command interfaces */}
              <div className="space-y-2 pt-1">
                <Link
                  href="#products"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#F8A900] px-4 py-3 text-xs font-black text-black shadow-md transition-all duration-200 hover:bg-[#e09900] uppercase tracking-wider"
                >
                  View Coupling Solutions
                </Link>
                <Link
                  href="#consultation"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-xs font-bold text-gray-200 transition-all duration-200 hover:bg-white/10 hover:border-white/40 uppercase tracking-wider"
                >
                  Request Technical Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* CARD 3: Target Sectors & Growth Vision */}
          <div className="group relative lg:col-span-1 bg-white/40 backdrop-blur-xl border border-gray-300/70 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#F8A900] shadow-sm hover:shadow-md rounded-xl overflow-hidden">
            {/* Tech Accent Corners */}
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-[#F8A900] transition-colors" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-transparent group-hover:border-[#F8A900] transition-colors" />

            <div className="space-y-6">
              {/* Industries Sector */}
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-dashed border-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-gray-500 bg-gray-200 px-1.5 py-0.5 rounded font-bold">SEC-03</span>
                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">Target Sectors</h3>
                  </div>
                </div>

                {/* Micro tech chips for industries */}
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { label: 'Power Transmission', icon: '⚙️' },
                    { label: 'Steel & Cement', icon: '🏭' },
                    { label: 'Mining & Sugar', icon: '🏭' },
                    { label: 'Oil & Gas', icon: '🚢' },
                    { label: 'Paper & Pulp', icon: '🔋' },
                    { label: 'Material Handling', icon: '🚚' }
                  ].map((sector) => (
                    <div key={sector.label} className="flex items-center gap-1.5 bg-white/80 border border-gray-200 p-2 rounded-md transition-all group-hover:border-gray-300">
                      <span className="text-xs filter saturate-50">{sector.icon}</span>
                      <span className="text-[10px] font-bold text-gray-700 tracking-tight">{sector.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Growth Vision */}
              <div>
                <div className="flex items-center justify-between mb-3 pb-1 border-b border-dashed border-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-gray-500 bg-gray-200 px-1.5 py-0.5 rounded font-bold">VIS-04</span>
                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">Growth Vision</h3>
                  </div>
                </div>

                {/* Tech style terminal output checklist */}
                <div className="space-y-2 bg-gray-50/80 border border-gray-200/60 rounded-lg p-3 font-mono text-[10px]">
                  {[
                    { label: 'Product Portfolio Expansion', icon: '🚀' },
                    { label: 'Export Market Development', icon: '🌍' },
                    { label: 'Manufacturing Capacity Enhancement', icon: '🏭' },
                    { label: 'Strategic Industry Partnerships', icon: '🤝' }
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-gray-600">
                      <span className="flex items-center gap-1.5 font-sans font-bold">
                        <span className="text-[#F8A900]">›</span> {item.label}
                      </span>
                      <span>[READY]</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-1.5 mt-1.5 border-t border-gray-200 text-gray-900">
                    <span className="flex items-center gap-1.5 font-sans font-black text-xs text-gray-900">
                      <span className="text-green-500">★</span> Global Brand Recognition
                    </span>
                    <span className="text-green-600 font-bold">[ALPHA]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= BOARD FOOTER BUTTONS ================= */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-gray-200/60 max-w-2xl mx-auto w-full">
          <Link
            href="#quote"
            className="w-full sm:w-auto text-center rounded-xl bg-gray-900 px-6 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:bg-gray-800"
          >
            Request a Quote
          </Link>
          <Link
            href="#contact"
            className="w-full sm:w-auto text-center rounded-xl border border-gray-300 bg-transparent px-6 py-2.5 text-xs font-bold text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          >
            Contact Us
          </Link>
        </div>

      </div>

      {/* Bottom industrial divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[linear-gradient(to_right,#F8A900_40%,transparent_40%)] bg-[length:32px_3px]" />
    </section>
  )
}