'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const products = [
  {
    name: 'Gear Couplings',
    description:
      'High torque transmission solutions designed for heavy-duty and high-load industrial applications.',
    image: '/prod-coming-soon.png',
  },
  {
    name: 'Pin Bush Couplings',
    description:
      'Flexible and reliable couplings engineered to absorb shock loads and vibration.',
    image: '/prod-coming-soon.png',
  },
  {
    name: 'Disc Couplings',
    description:
      'Precision-engineered couplings offering zero backlash and high torsional stiffness.',
    image: '/prod-coming-soon.png',
  },
  {
    name: 'Rigid Couplings',
    description:
      'Robust couplings designed for accurate shaft alignment and rigid power transmission.',
    image: '/prod-coming-soon.png',
  },
  {
    name: 'Jaw Couplings',
    description:
      'Compact and efficient solutions providing vibration damping and easy maintenance.',
    image: '/prod-coming-soon.png',
  },
  {
    name: 'Customized Coupling Solutions',
    description:
      'Tailor-made coupling designs engineered to meet specific operational requirements.',
    image: '/prod-coming-soon.png',
  },
]

export default function ProductPortfolio() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? products : products.slice(0, 3)

  return (
    <section
      id="products"
      className="relative py-24 bg-gray-100 overflow-hidden"
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

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            Product Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Engineered Coupling Solutions
            <br />
            <span className="text-[#F8A900]">For Demanding Applications</span>
          </h2>
          <p className="mt-5 text-gray-600 max-w-2xl">
            Our range of industrial couplings is designed to deliver reliable
            torque transmission, durability, and precision across diverse
            operating conditions.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-14">
          {visible.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group"
            >
              {/* Image */}
              <div className="relative h-48 w-full border border-gray-200 bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 grayscale group-hover:grayscale-0 transition"
                />
              </div>

              {/* Text */}
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#F8A900] transition">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toggle */}
        <div className="mt-16">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-8 py-3 border border-[#F8A900] text-[#F8A900] font-semibold
              hover:bg-[#F8A900] hover:text-black transition"
          >
            {expanded ? 'Show Fewer Products' : 'View Full Portfolio'}
          </button>
        </div>
      </div>
       {/* Bottom industrial divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[linear-gradient(to_right,#F8A900_40%,transparent_40%)] bg-[length:32px_3px]" />
    </section>
  )
}
