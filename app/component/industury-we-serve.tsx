'use client'

import { motion } from 'framer-motion'

export default function IndustriesWeServe() {
  return (
    <section
      id="industries"
      className="relative py-20 md:py-28 bg-gray-50 overflow-hidden"
    >
      {/* Background & Industrial Grid Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] md:bg-[size:48px_48px] bg-[size:32px_32px]" />

      {/* Watermark Logo */}
      <div
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.03] bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: "url('/alega-logo.png')" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">

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
                Market Sectors
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              POWERING CRITICAL
              <br />
              <span className="text-[#F8A900]">INDUSTRIAL APPLICATIONS.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-left lg:text-right flex flex-col items-start lg:items-end gap-4"
          >
            <div className="flex items-center gap-2 font-mono text-[9px] text-gray-400 tracking-wider">
              {/* <span>[ DEPLOYMENT: GLOBAL_COMPATIBLE ]</span> */}
              {/* <span className="text-gray-300">|</span> */}
              <span className="text-[#F8A900] animate-pulse">// TORQUE_HEAVY_LOAD</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 font-bold leading-relaxed tracking-wide border-l-2 lg:border-l-0 lg:border-r-2 border-[#F8A900] pl-3 lg:pl-0 lg:pr-3">
              Alega Transmissions supports diverse industries with reliable power transmission solutions engineered for performance, durability, and operational efficiency across demanding operating baselines.
            </p>
          </motion.div>
        </div>

        {/* ================= TWO-ROW VERTICAL STACK ================= */}
        <div className="space-y-8">
          
          {/* ROW 1: TARGET OPERATIONAL SECTORS (Full Width - 3 Columns on Large Screens) */}
          <div className="w-full">
            <div className="bg-white/40 backdrop-blur-xl border border-gray-300/70 p-6 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6 pb-2 border-b border-dashed border-gray-200">
                  <div className="flex items-center gap-2">
                    {/* <span className="font-mono text-[10px] text-gray-900 bg-gray-200 px-1.5 py-0.5 rounded font-bold">IND-ARRAY</span> */}
                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">Target Operational Sectors</h3>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400">// SECTOR_PROFILES</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { 
                      id: "01", 
                      title: "Power Generation", 
                      desc: "Turbines, generators, motors, auxiliary drives.",
                      icon: (
                        <svg className="w-5 h-5 text-[#F8A900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )
                    },
                    { 
                      id: "02", 
                      title: "Steel, Cement & Mining", 
                      desc: "Crushers, conveyors, mills, kilns, material handling systems.",
                      icon: (
                        <svg className="w-5 h-5 text-[#F8A900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      )
                    },
                    { 
                      id: "03", 
                      title: "Material Handling & Conveying", 
                      desc: "Conveyors, elevators, stackers, reclaimers, cranes.",
                      icon: (
                        <svg className="w-5 h-5 text-[#F8A900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      )
                    },
                    { 
                      id: "04", 
                      title: "Pumps, Compressors & Blowers", 
                      desc: "Rotating equipment requiring reliable high-torque transmission.",
                      icon: (
                        <svg className="w-5 h-5 text-[#F8A900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89H18v3.582a4.99" />
                        </svg>
                      )
                    },
                    { 
                      id: "05", 
                      title: "Oil, Gas & Petrochemicals", 
                      desc: "Process plants, refineries, and offshore heavy equipment systems.",
                      icon: (
                        <svg className="w-5 h-5 text-[#F8A900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      )
                    },
                    { 
                      id: "06", 
                      title: "Renewable Energy & Automation", 
                      desc: "Wind turbines, solar tracking systems, industrial automation loops.",
                      icon: (
                        <svg className="w-5 h-5 text-[#F8A900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      )
                    },
                    { 
                      id: "07", 
                      title: "Paper & Pulp", 
                      desc: "Paper machines, rollers, conveyors, digesters, continuous process drives.",
                      icon: (
                        <svg className="w-5 h-5 text-[#F8A900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )
                    },
                    { 
                      id: "08", 
                      title: "Sugar Industry", 
                      desc: "Cane crushers, mills, conveyors, centrifuges under severe shock loads.",
                      icon: (
                        <svg className="w-5 h-5 text-[#F8A900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      )
                    },
                    { 
                      id: "09", 
                      title: "Industrial OEMs & Machinery", 
                      desc: "Customized transmission architectures for complex equipment builders.",
                      icon: (
                        <svg className="w-5 h-5 text-[#F8A900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )
                    }
                  ].map((ind, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.04 }}
                      className="bg-white/90 border border-gray-200 p-4 rounded-lg flex gap-3.5 shadow-sm hover:border-[#F8A900]/40 transition-colors duration-200"
                    >
                      {/* Left Icon Housing */}
                      <div className="flex-shrink-0 w-8 h-8 border border-gray-200 bg-gray-50 flex items-center justify-center rounded">
                        {ind.icon}
                      </div>

                      {/* Content Stack */}
                      <div className="flex-grow flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-black uppercase tracking-wide text-gray-900">{ind.title}</h4>
                          <span className="font-mono text-[9px] text-gray-400 font-bold">SEC_{ind.id}</span>
                        </div>
                        <p className="text-[11px] text-gray-600 font-medium leading-relaxed">{ind.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ROW 2: TYPICAL APPLICATIONS TERMINAL PANEL (Full Width Horizontal Banner) */}
          {/* ROW 2: TYPICAL APPLICATIONS TERMINAL PANEL (Redesigned for Ultra-High Contrast & Readability) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-[#111827] text-white p-6 sm:p-8 rounded-xl flex flex-col justify-between shadow-2xl border border-gray-800 relative overflow-hidden group ring-4 ring-[#F8A900]/10"
          >
            {/* Dark Tactical Grid Layer Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(248,169,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(248,169,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
            
            {/* Tech accents */}
            <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-l from-[#F8A900] to-transparent" />

            <div className="relative z-10 space-y-6 w-full">
              {/* Header Ribbon */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F8A900] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F8A900]"></span>
                  </span>
                  <h3 className="text-xs font-mono font-black uppercase tracking-[0.2em] text-gray-400">
                    Typical Applications Matrix
                  </h3>
                </div>
              </div>

              {/* Main Split Row */}
              <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6">
                <div className="space-y-2 max-w-sm flex-shrink-0">
                  <h4 className="text-lg font-black uppercase tracking-tight text-white leading-tight">
                    Engineered <span className="text-[#F8A900]">Compatibility</span>
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-medium">
                    Our precision transmission couplings are validated for flawless torque handling across standard industrial machinery setups.
                  </p>
                </div>

                {/* Re-engineered High-Contrast Grid Badges */}
                <div className="flex flex-wrap gap-2 flex-grow xl:max-w-4xl">
                  {[
                    "Electric Motors", "Gearboxes", "Pumps", "Compressors", 
                    "Blowers", "Crushers", "Conveyors", "Mixers & Agitators", 
                    "Fans", "Turbines", "Rolling Mills", "Paper Machines", 
                    "Sugar Mill Drives", "Material Handling Equip"
                  ].map((tag, idx) => (
                    <div
                      key={idx}
                      className="group/tag flex items-center gap-2 bg-gray-900/90 border border-gray-800 hover:border-[#F8A900]/60 px-3.5 py-2 rounded-lg transition-all duration-150 shadow-sm shadow-black/50"
                    >
                      {/* Technical Pointer Dot */}
                      <span className="w-1 h-1 rounded-full bg-[#F8A900] group-hover/tag:scale-125 transition-transform" />
                      
                      {/* Main Text String */}
                      <span className="text-xs sm:text-sm font-sans font-extrabold text-gray-200 tracking-wide uppercase group-hover/tag:text-white transition-colors">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Panel Status Line */}
            <div className="relative z-10 pt-4 border-t border-gray-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] font-mono text-gray-500 mt-6">
              <span className="flex items-center gap-1.5">
                <span className="text-[#F8A900]">✓</span> ALL CRITICAL CONFIGURATIONS SUPPORTED
              </span>
              {/* <span>VERIFIED APPLICATION INTEGRATION PROFILE // 2026</span> */}
            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Industrial Blueprint Divider Strip */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[linear-gradient(to_right,#F8A900_40%,transparent_40%)] bg-[length:32px_3px]" />
    </section>
  )
}