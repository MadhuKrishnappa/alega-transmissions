'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import GearCouplingDetail from './GearCouplingDetail'
import DiscCouplingDetail from './DiscCouplingDetail'

interface ProductItem {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  specs: { label: string; value: string }[]
  keyFeatures: string[]
}

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'gear-couplings',
    name: 'Gear Couplings',
    tagline: 'High Torque Transmission Solutions',
    description: 'High torque transmission for heavy-duty industrial applications. Accommodates substantial parallel, angular, and axial shaft misalignments under high structural loads.',
    image: '/prod-coming-soon.png',
    specs: [
      { label: 'Torque Capacity', value: 'High Density Profile' },
      { label: 'Material Matrix', value: 'Forged Alloy Steel' },
      { label: 'Alignment Tolerance', value: 'Multi-Axis Offset' }
    ],
    keyFeatures: ['Crown-ground tooth geometry profiles', 'Optimal lubrication retention sealing', 'Maximum power-to-weight footprint']
  },
  {
    id: 'disc-couplings',
    name: 'Disc Couplings',
    tagline: 'High-Performance Torsional Rigidity',
    description: 'High-performance couplings offering torsional rigidity and zero backlash. Offers infinite fatigue life characteristics with zero lubrication dependencies.',
    image: '/prod-coming-soon.png',
    specs: [
      { label: 'Backlash Metric', value: 'Absolute Zero' },
      { label: 'Flex Element', value: 'Stainless Steel Disc Packs' },
      { label: 'Lubrication', value: 'Zero Maintenance Needed' }
    ],
    keyFeatures: ['Torsionally stiff flexible element stacks', 'Visual inspection check convenience', 'High speed stability performance']
  },
  {
    id: 'pin-bush-couplings',
    name: 'Pin Bush Couplings',
    tagline: 'Shock Load & Vibration Damping',
    description: 'Flexible couplings designed to absorb shock loads and vibration. Engineered to protect connected machinery columns from high fatigue cyclic loads.',
    image: '/prod-coming-soon.png',
    specs: [
      { label: 'Vibration Isolation', value: 'High Elastomeric Damping' },
      { label: 'Bushing Profile', value: 'Premium Grade NBR / Polyurethane' },
      { label: 'Fail-Safe Status', value: 'Integrated Standard' }
    ],
    keyFeatures: ['No alignment teardown for element swap', 'Permits structural angular offsets', 'Robust cast-iron or steel hub configurations']
  },
  {
    id: 'jaw-couplings',
    name: 'Jaw Couplings',
    tagline: 'Economical Elastomeric Damping',
    description: 'Economical solutions for vibration damping and general industrial applications. Fosters clean fail-safe operations alongside effective dampening.',
    image: '/prod-coming-soon.png',
    specs: [
      { label: 'Insert Elastomers', value: 'NBR / Spider Insert Options' },
      { label: 'Assembly Model', value: 'Straightforward Plug-and-Play' },
      { label: 'Value Index', value: 'Highly Cost-Efficient' }
    ],
    keyFeatures: ['Fail-safe jaw design configuration', 'Requires zero system lubrication', 'Resilient against environmental oils']
  },
  {
    id: 'rigid-couplings',
    name: 'Precision Shaft Alignment Matrix',
    tagline: '',
    description: 'Precision shaft connection for accurate alignment and power transmission where torsional flexibility or shaft movement is unwanted.',
    image: '/prod-coming-soon.png',
    specs: [
      { label: 'Alignment Profile', value: 'True Coaxial Rigid Fit' },
      { label: 'Locking System', value: 'High Tensile Cap Screws' },
      { label: 'Configuration', value: 'One-Piece / Split Two-Piece' }
    ],
    keyFeatures: ['Zero backlash connection metrics', 'Excellent structural holding load limits', 'Prevents axial shaft drifting']
  },
  {
    id: 'custom-couplings',
    name: 'Custom Couplings',
    tagline: 'Tailor-Made Application Engineering',
    description: 'Engineered solutions designed for unique application requirements, tight footprints, or specialized heavy torque configurations.',
    image: '/prod-coming-soon.png',
    specs: [
      { label: 'Engineering Scope', value: 'Bespoke Application Design' },
      { label: 'Verification Method', value: 'FEA Stress Profiling Verified' },
      { label: 'Adaptability', value: 'Direct Replacement Fits' }
    ],
    keyFeatures: ['Engineered from structural raw blueprints', 'Optimized weight-to-inertia tracking', 'Tailored to unique industrial environments']
  },
  {
    id: 'industrial-pulleys',
    name: 'Industrial Pulleys',
    tagline: 'Precision-Machined Power Tractions',
    description: 'Precision-machined pulleys designed for efficient power transmission in conveyor systems, process equipment, compressors, fans, and industrial machinery.',
    image: '/prod-coming-soon.png',
    specs: [
      { label: 'System Variety', value: 'Drive / Tail / Snub / Take-up' },
      { label: 'Dynamic Balancing', value: 'ISO 1940 Quality Standard' },
      { label: 'Shell Structural', value: 'Heavy-Wall Welded Steel' }
    ],
    keyFeatures: ['Solid machined internal hub discs', 'High durability structural welding paths', 'Optional plain rubber or ceramic tile lagging']
  },
  {
    id: 'keyless-locking-devices',
    name: 'Keyless Locking Devices',
    tagline: 'Backlash-Free Shaft-Hub Adapters',
    description: 'Advanced shaft-hub connection systems providing backlash-free torque transmission, easy installation, improved concentricity, and superior holding power without keys or splines.',
    image: '/prod-coming-soon.png',
    specs: [
      { label: 'Connection Type', value: 'Friction Expansion Clamping' },
      { label: 'Keyway Dependency', value: 'Absolute Zero (Keyless)' },
      { label: 'Load Dynamics', value: 'Simultaneous Torque & Thrust' }
    ],
    keyFeatures: ['Eliminates localized notch stress points', 'Infinitely adjustable axial adjustments', 'Superior concentricity control tracking']
  },
  {
    id: 'high-tensile-fasteners',
    name: 'High Tensile Fasteners',
    tagline: 'Critical Structural Locking Hardware',
    description: 'Custom-manufactured high-strength fasteners engineered for critical industrial applications requiring exceptional strength, reliability, and performance under demanding operating conditions.',
    image: '/prod-coming-soon.png',
    specs: [
      { label: 'Strength Classes', value: 'Grade 8.8 / 10.9 / 12.9 Standard' },
      { label: 'Surface Coating', value: 'Phosphated / Zinc / Dacromet' },
      { label: 'Thread Geometry', value: 'Precision Rolled Execution' }
    ],
    keyFeatures: ['Exceptional shear load resistance limits', 'Excellent fatigue strength properties', 'Tested for extreme industrial environments']
  }
]

