'use client'

import { motion } from 'framer-motion'

export default function GearCouplingDetail() {
  const features = [
    { label: "High Torque Density", desc: "Maximum power transmission capabilities packed into a highly optimized, space-saving geometric frame." },
    { label: "Compact Engineering", desc: "Reduced outer diameter dimensions minimize rotational inertia over heavy-duty operating cycles." },
    { label: "Misalignment Accommodation", desc: "Engineered to smoothly neutralize simultaneously occurring parallel, angular, and axial shaft drifting parameters." },
    { label: "High Mechanical Strength", desc: "Forged alloy steel construction treated for high fatigue limits under high cyclical loads." },
    { label: "Harsh Environment Resilience", desc: "Sealed hub housings prevent moisture entry, abrasive dust scoring, and lubricant breakdown." }
  ]

  const applications = [
    { sector: "Steel Production Plants", gear: "Rolling Mills & Heavy Rollers" },
    { sector: "Cement Processing Mills", gear: "Kiln Drives & Industrial Crushers" },
    { sector: "Heavy Mining Equipment", gear: "Excavators & Continuous Shovels" },
    { sector: "Pumps & Large Compressors", gear: "High-Volume Fluid/Gas Logistics" },
    { sector: "Material Handling & Conveyors", gear: "High-Throughput Distribution Links" },
    { sector: "Heavy Industrial Machinery Drives", gear: "High-Inertia Primary Prime Movers" }
  ]

  return (
    <div className="bg-white text-gray-900 min-h-screen pt-20 pb-16 antialiased selection:bg-[#F8A900]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full space-y-12">

        {/* ================= 1. SYSTEM MODEL HEADER ================= */}
        <header className="border-b border-gray-100 pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded">
                <span>SYSTEM_SPEC // SERIES_AGC</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 uppercase">
                AGC Series <span className="text-[#F8A900]">Gear Couplings</span>
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wide">
                High-Performance Flexible Coupling Solutions for Industrial Power Transmission
              </p>
            </div>
            
          </div>
        </header>

        {/* ================= 2. STRUCTURAL SPLIT READOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SUB-GRID: MECHANICAL OVERVIEW (Spans 7 Columns) */}
          <section className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">01 / Functional Overview</h2>
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">
                Gear Coupling Internal Matrix
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                The AGC Series gear couplings are high-performance flexible couplings designed for heavy-duty industrial power transmission applications. 
              </p>
              <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                The layout consists of two distinct mechanical hubs built with external crowned gear teeth that actively engage inside the internal gear tooth slots of the outer sleeve housing shell. This precise profile enables the dynamic assembly to transmit exceptional torque thresholds while keeping equipment safely isolated from high multi-axis shaft structural misalignments.
              </p>
            </div>

            {/* High-Contrast Technical Accent Box */}
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/80 relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F8A900]" />
              <span className="block text-[9px] font-mono uppercase tracking-widest text-gray-400 mb-1">Engineering Directive //</span>
              <p className="text-xs text-gray-700 font-bold leading-relaxed">
                Widely deployed across continuous heavy machinery arrays where maximum engineering torque density and infinite-fatigue load life baselines are an absolute operational requirement.
              </p>
            </div>
          </section>

          {/* RIGHT SUB-GRID: COMPACT APPLICATION TELEMETRY (Spans 5 Columns) */}
          <section className="lg:col-span-5 space-y-4">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/70 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-dashed border-gray-200">
                <div className="flex items-center gap-1.5">
                  {/* <span className="font-mono text-[9px] text-gray-500 bg-gray-200 px-1.5 py-0.5 rounded font-bold">APP-NODE</span> */}
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Target Applications</h3>
                </div>
                <span className="text-[9px] font-mono text-gray-400">// DRIVE_UNITS</span>
              </div>

              {/* Data Rows */}
              <div className="divide-y divide-gray-200/60 font-sans">
                {applications.map((app, idx) => (
                  <div key={idx} className="py-2 flex justify-between gap-4 text-xs font-medium">
                    <span className="text-gray-500 uppercase tracking-tight font-bold text-[10px]">{app.sector}</span>
                    <span className="text-gray-800 text-right font-semibold">{app.gear}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>

        {/* ================= 3. LOWER DESIGN FEATURES ARRAYS ================= */}
        <section className="space-y-4 pt-4 border-t border-gray-100">
          <div className="space-y-0.5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">02 / Key Engineering Features</h2>
            <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight">Design Architectural Advantages</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="p-4 bg-white border border-gray-200/80 rounded-xl space-y-1.5 hover:border-[#F8A900] transition-colors group relative"
              >
                {/* Micro accent block indicators */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-[#F8A900] transition-colors" />
                
                <div className="flex items-center gap-2 text-xs font-extrabold text-gray-900 uppercase tracking-wide">
                  <span className="text-[#F8A900] font-mono text-[10px]">✦</span>
                  <h4>{feature.label}</h4>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
            ))}

            {/* Sticky Tech Action Box closing card to maintain grid uniformity */}
            <div className="p-4 bg-gray-900 text-white rounded-xl flex flex-col justify-between border border-transparent">
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-[#F8A900] uppercase tracking-widest">// ASSURANCE_PASS</span>
                <h4 className="text-xs font-extrabold uppercase tracking-wide text-white">Metrology Checked</h4>
                <p className="text-[11px] text-gray-400 leading-normal font-medium">
                  All crowned gear interfaces pass 100% profile tooth inspection audits before deployment.
                </p>
              </div>
              <a 
                href="#contact-us"
                className="inline-block w-full text-center bg-[#F8A900] text-black font-mono font-black text-[10px] py-1.5 rounded uppercase tracking-wider mt-3 hover:bg-amber-500 transition-colors"
              >
                Request AGC Specs 🚀
              </a>
            </div>
          </div>
        </section>

        {/* ================= COMPACT FOOTER SUMMARY ================= */}
        <footer className="pt-4 border-t border-gray-100 text-center max-w-xl mx-auto">
          <p className="text-[11px] text-gray-400 font-bold tracking-widest uppercase font-mono">
            Alega Transmissions Manufacturing Group 
          </p>
        </footer>

      </div>
    </div>
  )
}