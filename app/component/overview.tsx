'use client'

import { motion } from 'framer-motion'
import AlegaLogo from '../ui/alega-logo'
import AlegaLogoSymbol from '../ui/alega-logo-sysmbol'

export default function CompanyOverview() {
  return (
    <section
      id="about-us"
      className="relative py-20 md:py-28 bg-gray-50 overflow-hidden"
    >
      {/* Background & Industrial Grid Overlay (Matching Hero precisely) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] md:bg-[size:48px_48px] bg-[size:32px_32px]" />

      {/* Watermark Logo */}
      <div
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.03] bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: "url('/alega-logo.png')" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">

        {/* ================= SECTION SYSTEM HEADER ================= */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pb-6 border-b border-gray-300/60">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white/60 p-1 pr-3 shadow-sm backdrop-blur-sm mb-3">

              <span className="text-[12px] font-mono font-bold uppercase tracking-widest text-gray-500">
                About US
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              BUILT ON EXPERIENCE.
              <br />
              <span className="text-[#F8A900]">DRIVEN BY PRECISION.</span>
            </h2>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="max-w-xl text-left lg:text-right flex flex-col items-start lg:items-end gap-4"
>
  {/* Micro Technical Tagging */}
  

  {/* High-Performance Typography Statement */}
  <p className="text-xs sm:text-sm text-gray-700 font-bold leading-relaxed tracking-wide border-l-2 lg:border-l-0 lg:border-r-2 border-[#F8A900] pl-3 lg:pl-0 lg:pr-3">
    Alega Transmissions Private Limited is a Bengaluru-based manufacturer of industrial coupling solutions, founded by professionals with decades of experience in engineering, manufacturing, quality systems, supply chain management, and industrial marketing.
  </p>

  
</motion.div>
        </div>

        {/* ================= MAIN MATRIX ARCHITECTURE GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT TECH PANE (Who We Are & Dynamic Experience Block) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-md border border-gray-300/70 p-6 rounded-xl flex flex-col gap-4 shadow-sm"
            >
              <div className="flex items-center justify-between pb-2 border-b border-dashed border-gray-200">
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">Who We Are</h3>
                <span className="text-[10px] font-mono text-gray-400">// STRCT_ORG</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                Alega Transmissions Private Limited is a specialized engineering company focused on the design, development, and manufacture of industrial coupling solutions for critical power transmission applications.
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Founded by industry professionals, the company brings together deep expertise across coupling technology, new product development, quality assurance, process control, global sourcing, precision manufacturing, installation, commissioning, and customer support. Our mission is to deliver reliable, high-performance coupling solutions that help industries operate safely, efficiently, and with confidence.
              </p>
            </motion.div>

            {/* Industrial Stat Box Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-gray-900 text-white p-6 rounded-xl border border-white/10 shadow-lg group"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(248,169,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(248,169,0,0.03)_1px,transparent_1px)] bg-[size:14px_14px]" />
              <div className="relative z-10 flex items-center gap-6">
                <div className="text-4xl md:text-5xl font-black font-mono text-[#F8A900] tracking-tighter border-r border-white/10 pr-5 flex flex-col">
                  60+
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white mt-1">Years</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#F8A900]">Combined Matrix</span>
                  <h4 className="text-xs font-black uppercase tracking-wide text-gray-100">Industry Experience Floor</h4>
                  {/* Redesigned Structural Grid — Clear, Highly Readable, and Spaced */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 pt-2 border-t border-white/5 mt-2">
                    {[
                      "Engineering",
                      "Manufacturing",
                      "Quality",
                      "Procurement",
                      "Commissioning",
                      "Support"
                    ].map((pillar) => (
                      <div
                        key={pillar}
                        className="flex items-center gap-2 font-mono text-[11px] tracking-wide text-gray-300 group-hover:text-white transition-colors"
                      >
                        <span className="text-[#F8A900] font-bold text-xs">↳</span>
                        <span className="font-medium">{pillar}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT TECH PANE (Leadership Experience Node Index) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 bg-white/40 backdrop-blur-xl border border-gray-300/70 p-6 rounded-xl flex flex-col justify-between shadow-sm relative group hover:border-[#F8A900]/50 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-[#F8A900] transition-colors" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-transparent group-hover:border-[#F8A900] transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-dashed border-gray-200">
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">Leadership Experience Sector</h3>
                </div>
                <span className="text-[10px] font-mono text-gray-400">Decades of Expertise</span>
              </div>

              <p className="text-xs text-gray-600 mb-4 font-medium">
                The leadership team of Alega Transmissions combines extensive experience gained through years of involvement in the industrial coupling and engineering sectors. Their collective expertise spans:
              </p>

              {/* Vector Data Node Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Industrial Coupling Design & Development",
                  "New Product Development (NPD)",
                  "Quality Systems & Process Control",
                  "Site Installation & Commissioning",
                  "Global Procurement & Supply Chain Management",
                  "Precision Manufacturing & CNC Machining",
                  "Industrial Marketing & CRM",
                  "Application Engineering & Technical Support"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/80 border border-gray-200 p-2.5 rounded-lg">
                    <span className="font-mono text-[10px] text-gray-400 font-bold bg-gray-50 px-1.5 py-0.5 border border-gray-200 rounded">
                      0{index + 1}
                    </span>
                    <span className="text-[11px] font-bold text-gray-700 leading-tight tracking-tight">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* INNOVATIVE BOTTOM FILLER: KINEMATIC GEAR MESH TELEMETRY */}
            {/* INNOVATIVE BOTTOM FILLER: LEADERSHIP CAPABILITY PROFILE */}
            <div className="mt-6 pt-4 border-t border-dashed border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/50 rounded-xl p-4 border border-gray-200/60">

              {/* Leadership Value Statements */}
              <div className="space-y-1 text-left w-full sm:w-auto">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#F8A900] block">// Strategic Governance</span>
                <h4 className="text-xs font-black uppercase tracking-wide text-gray-900">Decades of Proven Executive Steering</h4>
                <p className="text-xs text-gray-600 max-w-md leading-relaxed">
                  Our leadership framework pairs deep domain intelligence with rigorous engineering principles to deliver scalable, cross-industry mechanical power systems.
                </p>
              </div>

              {/* Clean Component Asset Placement */}
              <div className="flex items-center justify-center bg-white border border-gray-200 rounded-lg p-2 w-16 h-16 sm:w-20 sm:h-20 shadow-sm flex-shrink-0 relative group-hover:border-[#F8A900]/40 transition-colors duration-300">
                <div className="w-full h-full flex items-center justify-center">
                  {/* 
        Calling your brand asset component. 
        Adjust sizing internal props if your component supports them 
      */}
                  <AlegaLogoSymbol />
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* ================= LOWER SUB-GRID PANELS (Vision, Mission & Quality) ================= */}
        {/* ================= LOWER SUB-GRID PANELS (Vision, Mission & Quality) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4 items-stretch">

          {/* COMBINED: Strategic Intent Matrix Card (Spans 2 Columns on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/50 backdrop-blur-md border border-gray-300/70 p-6 rounded-xl flex flex-col justify-between shadow-sm lg:col-span-2 relative group hover:border-[#F8A900]/30 transition-all duration-300"
          >
            {/* Structural Blueprint Header */}
            <div className="flex items-center justify-between pb-3 border-b border-gray-200 w-full mb-6">
              <div className="flex items-center gap-2">
                {/* <span className="font-mono text-[10px] text-gray-500 bg-gray-200 px-1.5 py-0.5 rounded font-bold">ALGA-STRAT</span> */}
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">Vision and Mission</h3>
              </div>
              <span className="text-[9px] font-mono text-gray-400">// CORE_FOUNDATION</span>
            </div>

            {/* Split Content Pane Array */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 my-auto">
              
              {/* Vision Segment */}
              <div className="space-y-2.5 relative">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-[#F8A900] rounded-sm" />
                  <h4 className="text-xs font-black uppercase tracking-wider text-gray-900">Corporate Vision</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  To become a preferred global partner for industrial coupling solutions by delivering engineering excellence, precision manufacturing, innovation, and long-term customer value.
                </p>
                {/* <span className="block font-mono text-[9px] text-gray-400 pt-1 tracking-tight">› TARGET_GLOBAL_EXPANSION</span> */}
              </div>

              {/* Mission Segment */}
              <div className="space-y-2.5 md:border-l md:border-dashed md:border-gray-200 md:pl-8">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-gray-900 rounded-sm" />
                  <h4 className="text-xs font-black uppercase tracking-wider text-gray-900">Operational Mission</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  To design, manufacture, and deliver reliable industrial coupling solutions that enhance power transmission performance and support critical industrial operations through quality, innovation, and continuous improvement.
                </p>
                {/* <span className="block font-mono text-[9px] text-gray-400 pt-1 tracking-tight">› DEPLOY_PRECISION_SYSTEMS</span> */}
              </div>

            </div>

            {/* Micro Terminal Validation Bar */}
            <div className="pt-6 mt-6 border-t border-dashed border-gray-200 text-[9px] font-mono text-gray-400 tracking-widest">
              ORGANISATIONAL_GOALS 
            </div>
          </motion.div>

          {/* Quality Terminal Block (Occupies remaining 1 Column perfectly) */}
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
                    Quality Commitment
                  </h3>
                </div>
              </div>

              {/* Big Bold Core Statement */}
              <h4 className="text-sm font-black uppercase tracking-tight text-black leading-tight">
                Zero-Compromise Integration Across Every Operational Phase.
              </h4>

              {/* Refined High-Contrast Body Copy inside an Isolated White Inner Container */}
              <div className="bg-white p-4 rounded-lg border border-dashed border-black/15 shadow-sm">
                <p className="text-xs text-gray-800 font-medium leading-relaxed">
                  Quality is integrated into every stage of our operations—from design and sourcing to manufacturing, inspection, and delivery. Through robust process controls, material traceability, dimensional verification, and performance validation, we ensure dependable products that meet the demanding requirements of industrial applications.
                </p>
              </div>
            </div>

            {/* Bottom Technical Verification Strip */}
            <div className="relative z-10 pt-2 border-t border-black/5 flex items-center justify-between text-[9px] font-mono font-bold text-black/60 mt-auto">
              <span>// PROCESS_CONTROL_SECURE</span>
              <span className="font-sans font-black tracking-widest uppercase">100% Traceability</span>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Industrial Blueprint Divider Strip */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[linear-gradient(to_right,#F8A900_40%,transparent_40%)] bg-[length:32px_3px]" />
    </section>
  )
}