'use client'

import { motion } from 'framer-motion'

export default function ManufacturingAndEngineering() {
  return (
    <section
      id="manufacturing"
      className="relative py-20 md:py-28 bg-gray-50 overflow-hidden"
    >
      {/* Background & Industrial Grid Overlay (Matching Hero & About Us precisely) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] md:bg-[size:48px_48px] bg-[size:32px_32px]" />

      {/* Watermark Logo */}
      <div
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.03] bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: "url('/alega-logo.png')" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">

        {/* ================= 1. SECTION SYSTEM HEADER ================= */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pb-6 border-b border-gray-300/60">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white/60 p-1 pr-3 shadow-sm backdrop-blur-sm mb-3">
              <span className="text-[12px] font-mono font-bold uppercase tracking-widest text-gray-500">
                Manufacturing And Engineering
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              DESIGN EXCELLENCE.
              <br />
              <span className="text-[#F8A900]">MANUFACTURING PRECISION.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-left lg:text-right flex flex-col items-start lg:items-end gap-4"
          >
            {/* <div className="flex items-center gap-2 font-mono text-[9px] text-gray-400 tracking-wider">
              <span>[ CAPA_SYS: ACTIVE ]</span>
              <span className="text-gray-300">|</span>
              <span className="text-[#F8A900] animate-pulse">// ISO_COMPLIANT</span>
            </div> */}
            <p className="text-xs sm:text-sm text-gray-700 font-bold leading-relaxed tracking-wide border-l-2 lg:border-l-0 lg:border-r-2 border-[#F8A900] pl-3 lg:pl-0 lg:pr-3">
              Alega Transmissions combines engineering expertise, advanced manufacturing processes, and rigorous quality systems to deliver reliable power transmission solutions for demanding industrial applications.
            </p>
          </motion.div>
        </div>

        {/* ================= 2 & 3. CAPABILITIES PRIMARY SPLIT PANE MATRIX ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT TECH PANE: Manufacturing Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-white/40 backdrop-blur-xl border border-gray-300/70 p-6 rounded-xl flex flex-col justify-between shadow-sm relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-dashed border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-[#F8A900] bg-[#F8A900]/10 px-1.5 py-0.5 rounded font-bold">MFG-NODE</span>
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">Manufacturing Capabilities</h3>
                </div>
                {/* <span className="text-[10px] font-mono text-gray-400">// SHOP_FLOOR</span> */}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    title: "CNC Turning & Milling",
                    desc: "Precision machining for tight tolerances, repeatability, and consistent product quality."
                  },
                  {
                    title: "Gear Hobbing, Shaping & Finishing",
                    desc: "Manufacturing of gear coupling components with controlled accuracy and surface finish."
                  },
                  {
                    title: "Dynamic Balancing",
                    desc: "Balancing of rotating components to improve reliability, reduce vibration, and extend service life."
                  },
                  {
                    title: "Heat Treatment Management",
                    desc: "Controlled heat treatment processes to achieve required mechanical and metallurgical properties."
                  }
                ].map((cap, idx) => (
                  <div key={idx} className="bg-white/80 border border-gray-200 p-4 rounded-lg flex flex-col gap-2 shadow-inner">
                    <span className="text-[#F8A900] font-mono text-[10px] font-bold">↳ CAP_0{idx + 1}</span>
                    <h4 className="text-xs font-black uppercase tracking-wide text-gray-900">{cap.title}</h4>
                    <p className="text-[11px] text-gray-600 font-medium leading-relaxed">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="mt-4 text-[9px] font-mono text-gray-400 tracking-wider pt-2 border-t border-gray-200/40">
              SYS_LOAD_STABLE // FLOOR_MACHINING_ARRAY
            </div> */}
          </motion.div>

          {/* RIGHT TECH PANE: Engineering Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-6 bg-white/40 backdrop-blur-xl border border-gray-300/70 p-6 rounded-xl flex flex-col justify-between shadow-sm relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-dashed border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-gray-900 bg-gray-200 px-1.5 py-0.5 rounded font-bold">ENG-NODE</span>
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">Engineering Capabilities</h3>
                </div>
                {/* <span className="text-[10px] font-mono text-gray-400">// R_AND_D</span> */}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    title: "CAD / CAE Design & Simulation",
                    desc: "Advanced 3D modeling, design optimization, and engineering analysis for reliable, efficient coupling solutions."
                  },
                  {
                    title: "Application Eng & Product Dev",
                    desc: "Custom design support for challenging operating conditions, torque requirements, and constraints."
                  },
                  {
                    title: "Rapid Prototyping & Validation",
                    desc: "Prototype development and validation to reduce development time and ensure optimal product performance."
                  },
                  {
                    title: "Reverse Eng & Performance Build",
                    desc: "Re-engineering of existing components and performance enhancement for critical industrial fields."
                  }
                ].map((cap, idx) => (
                  <div key={idx} className="bg-white/80 border border-gray-200 p-4 rounded-lg flex flex-col gap-2 shadow-inner">
                    <span className="text-gray-900 font-mono text-[10px] font-bold">↳ ENG_0{idx + 1}</span>
                    <h4 className="text-xs font-black uppercase tracking-wide text-gray-900">{cap.title}</h4>
                    <p className="text-[11px] text-gray-600 font-medium leading-relaxed">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="mt-4 text-[9px] font-mono text-gray-400 tracking-wider pt-2 border-t border-gray-200/40">
              CAD_CAE_CALCULATIONS_ACTIVE // SIM_VER_1.04
            </div> */}
          </motion.div>

        </div>

        {/* ================= 4 & 5. LOWER METRIC PANELS (Quality Matrix & Supply Chain) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4 items-stretch">

          {/* 5. Supply Chain Strength (Spans 2 Columns on Desktop Layout) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/50 backdrop-blur-md border border-gray-300/70 p-6 rounded-xl flex flex-col justify-between shadow-sm lg:col-span-2 relative group hover:border-[#F8A900]/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-200 w-full mb-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-gray-500 bg-gray-200 px-1.5 py-0.5 rounded font-bold">SUPPLY-NET</span>
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">Supply Chain Strength Matrix</h3>
              </div>
              <span className="text-[9px] font-mono text-gray-400">// LOGISTICS_FLOW</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
              {[
                {
                  title: "Global Sourcing Network",
                  desc: "Reliable sourcing of raw materials and critical components from qualified global suppliers.",
                  tag: "GLOBAL_SRC"
                },
                {
                  title: "Vendor Dev & Process Control",
                  desc: "Strong supplier relationships supported by rigorous quality audits and continuous performance monitoring.",
                  tag: "VNDR_AUDIT"
                },
                {
                  title: "Scalable Manufacturing Support",
                  desc: "Flexible production capacity through a robust, audited vendor and tiered manufacturing network.",
                  tag: "SCALE_NET"
                }
              ].map((item, idx) => (
                <div key={idx} className={`space-y-2 relative ${idx > 0 ? "md:border-l md:border-dashed md:border-gray-200 md:pl-6" : ""}`}>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-gray-900 rounded-sm" />
                    <h4 className="text-xs font-black uppercase tracking-wider text-gray-900">{item.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                  <span className="block font-mono text-[9px] text-gray-400 pt-1 tracking-tight">› {item.tag}</span>
                </div>
              ))}
            </div>

            {/* <div className="pt-6 mt-6 border-t border-dashed border-gray-200 text-[9px] font-mono text-gray-400 tracking-widest">
              PROCUREMENT_LOG_SECURE // ARCH_V2
            </div> */}
          </motion.div>

          {/* 4. Quality & Inspection Terminal Block (High-Impact Solid Gold Shouting Badge) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="bg-[#F8A900] text-black p-6 rounded-xl space-y-4 shadow-xl lg:col-span-1 border border-black/10 relative overflow-hidden group ring-4 ring-[#F8A900]/20 flex flex-col justify-between"
          >
            {/* High-Tech Blueprint Matrix Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 h-2 bg-gradient-to-l from-black/20 via-transparent to-transparent transform rotate-45 translate-x-8 -translate-y-2" />

            <div className="relative z-10 space-y-3 flex-grow">
              {/* Header Status Row */}
              <div className="flex items-center justify-between pb-2 border-b-2 border-black/10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                  </span>
                  <h3 className="text-xs font-black uppercase tracking-[0.15em] text-black">
                    Quality & Inspection
                  </h3>
                </div>
              </div>

              {/* Big Bold Core Statement */}
              <h4 className="text-sm font-black uppercase tracking-tight text-black leading-tight">
                Rigorous Verification Matrix. Documented Compliance.
              </h4>

              {/* Refined High-Contrast Inner Container holding full operational metrology criteria */}
              <div className="bg-white p-3.5 rounded-lg border border-dashed border-black/15 shadow-sm space-y-2.5">
                {[
                  { t: "Precision Metrology", d: "Inspection using calibrated instruments ensuring dimensional accuracy." },
                  { t: "Quality Assurance Systems", d: "Documented processes, traceability, and rigorous checks." },
                  { t: "Material Traceability", d: "Full provenance from raw procurement to final dispatch." },
                  { t: "Final Testing & Validation", d: "Dimensional, assembly, and functional metrics verification." }
                ].map((item, idx) => (
                  <div key={idx} className="text-[11px] leading-tight text-gray-800">
                    <span className="font-bold text-black uppercase tracking-tight block">{item.t}</span>
                    <span className="text-gray-600 font-medium">{item.d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Technical Verification Strip */}
            {/* <div className="relative z-10 pt-2 border-t border-black/5 flex items-center justify-between text-[9px] font-mono font-bold text-black/60 mt-auto"> */}
              {/* <span>// METROLOGY_CERTIFIED</span> */}
              {/* <span className="font-sans font-black tracking-widest uppercase">100% Verified</span> */}
            {/* </div> */}
          </motion.div>

        </div>

      </div>

      {/* Bottom Industrial Blueprint Divider Strip */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[linear-gradient(to_right,#F8A900_40%,transparent_40%)] bg-[length:32px_3px]" />
    </section>
  )
}