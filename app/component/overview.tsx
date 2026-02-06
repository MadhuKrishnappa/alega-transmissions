'use client'

import { motion } from 'framer-motion'
import {
  LightBulbIcon,
  EyeIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline'

const blocks = [
  {
    title: 'Who We Are',
    icon: LightBulbIcon,
    content:
      'Alega Transmissions is a precision engineering company specializing in the design and manufacture of high-performance industrial couplings. Built on strong fundamentals of mechanical engineering and advanced machining, we support mission-critical industrial applications.',
  },
  {
    title: 'Our Vision',
    icon: EyeIcon,
    content:
      'To be a globally trusted manufacturer of innovative and reliable coupling solutions, recognized for engineering excellence, consistency, and long-term partnerships.',
  },
  {
    title: 'Our Mission',
    icon: ShieldCheckIcon,
    content:
      'To engineer, manufacture, and deliver coupling solutions that meet international standards, ensuring performance, safety, and customer confidence across industries.',
  },
  {
    title: 'Quality Commitment',
    icon: CheckBadgeIcon,
    content:
      'Strict in-process inspections, final quality checks, load & alignment testing, complete documentation, and full traceability ensure uncompromised quality at every stage.',
  },
]

export default function CompanyOverview() {
  return (
    <section
      id="company"
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            Company Overview
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Engineering Reliability.
            <br />
            <span className="text-[#F8A900]">Built on Precision.</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
          {blocks.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
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
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {item.content}
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