export default function ProductPortfolio() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null)

  return (
    <section
      id="product-portfolio"
      className="relative py-20 bg-gray-50 text-gray-900 overflow-hidden"
    >
      {/* Absolute Background Sync Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] md:bg-[size:48px_48px] bg-[size:32px_32px] pointer-events-none" />
      <div
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: "url('/alega-logo.png')" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* ================= SECTION EDITORIAL HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 space-y-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-300/80 bg-white/60 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-gray-500 shadow-sm backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F8A900]" />
            <span>Product Portfolio</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 leading-[1.1] uppercase">
            Industrial Coupling <span className="text-[#F8A900]">Solutions</span>
          </h2>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wide text-gray-500">
            Reliable Power Transmission for Critical Industrial Applications
          </p>
          <div className="w-12 h-[2px] bg-[#F8A900] mt-4" />
        </motion.div>

        {/* ================= EDITORIAL CARD GRID MATRICES ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {PRODUCTS_DATA.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              onClick={() => setSelectedProduct(product)}
              className="group relative bg-white/40 backdrop-blur-xl border border-gray-300/70 p-5 flex flex-col justify-between transition-all duration-300 hover:border-[#F8A900] hover:bg-white/80 shadow-sm hover:shadow-md rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Telemetry Corner Accents */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-[#F8A900] transition-colors" />

              <div>
                {/* Media Shell Box */}
                <div className="relative h-40 w-full rounded-lg bg-white border border-gray-200/80 overflow-hidden flex items-center justify-center p-4 shadow-inner mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={160}
                    height={120}
                    className="object-contain opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 grayscale group-hover:grayscale-0"
                  />
                  <span className="absolute bottom-2 right-2 font-mono text-[9px] text-gray-400 font-bold tracking-tight">
                    [MTRX_0{i + 1}]
                  </span>
                </div>

                {/* Info Text Stack */}
                <div className="space-y-1.5">
                  <h3 className="text-sm font-black uppercase tracking-wider text-gray-900 group-hover:text-[#F8A900] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Integration */}
              <div className="pt-4 mt-4 border-t border-dashed border-gray-200 flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 group-hover:text-gray-900 transition-colors">
                <span>View Specifications</span>
                <span>[⚙️]</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ======================================================================== */}
      {/* PRODUCT SPECS LIGHT MODAL CONSOLE INTERFACE               */}
      {/* ======================================================================== */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">

            {/* Modal Light Backdrop Mask */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ type: 'spring', duration: 0.35 }}
              className="relative w-full max-w-4xl bg-white border border-gray-300 rounded-xl shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col"
            >
              {/* Close Button Anchor */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-7 h-7 rounded-full border border-gray-200 hover:border-[#F8A900] bg-gray-50 text-gray-500 hover:text-gray-900 flex items-center justify-center text-xs transition-colors z-30 focus:outline-none"
              >
                ✕
              </button>

              {/* ==================================================================
                DYNAMIC SCROLLABLE INNER BODY VIEWPORTS
                Added localized 'p-6 sm:p-8' padding maps directly to custom views
                to avoid double scrollbars while maintaining layout consistency.
                ==================================================================
              */}
              {selectedProduct.id === 'gear-couplings' ? (
                <div className="overflow-y-auto flex-1 p-6 sm:p-8">
                  <GearCouplingDetail />
                </div>
              ) : selectedProduct.id === 'disc-couplings' ? (
                <div className="overflow-y-auto flex-1 p-6 sm:p-8">
                  <DiscCouplingDetail />
                </div>
              ) : (
                /* DEFAULT COMPONENT MODAL LAYOUT FALLBACK */
                <>
                  {/* Inner Content Block */}
                  <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-6">
                    {/* Head Split Layer Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center border-b border-gray-200 pb-5">
                      <div className="sm:col-span-4 bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-center aspect-square shadow-inner">
                        <Image
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          width={140}
                          height={140}
                          className="object-contain grayscale opacity-60"
                        />
                      </div>
                      <div className="sm:col-span-8 space-y-1">
                        <span className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest bg-gray-100 border border-gray-200 px-2 py-0.5 rounded">
                          Technical Spec Sheet
                        </span>
                        <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight pt-1">
                          {selectedProduct.name}
                        </h3>
                        <p className="text-xs text-gray-600 font-medium leading-relaxed pt-1">
                          {selectedProduct.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Technical Split Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Technical Parameters Parameter */}
                      <div className="space-y-2">
                        <h4 className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider border-b border-gray-200 pb-1">
                          // System Configuration Parameters
                        </h4>
                        <div className="bg-gray-50 border border-gray-200/80 rounded-lg divide-y divide-gray-200 overflow-hidden shadow-inner">
                          {selectedProduct.specs.map((spec, index) => (
                            <div key={index} className="p-2.5 flex justify-between gap-4 text-xs font-semibold">
                              <span className="text-gray-500 uppercase tracking-wide text-[10px]">{spec.label}</span>
                              <span className="text-gray-800 text-right">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Design Structural Elements */}
                      <div className="space-y-2">
                        <h4 className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider border-b border-gray-200 pb-1">
                          // Engineering Advantages
                        </h4>
                        <ul className="space-y-2">
                          {selectedProduct.keyFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 font-semibold">
                              <span className="text-[#F8A900] font-mono text-[10px] mt-0.5">✦</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sticky Action Footer Box */}
                  <div className="bg-gray-50 border-t border-gray-200 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                      Alega Transmissions // System Data sheet View
                    </span>
                    <a
                      href="#contact-us"
                      onClick={() => setSelectedProduct(null)}
                      className="w-full sm:w-auto px-5 py-2 rounded-lg bg-gray-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-gray-800 text-center transition-all shadow-sm"
                    >
                      Request Technical Quotation
                    </a>
                  </div>
                </>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom industrial divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[linear-gradient(to_right,#F8A900_40%,transparent_40%)] bg-[length:32px_3px]" />
    </section>
  )
}