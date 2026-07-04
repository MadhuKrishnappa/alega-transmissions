'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Hero() {
  const [activeModal, setActiveModal] = useState<'consultation' | 'quote' | null>(null)

  // Form States
  const [consultationData, setConsultationData] = useState({
    name: '',
    email: '',
    company: '',
    application: 'Standard Coupling',
    notes: ''
  })

  const [quoteData, setQuoteData] = useState({
    name: '',
    email: '',
    company: '',
    selectedProducts: [] as string[],
    estimatedQuantity: '1-5 units',
    specifications: ''
  })

  // List of product options for checkboxes
  const AVAILABLE_PRODUCTS = [
    'Gear Couplings',
    'Disc Couplings',
    'Pin Bush Couplings',
    'Keyless Locks / Shaft Devices',
    'Industrial Pulleys',
    'Custom Transmission Shafts'
  ]

  const handleProductToggle = (product: string) => {
    setQuoteData(prev => {
      const exists = prev.selectedProducts.includes(product)
      return {
        ...prev,
        selectedProducts: exists
          ? prev.selectedProducts.filter(p => p !== product)
          : [...prev.selectedProducts, product]
      }
    })
  }

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Consultation Dispatch:', consultationData)
    setActiveModal(null)
  }

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Quote Matrix Requested:', quoteData)
    setActiveModal(null)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden py-12 md:py-20 bg-gray-50"
    >
      {/* Background */}
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
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F8A900] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F8A900]"></span>
            </span>
            <span>Alega Transmissions Private Limited</span>
            <span className="h-3 w-[1px] bg-gray-300" />
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.1]">
            DRIVING INDUSTRIAL
            <br />
            <span className="text-[#F8A900]">MOTION WITH CONFIDENCE</span>
          </h1>

          {/* INNOVATIVE DETACHED BLOCK VIEW */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
            <div className="relative group rounded-xl border border-gray-200/80 bg-white/40 backdrop-blur-md p-4 transition-all duration-300 hover:border-gray-300 hover:bg-white/80 shadow-sm">
              <div className="absolute top-0 left-4 -translate-y-1/2 bg-[#F8A900] text-[9px] font-black text-black px-2 py-0.5 rounded uppercase tracking-wider">
                Enterprise Identity
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed pt-1">
                Founded in <strong>2026</strong>, Alega Transmissions Private Limited is a <strong>Bengaluru-based</strong> engineering company dedicated to industrial coupling design, manufacturing, and customized power transmission solutions.
              </p>
            </div>

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

        {/* ================= THE TACTICAL HUD NOTICE BOARD GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch font-sans">

          {/* CARD 1: Why Choose Alega */}
          <div className="group relative lg:col-span-1 bg-white/40 backdrop-blur-xl border border-gray-300/70 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#F8A900] shadow-sm hover:shadow-md rounded-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-[#F8A900] transition-colors" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-transparent group-hover:border-[#F8A900] transition-colors" />
            <div>
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

          {/* CARD 2: Core Engineering Capabilities */}
          <div className="relative lg:col-span-1 bg-gray-900 text-white p-6 flex flex-col justify-between shadow-xl shadow-gray-900/10 rounded-xl overflow-hidden ring-1 ring-white/10">
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

              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    const target = document.getElementById('product-portfolio')
                    if (target) {
                      // Offset calculated to give breathing room beneath floating headers
                      const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      })
                      window.history.pushState(null, '', '#product-portfolio')
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#F8A900] px-4 py-3 text-xs font-black text-black shadow-md transition-all duration-200 hover:bg-[#e09900] uppercase tracking-wider text-center cursor-pointer border-none"
                >
                  View Coupling Solutions
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModal('consultation')}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-xs font-bold text-gray-200 transition-all duration-200 hover:bg-white/10 hover:border-white/40 uppercase tracking-wider cursor-pointer"
                >
                  Request Technical Consultation
                </button>
              </div>
            </div>
          </div>

          {/* CARD 3: Target Sectors & Growth Vision */}
          <div className="group relative lg:col-span-1 bg-white/40 backdrop-blur-xl border border-gray-300/70 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#F8A900] shadow-sm hover:shadow-md rounded-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-[#F8A900] transition-colors" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-transparent group-hover:border-[#F8A900] transition-colors" />

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-dashed border-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-gray-500 bg-gray-200 px-1.5 py-0.5 rounded font-bold">SEC-03</span>
                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">Target Sectors</h3>
                  </div>
                </div>

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

              <div>
                <div className="flex items-center justify-between mb-3 pb-1 border-b border-dashed border-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-gray-500 bg-gray-200 px-1.5 py-0.5 rounded font-bold">VIS-04</span>
                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">Growth Vision</h3>
                  </div>
                </div>

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
          <button
            type="button"
            onClick={() => setActiveModal('quote')}
            className="w-full sm:w-auto text-center rounded-xl bg-gray-900 px-6 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:bg-gray-800 cursor-pointer"
          >
            Request a Quote
          </button>
          {/* FIXED: Swapped from Link to programmatic element scroll binding */}
          <button
            type="button"
            onClick={() => {
              const target = document.getElementById('contact-us')
              if (target) {
                const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                })
                // Safely updates tracking history without hijacking standard browser cycle
                window.history.pushState(null, '', '#contact-us')
              }
            }}
            className="w-full sm:w-auto text-center rounded-xl border border-gray-300 bg-transparent px-6 py-2.5 text-xs font-bold text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Bottom industrial divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[linear-gradient(to_right,#F8A900_40%,transparent_40%)] bg-[length:32px_3px]" />

      {/* ======================================================================== */}
      {/* SHARDED INTERACTIVE MODALS LAYER CONTROL TERMINAL           */}
      {/* ======================================================================== */}
      <AnimatePresence>
        {activeModal !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">

            {/* Overlay Mask */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-gray-950/60 backdrop-blur-sm"
            />

            {/* ----------------- DIALOG A: TECHNICAL CONSULTATION ----------------- */}
            {activeModal === 'consultation' && (
              <motion.div
                initial={{ scale: 0.95, y: 10, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 10, opacity: 0 }}
                className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden z-10 text-gray-900 flex flex-col my-8"
              >
                <div className="bg-gray-900 text-white px-5 py-4 flex items-center justify-between border-b border-gray-800">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm font-black uppercase tracking-wider">Technical Consultation</h2>
                    </div>
                    <p className="text-[11px] text-gray-400 font-medium">Direct diagnostic pipeline to Alega application engineering.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="w-7 h-7 flex items-center justify-center rounded-md border border-gray-800 bg-gray-950/50 text-gray-400 hover:text-white text-xs font-mono transition-colors cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleConsultationSubmit} className="p-5 space-y-4 text-xs font-medium">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Contact Name *</label>
                      <input
                        type="text" required placeholder="Jane Doe" value={consultationData.name}
                        onChange={(e) => setConsultationData({ ...consultationData, name: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] focus:bg-white text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Corporate Email *</label>
                      <input
                        type="email" required placeholder="name@company.com" value={consultationData.email}
                        onChange={(e) => setConsultationData({ ...consultationData, email: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] focus:bg-white text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Company Name *</label>
                    <input
                      type="text" required placeholder="Alega Industries" value={consultationData.company}
                      onChange={(e) => setConsultationData({ ...consultationData, company: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] focus:bg-white text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Transmission Vector Category</label>
                    <select
                      value={consultationData.application}
                      onChange={(e) => setConsultationData({ ...consultationData, application: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] text-sm cursor-pointer appearance-none"
                    >
                      <option value="Standard Coupling">Standard Industrial Couplings (Gear/Disc/Pin)</option>
                      <option value="Custom Architecture">Custom Shaft Lock & Keyless Devices</option>
                      <option value="Pulley Integration">High-Traction Industrial Pulleys</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Application Notes</label>
                    <textarea
                      rows={3} placeholder="Specify torque parameters, running speeds, dimensional limits..." value={consultationData.notes}
                      onChange={(e) => setConsultationData({ ...consultationData, notes: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] text-sm resize-none"
                    />
                  </div>
                  <div className="pt-2 flex items-center justify-end gap-3 border-t border-gray-100">
                    <button type="button" onClick={() => setActiveModal(null)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold uppercase tracking-wider text-[11px] rounded-lg cursor-pointer">Cancel</button>
                    <button type="submit" className="px-5 py-2 bg-[#F8A900] hover:bg-[#e09900] text-black font-black uppercase tracking-wider text-[11px] rounded-lg cursor-pointer shadow-md shadow-[#F8A900]/10">Dispatch Request</button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* ----------------- DIALOG B: REQUEST A QUOTE ----------------- */}
            {activeModal === 'quote' && (
              <motion.div
                initial={{ scale: 0.95, y: 10, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 10, opacity: 0 }}
                className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden z-10 text-gray-900 flex flex-col my-8 max-h-[90vh]"
              >
                <div className="bg-gray-900 text-white px-5 py-4 flex items-center justify-between border-b border-gray-800 flex-shrink-0">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm font-black uppercase tracking-wider">Commercial Quote Request</h2>
                    </div>
                    <p className="text-[11px] text-gray-400 font-medium">Configure product requirements for manufacturing batch pricing.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="w-7 h-7 flex items-center justify-center rounded-md border border-gray-800 bg-gray-950/50 text-gray-400 hover:text-white text-xs font-mono transition-colors cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleQuoteSubmit} className="p-5 space-y-4 text-xs font-medium overflow-y-auto">

                  {/* Contact Block Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Contact Name *</label>
                      <input
                        type="text" required placeholder="John Doe" value={quoteData.name}
                        onChange={(e) => setQuoteData({ ...quoteData, name: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Corporate Email *</label>
                      <input
                        type="email" required placeholder="procurement@company.com" value={quoteData.email}
                        onChange={(e) => setQuoteData({ ...quoteData, email: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Company Name *</label>
                      <input
                        type="text" required placeholder="Infrastructure Corp" value={quoteData.company}
                        onChange={(e) => setQuoteData({ ...quoteData, company: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Volume Run Estimate</label>
                      <select
                        value={quoteData.estimatedQuantity}
                        onChange={(e) => setQuoteData({ ...quoteData, estimatedQuantity: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] text-sm cursor-pointer appearance-none"
                      >
                        <option value="1-5 units">Prototype Block Run (1-5 units)</option>
                        <option value="6-25 units">Mid-Scale Fleet Integration (6-25 units)</option>
                        <option value="26-100 units">High Volume Production Run (26-100 units)</option>
                        <option value="100+ units">Enterprise Custom Contract (100+ units)</option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Multi-Select Checkboxes Product Matrix */}
                  <div className="space-y-2">
                    <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px] block">
                      Target Equipment Allocation (Select Optional Hardware)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-gray-50 border border-gray-200 rounded-xl p-3 shadow-inner">
                      {AVAILABLE_PRODUCTS.map((product) => {
                        const isChecked = quoteData.selectedProducts.includes(product)
                        return (
                          <label
                            key={product}
                            className={`flex items-center gap-2 p-2 rounded-lg border transition-all cursor-pointer text-[11px] font-bold select-none
                              ${isChecked
                                ? 'bg-white border-[#F8A900] text-gray-900 shadow-sm'
                                : 'bg-transparent border-gray-200/60 text-gray-600 hover:bg-gray-100/50'}`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleProductToggle(product)}
                              className="w-3.5 h-3.5 rounded border-gray-300 text-[#F8A900] focus:ring-[#F8A900] accent-[#F8A900] cursor-pointer"
                            />
                            <span>{product}</span>
                          </label>
                        )
                      })}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Dimensional Requirements / Custom Specifications</label>
                    <textarea
                      rows={3} placeholder="Please list specific inner/outer bore diameters, dynamic balance targets, sizing profiles, or structural preferences..." value={quoteData.specifications}
                      onChange={(e) => setQuoteData({ ...quoteData, specifications: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] text-sm resize-none"
                    />
                  </div>

                  {/* Controls Actions Deck */}
                  <div className="pt-3 flex items-center justify-end gap-3 border-t border-gray-100 flex-shrink-0">
                    <button type="button" onClick={() => setActiveModal(null)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold uppercase tracking-wider text-[11px] rounded-lg cursor-pointer">Cancel</button>
                    <button type="submit" className="px-5 py-2 bg-gray-900 hover:bg-gray-800 text-white font-black uppercase tracking-wider text-[11px] rounded-lg cursor-pointer shadow-lg shadow-gray-900/10">Submit Quote Request</button>
                  </div>
                </form>
              </motion.div>
            )}

          </div>
        )}
      </AnimatePresence>
    </section>
  )
}