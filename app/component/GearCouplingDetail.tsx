'use client'

import Image from 'next/image'

interface GearCouplingDetailProps {
  onClose?: () => void;
}

const couplingTypes = [
  {
    name: 'Brake Drum Integrated Gear Coupling',
    image: '/images/gear-couplings/brake-drum-integrated.png',
  },
  {
    name: 'Double Engagement Mill Coupling',
    image: '/images/gear-couplings/double-engagement-mill.png',
  },
  {
    name: 'Gear Coupling with Brake Disc',
    image: '/images/gear-couplings/brake-disc.png',
  },
  {
    name: 'Half Gear Coupling',
    image: '/images/gear-couplings/half-gear.png',
  },
  {
    name: 'Limited Axial Float Gear Coupling',
    image: '/images/gear-couplings/limited-axial-float.png',
  },
  {
    name: 'Mill Duty Coupling',
    image: '/images/gear-couplings/mill-duty.png',
  },
  {
    name: 'Rigid Coupling',
    image: '/images/gear-couplings/rigid.png',
  },
  {
    name: 'Straight Sleeve Gear Coupling',
    image: '/images/gear-couplings/straight-sleeve.png',
  },
  {
    name: 'Torque Limiting Shear Pin Gear Coupling',
    image: '/images/gear-couplings/torque-limiting-shear-pin.png',
  },
  {
    name: 'Torsional Floating Shaft Coupling',
    image: '/images/gear-couplings/torsional-floating-shaft.png',
  },
  {
    name: 'Torsional Shaft / Spacer Type Coupling',
    image: '/images/gear-couplings/torsional-shaft-spacer.png',
  },
  {
    name: 'Vertical Mounting Coupling',
    image: '/images/gear-couplings/vertical-mounting.png',
  },
  {
    name: 'Winch Drum Coupling',
    image: '/images/gear-couplings/winch-drum.png',
  },
]

export default function GearCouplingDetail({ onClose }: GearCouplingDetailProps) {
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

        {/* ================= COUPLING RANGE ================= */}
        <section
          aria-labelledby="coupling-range-heading"
          className="space-y-6 border-t border-gray-100 pt-8"
        >
          {/* Section heading */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <div className="mb-2 flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="h-1 w-7 rounded-full bg-[#F8A900]"
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                  02 / Coupling Range
                </span>
              </div>

              <h2
                id="coupling-range-heading"
                className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
              >
                Explore our gear couplings
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Discover coupling configurations for a range of industrial
                drive applications.
              </p>
            </div>

            <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-amber-200/70 bg-amber-50 px-3 py-1.5">
              <span className="text-sm font-extrabold tabular-nums text-gray-900">
                {couplingTypes.length}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                Configurations
              </span>
            </span>
          </div>

          {/* Product gallery */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {couplingTypes.map((coupling, index) => (
              <figure
                key={coupling.image}
                className="
          group relative flex h-full flex-col overflow-hidden
          rounded-2xl border border-gray-200 bg-white
          shadow-[0_2px_8px_-4px_rgba(15,23,42,0.10)]
          transition-[border-color,box-shadow] duration-300
          hover:border-amber-300
          hover:shadow-[0_12px_32px_-16px_rgba(15,23,42,0.22)]
        "
              >
                {/* Consistent white image stage */}
                <div className="relative isolate aspect-[4/3] overflow-hidden bg-white">
                  {/* Catalogue number */}
                  <span
                    aria-hidden="true"
                    className="
              absolute left-4 top-4 z-10 inline-flex h-7 min-w-7
              items-center justify-center rounded-lg
              border border-gray-100 bg-white/95 px-1.5
              text-[10px] font-semibold tabular-nums text-gray-400
            "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="absolute inset-x-6 bottom-5 top-12 sm:inset-x-7">
                    <Image
                      src={coupling.image}
                      alt={coupling.name}
                      fill
                      sizes="
                (max-width: 639px) 100vw,
                (max-width: 1023px) 50vw,
                33vw
              "
                      className="
                object-contain
                motion-safe:transition-transform
                motion-safe:duration-500
                motion-safe:group-hover:scale-[1.04]
              "
                    />
                  </div>
                </div>

                {/* Product title */}
                <figcaption
                  className="
            relative flex flex-1 items-center gap-3
            border-t border-gray-100 bg-gray-50/70 px-4 py-4
            transition-colors duration-300
            group-hover:bg-amber-50/60 sm:px-5
          "
                >
                  <span
                    aria-hidden="true"
                    className="
              h-8 w-[3px] shrink-0 rounded-full
              bg-[#F8A900]/70 transition-colors
              group-hover:bg-[#F8A900]
            "
                  />

                  <h3 className="text-sm font-bold leading-snug tracking-tight text-gray-900">
                    {coupling.name}
                  </h3>
                </figcaption>
              </figure>
            ))}

            {/* Completes the final row at both tablet and desktop widths */}
            <div
              className="
        relative flex flex-col justify-center overflow-hidden
        rounded-2xl border border-gray-800 bg-gray-900
        p-6 text-white sm:col-span-1 sm:p-7 lg:col-span-2 lg:p-9
      "
            >
              {/* Subtle mechanical ring detail */}
              <div
                aria-hidden="true"
                className="
          pointer-events-none absolute -right-16 -top-16
          h-64 w-64 rounded-full border-[36px] border-white/[0.03]
        "
              />
              <div
                aria-hidden="true"
                className="
          pointer-events-none absolute -bottom-24 right-12
          h-56 w-56 rounded-full border border-white/[0.06]
        "
              />

              <div className="relative max-w-md">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F8A900]">
                  Application support
                </span>

                <h3 className="mt-3 text-xl font-bold leading-tight tracking-tight sm:text-2xl">
                  Find the right coupling
                  <br />
                  for your drive.
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  Share your torque, speed, shaft dimensions, and mounting
                  requirements with our team.
                </p>

                <a
                  href="#contact-us"
                  onClick={() => onClose?.()}
                  className="
            mt-6 inline-flex min-h-11 items-center justify-center
            gap-3 rounded-lg bg-[#F8A900] px-5 py-3
            text-xs font-bold text-gray-950
            transition-colors hover:bg-amber-400
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-amber-400 focus-visible:ring-offset-2
            focus-visible:ring-offset-gray-900
          "
                >
                  Discuss Your Requirements

                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 3. LOWER DESIGN FEATURES ARRAYS ================= */}
        <section className="space-y-4 pt-4 border-t border-gray-100">
          <div className="space-y-0.5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">
              03 / Key Engineering Features
            </h2>
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
                onClick={() => {
                  if (onClose) onClose();
                }}
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