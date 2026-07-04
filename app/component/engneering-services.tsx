'use client'

import { motion } from 'framer-motion'

export default function EngineeringServices() {
  return (
    <section
      id="engineering-services"
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
                Lifecycle Support
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              SUPPORTING YOUR EQUIPMENT
              <br />
              <span className="text-[#F8A900]">BEYOND MANUFACTURING.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-left lg:text-right flex flex-col items-start lg:items-end gap-4"
          >
            
            <p className="text-xs sm:text-sm text-gray-700 font-bold leading-relaxed tracking-wide border-l-2 lg:border-l-0 lg:border-r-2 border-[#F8A900] pl-3 lg:pl-0 lg:pr-3">
              Alega Transmissions provides comprehensive engineering support services to ensure reliable operation, maximum equipment availability, and extended service life for industrial power transmission systems.
            </p>
          </motion.div>
        </div>

        {/* ================= PRIMARY SERVICES GRID (Installation & Commissioning Matrix) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 2. Installation Support Pane */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-white/40 backdrop-blur-xl border border-gray-300/70 p-6 rounded-xl flex flex-col justify-between shadow-sm relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-dashed border-gray-200">
                <div className="flex items-center gap-2">
                  {/* <span className="font-mono text-[10px] text-[#F8A900] bg-[#F8A900]/10 ... px-1.5 py-0.5 rounded font-bold">SRV-INST</span> */}
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">Installation Support</h3>
                </div>
                {/* <span className="text-[10px] font-mono text-gray-400">// FIELD_MOUNT</span> */}
              </div>
              <p className="text-xs text-gray-600 font-medium leading-relaxed mb-4">
                Professional guidance during coupling installation to ensure proper mounting, shaft alignment, assembly, and adherence to recommended practices.
              </p>

              <div className="space-y-2">
                {[
                  "Coupling installation guidance",
                  "Shaft alignment support",
                  "Assembly verification",
                  "Installation best practices"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/80 border border-gray-200/60 p-2.5 rounded-lg shadow-sm">
                    <span className="text-[#F8A900] font-mono text-xs font-bold">✓</span>
                    <span className="text-xs font-bold text-gray-800 uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 4. Commissioning Assistance Pane */}
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
                  {/* <span className="font-mono text-[10px] text-gray-900 bg-gray-200 px-1.5 py-0.5 rounded font-bold">SRV-CMSN</span> */}
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">Commissioning Assistance</h3>
                </div>
                {/* <span className="text-[10px] font-mono text-gray-400">// SITE_STARTUP</span> */}
              </div>
              <p className="text-xs text-gray-600 font-medium leading-relaxed mb-4">
                Technical support during equipment commissioning to verify coupling performance, alignment accuracy, and smooth system operation under actual working conditions.
              </p>

              <div className="space-y-2">
                {[
                  "Pre-startup inspection",
                  "Alignment verification",
                  "Operational performance checks",
                  "Troubleshooting support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/80 border border-gray-200/60 p-2.5 rounded-lg shadow-sm">
                    <span className="text-gray-900 font-mono text-xs font-bold">✓</span>
                    <span className="text-xs font-bold text-gray-800 uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* ================= REFURBISHMENT SECTORS (Gearbox & Coupling Overhaul Matrix) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 3. Gearbox Refurbishment Services (3-Column Width Breakdown) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white/50 backdrop-blur-md border border-gray-300/70 p-6 rounded-xl flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-gray-200 w-full mb-4">
                <div className="flex items-center gap-2">
                  {/* <span className="font-mono text-[10px] text-gray-500 bg-gray-200 px-1.5 py-0.5 rounded font-bold">REFURB-GEAR</span> */}
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">Gearbox Refurbishment Services</h3>
                </div>
                {/* <span className="text-[9px] font-mono text-gray-400">// OVERHAUL_UNIT</span> */}
              </div>
              <p className="text-xs text-gray-600 font-medium leading-relaxed mb-6">
                Comprehensive inspection, repair, and refurbishment of industrial gearboxes to restore operational reliability and peak mechanical efficiency.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: "Gear Inspection", desc: "Complete crack testing, profile wear assessment, and component replacement." },
                  { title: "Bearing Rebuilds", desc: "Precision bearing replacement and seating clearance calibrations." },
                  { title: "Shaft Restoration", desc: "Journal repair, dimensional restoration, and keyway reconstruction." },
                  { title: "Housing & Testing", desc: "Bore alignment checks, absolute cleaning, final assembly, and spin tests." }
                ].map((srv, idx) => (
                  <div key={idx} className="border-l-2 border-gray-400 pl-3 py-1 space-y-0.5">
                    <h4 className="text-xs font-black uppercase tracking-tight text-gray-900">{srv.title}</h4>
                    <p className="text-[11px] text-gray-500 font-medium leading-normal">{srv.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            
          </motion.div>

          {/* 5. Coupling Refurbishment Services (5-Column Balance Card) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white/50 backdrop-blur-md border border-gray-300/70 p-6 rounded-xl flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-gray-200 w-full mb-4">
                <div className="flex items-center gap-2">
                  {/* <span className="font-mono text-[10px] text-[#F8A900] bg-[#F8A900]/10 px-1.5 py-0.5 rounded font-bold">REFURB-CPLG</span> */}
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">Coupling Refurbishment</h3>
                </div>
                {/* <span className="text-[9px] font-mono text-gray-400">// CORE_RESTORE</span> */}
              </div>
              <p className="text-xs text-gray-600 font-medium leading-relaxed mb-4">
                Restoration of industrial couplings to improve execution specs, extend operational life, and drastically lower complete replacement expenditures.
              </p>

              <div className="space-y-2">
                {[
                  "Condition assessment & NDT testing",
                  "Precision component matching & replacement",
                  "Re-machining and critical surface restoration",
                  "Dynamic balancing for rotational optimization",
                  "Final performance validation protocols"
                ].map((item, idx) => (
                  <div key={idx} className="text-[11px] font-bold text-gray-700 flex items-start gap-2">
                    <span className="text-[#F8A900]">›</span>
                    <span className="uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            
          </motion.div>

        </div>

        {/* ================= 6. SITE TECHNICAL SUPPORT (Full Width Closing Banner Block) ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#F8A900] text-black p-6 md:p-8 rounded-xl shadow-xl border border-black/10 relative overflow-hidden group ring-4 ring-[#F8A900]/20 flex flex-col justify-between"
        >
          {/* Blueprint Grid Texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
          
          <div className="relative z-10 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b-2 border-black/10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                </span>
                <h3 className="text-xs font-black uppercase tracking-[0.15em] text-black">
                  6. Site Technical Support
                </h3>
              </div>
              <span className="text-[9px] font-mono font-bold text-black/50 tracking-widest">// RAPID_RESPONSE_UNIT</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-4 space-y-2">
                <h4 className="text-lg font-black uppercase tracking-tight text-black leading-tight">
                  On-Site Engineering Diagnostics & Asset Optimization.
                </h4>
                <p className="text-xs text-black/80 font-medium leading-relaxed">
                  Direct field engineering assistance for troubleshooting, failure validation, performance assessment, and strategic maintenance charting of complex drive operations.
                </p>
              </div>

              {/* Dynamic 4-Column Tag Array */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: "Failure Analysis", sub: "Root cause diagnostics" },
                  { label: "Performance Eval", sub: "Live threshold tracking" },
                  { label: "Maintenance Recs", sub: "Preventative execution" },
                  { label: "Root Cause Invest", sub: "Structural validation" }
                ].map((tag, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-lg border border-black/10 shadow-sm flex flex-col justify-between">
                    <span className="text-[10px] font-mono font-black text-gray-400 block">CASE_0{idx + 1}</span>
                    <span className="text-xs font-black uppercase tracking-tight text-gray-900 block mt-1">{tag.label}</span>
                    <span className="text-[10px] text-gray-500 font-medium leading-tight mt-0.5">{tag.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-black/5 flex items-center justify-between text-[9px] font-mono font-bold text-black/60 mt-6">
            <span>// DEPLOYMENT_READY_NATIONWIDE</span>
            <span className="font-sans font-black tracking-widest uppercase">Engineered Reliability</span>
          </div>
        </motion.div>

      </div>

      {/* Bottom Industrial Blueprint Divider Strip */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[linear-gradient(to_right,#F8A900_40%,transparent_40%)] bg-[length:32px_3px]" />
    </section>
  )
}