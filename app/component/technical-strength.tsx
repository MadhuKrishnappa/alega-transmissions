'use client'

import { motion } from 'framer-motion'
import {
  CpuChipIcon,
  BeakerIcon,
  CheckBadgeIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'

const strengths = [
  {
    title: 'CAD / CAE-Based Design & Simulation',
    icon: CpuChipIcon,
    description:
      'Advanced 3D modeling and simulation tools are used to optimize coupling geometry, stress distribution, and performance before manufacturing.',
  },
  {
    title: 'Rapid Prototyping & Functional Validation',
    icon: BeakerIcon,
    description:
      'In-house prototyping and functional testing enable faster development cycles and validation under real-world operating conditions.',
  },
  {
    title: 'ISO-Driven Quality Assurance Systems',
    icon: CheckBadgeIcon,
    description:
      'Structured quality systems ensure compliance with international standards through defined inspection plans, documentation, and traceability.',
  },
  {
    title: 'Precision Manufacturing & Dynamic Balancing',
    icon: WrenchScrewdriverIcon,
    description:
      'State-of-the-art CNC machining, gear hobbing, and dynamic balancing deliver high accuracy, repeatability, and operational reliability.',
  },
]

export default function TechnicalStrength() {
  return (
    <section
      id="technical-strength"
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
            Technical Strength
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Engineering Capabilities
            <br />
            <span className="text-[#F8A900]">Built for Performance</span>
          </h2>
          <p className="mt-5 text-gray-600 max-w-2xl">
            Our engineering processes integrate advanced design tools,
            precision manufacturing, and stringent quality systems to ensure
            consistent performance in demanding industrial environments.
          </p>
        </motion.div>

        {/* Capability Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
          {strengths.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex gap-5"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-11 h-11 border border-[#F8A900] text-[#F8A900] flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

       {/* Bottom industrial divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[linear-gradient(to_right,#F8A900_40%,transparent_40%)] bg-[length:32px_3px]" />
    </section>
  )
}
