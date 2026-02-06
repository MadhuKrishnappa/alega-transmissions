import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200" />

      {/* Industrial grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]  md:bg-[size:48px_48px] bg-[size:32px_32px]" />

      {/* Watermark Logo */}
      <div
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.04] bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/alega-logo.png')" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
            Industrial Couplings & Precision Engineering
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Engineering Motion.
            <br />
            <span className="text-[#F8A900]">Delivering Precision.</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl">
            High-performance industrial couplings engineered for reliability,
            durability, and demanding applications across global industries.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#products"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#F8A900] text-black font-semibold border border-[#F8A900]
                hover:bg-transparent hover:text-[#F8A900] transition"
            >
              Explore Products
              <ChevronRightIcon className="w-5 h-5" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center px-7 py-3 border border-gray-400 text-gray-700 font-medium
                hover:border-gray-700 hover:text-gray-900 transition"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom industrial divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[linear-gradient(to_right,#F8A900_40%,transparent_40%)] bg-[length:32px_3px]" />
    </section>
  )
}
