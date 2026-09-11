'use client'

import Image from 'next/image'

interface DiscCouplingDetailProps {
  onClose?: () => void;
}

export default function DiscCouplingDetail({ onClose }: DiscCouplingDetailProps) {
  const variants = [
    {
      code: "ATX-L Series",
      image: '/images/disc-couplings/atx-ll-series.png',
      title: "Low Speed Disc Couplings",
      description: "Engineered specifically for high-torque, low-velocity installations where structural raw material strength and absolute fatigue-life metrics under massive constant strain are critical.",
      applications: ["Pump Applications", "Agitators & Process Mixers", "Heavy Material Conveyors", "Primary Process Plant Machinery"]
    },
    {
      code: "ATX-M Series",
      image: '/images/disc-couplings/atx-mm-series.png',
      title: "Medium Duty Disc Couplings",
      description: "Optimized balanced profile configuration tailored to handle medium torque profiles paired with elevated, high-speed continuous dynamic industrial machinery rotations.",
      applications: ["Centrifugal Pumps", "Industrial Compressors", "High-Volume Fans & Blowers", "Power Generators", "General Machinery Lines"]
    },
    {
      code: "ATX-H Series",
      image: '/images/disc-couplings/atx-hh-series.png',
      title: "Heavy Duty Disc Couplings",
      description: "Premium heavy industrial drive transmission array built with extreme ruggedness to absorb punishing cyclical reversals and immense prime mover output loads.",
      applications: ["Steam/Gas Turbines", "Large Scale Compressors", "Steel Rolling Mill Drives", "Heavy Industrial Machinery"]
    }
  ]

  const technicalFeatures = [
    { title: "Zero Lubrication Needed", desc: "True metallic construction eliminates internal moving components, providing maintenance-free operation." },
    { title: "Torsionally Rigid Drive", desc: "High angular stiffness guarantees absolute rotational precision and zero structural backlash." },
    { title: "Optimized Inertia Footprint", desc: "Compact and lightweight design preserves critical bearing lifetime matrices by lowering dynamic loads." },
    { title: "Multi-Axis Deviation Protection", desc: "Precision assembly safely isolates connected assets by neutralizing overlapping angular and axial offsets." },
    { title: "High-Velocity Balancing", desc: "Inherently accurate geometry allows smooth, safe performance across high-speed rotating shafts." },
    { title: "Severe Environment Durability", desc: "Stainless steel elements resist extreme industrial environments, temperature swings, and chemical misting." }
  ]

  return (
    <div className="bg-white text-gray-900 pt-6 pb-12 antialiased selection:bg-[#F8A900]/30">
      <div className="space-y-10">

        {/* ================= 1. SECTION MODEL SPEC TRACKER ================= */}
        <header className="border-b border-gray-100 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-widest text-gray-500 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded">
                <span>SERIES_ATX</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 uppercase">
                ATX Series <span className="text-[#F8A900]">Disc Couplings</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wide">
                High-Performance Zero-Backlash Transmission Hardware
              </p>
            </div>
          </div>
        </header>

        {/* ================= 2. EXECUTIVE CORE SUMMARY ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">// Architectural Core</h3>
            <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
              The ATX Series disc couplings are metallic flexible elements specifically built for reliable torque transmission inside precision-dependent, challenging modern power delivery networks.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
              By nesting custom structural stainless steel disc packs between premium-grade hubs, these systems effortlessly bridge driving components while countering spatial misalignments. This layout maintains structural torsional rigidity, ensuring smooth performance in high-speed and heavy-duty environments.
            </p>
          </div>
          <div className="lg:col-span-5 bg-gray-50 p-4 border border-gray-200/60 rounded-xl relative">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F8A900]" />
            <span className="block text-[9px] font-mono uppercase tracking-widest text-gray-400 mb-1">Operational Directive</span>
            <p className="text-xs text-gray-700 font-bold leading-relaxed">
              Perfectly suited for zero-maintenance setups where elastomeric wear, runtime stretching, or lubrication downtime checks cannot be tolerated.
            </p>
          </div>
        </section>

        {/* ================= 3. SYSTEM VARIANTS MATRIX ================= */}
        {/* ================= 3. PRODUCT VARIANTS ================= */}
        <section
          aria-labelledby="atx-variants-heading"
          className="space-y-5 border-t border-gray-100 pt-6"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="h-1 w-6 rounded-full bg-[#F8A900]"
              />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-500">
                01 / Engineered Product Variants
              </h3>
            </div>

            <h4
              id="atx-variants-heading"
              className="text-lg font-extrabold tracking-tight text-gray-900 sm:text-xl"
            >
              ATX Specialized Class Configurations
            </h4>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
            {variants.map((variant, index) => (
              <article
                key={variant.code}
                className="
          group flex min-w-0 flex-col overflow-hidden
          rounded-2xl border border-gray-200 bg-white
          shadow-[0_2px_10px_-6px_rgba(15,23,42,0.12)]
          transition-[border-color,box-shadow] duration-300
          hover:border-amber-300
          hover:shadow-[0_12px_32px_-18px_rgba(15,23,42,0.25)]
        "
              >
                {/* Series header */}
                <div className="flex items-center justify-between gap-3 px-5 pt-5">
                  <span
                    className="
              inline-flex items-center gap-2 rounded-md
              bg-gray-900 px-3 py-1.5 text-[10px]
              font-extrabold uppercase tracking-wider text-white
            "
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-[#F8A900]"
                    />
                    {variant.code}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-[10px] font-semibold tabular-nums tracking-widest text-gray-400"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Equal-height image stage; white backgrounds blend into card */}
                <div className="relative mx-5 my-4 h-52 bg-white sm:h-60 lg:h-52">
                  <Image
                    src={variant.image}
                    alt={`${variant.code} — ${variant.title}`}
                    fill
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    className="
              object-contain object-center p-3
              motion-safe:transition-transform
              motion-safe:duration-500
              motion-safe:group-hover:scale-[1.04]
            "
                  />
                </div>

                {/* Aligned title and description */}
                <div className="flex flex-1 flex-col border-t border-gray-100">
                  <div className="flex-1 px-5 pb-5 pt-4">
                    <div
                      aria-hidden="true"
                      className="mb-3 h-[3px] w-8 rounded-full bg-[#F8A900]"
                    />

                    <h5 className="text-sm font-extrabold leading-snug tracking-tight text-gray-900">
                      {variant.title}
                    </h5>

                    <p className="mt-2 text-xs font-medium leading-relaxed text-gray-600">
                      {variant.description}
                    </p>
                  </div>

                  {/* Application area anchored at the bottom */}
                  <div className="border-t border-gray-100 bg-gray-50/70 px-5 py-4">
                    <span className="mb-2.5 block text-[9px] font-bold uppercase tracking-[0.15em] text-gray-500">
                      Typical Applications
                    </span>

                    <ul className="flex flex-wrap gap-1.5">
                      {variant.applications.map((app) => (
                        <li
                          key={app}
                          className="
                    inline-flex items-center gap-1.5 rounded-md
                    border border-gray-200/80 bg-white
                    px-2 py-1 text-[10px] font-semibold
                    leading-snug text-gray-600
                  "
                        >
                          <span
                            aria-hidden="true"
                            className="h-1 w-1 shrink-0 rounded-full bg-[#F8A900]"
                          />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= 4. DETAILED ENGINEERING CHARACTERISTICS ================= */}
        <section className="space-y-4 pt-4 border-t border-gray-100">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">02 / Design Advantages</h3>
            <h4 className="text-base font-black text-gray-900 uppercase tracking-tight">Technical Feature Architecture</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-4 bg-gray-50/50 border border-gray-200/70 rounded-xl space-y-1.5 hover:bg-white hover:border-[#F8A900] transition-all duration-200 group"
              >
                <div className="flex items-center gap-2 text-xs font-extrabold text-gray-900 uppercase tracking-wide">
                  <span className="text-[#F8A900] font-mono text-[9px] group-hover:scale-110 transition-transform">✦</span>
                  <h5>{feat.title}</h5>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed font-medium">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= COMPACT REGULATORY CONTROL FOOTER ================= */}
        <footer className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
            Alega Transmissions Manufacturing Matrix // ATX_SERIES_VERIFIED
          </span>
          <a
            href="#contact-us"
            onClick={() => {
              if (onClose) onClose();
            }}
            className="text-[10px] font-mono font-black uppercase text-gray-900 hover:text-[#F8A900] tracking-widest transition-colors"
          >
            Request Full Technical Catalog ⟶
          </a>
        </footer>

      </div>
    </div>
  )
}