'use client';

import { motion } from 'framer-motion';
import { CalendarDaysIcon, RocketLaunchIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline';

const roadmap = [
  {
    year: '2025',
    title: 'Facility Commissioning',
    description: 'Market entry and vendor development with strong quality focus.',
    icon: CalendarDaysIcon,
  },
  {
    year: '2026',
    title: 'Product Diversification',
    description: 'Expansion of product range with export preparation initiatives.',
    icon: RocketLaunchIcon,
  },
  {
    year: '2027',
    title: 'Global Outreach',
    description: 'Strategic partnerships and global market presence.',
    icon: GlobeAmericasIcon,
  },
];

export default function FutureRoadmap() {
  return (
    <section id="future-roadmap" className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200" />

      {/* Industrial grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]  md:bg-[size:48px_48px] bg-[size:32px_32px]" />

      {/* Watermark Logo */}
      <div
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.04] bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: "url('/alega-logo.png')" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 text-center mx-auto"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            Our Plans Ahead
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Future <span className="text-[#F8A900]">Roadmap</span>
          </h2>
          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            A clear vision for growth and global reach, focusing on quality, innovation, and expanding capabilities.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l-4 border-[#F8A900] ml-8">
          {roadmap.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="mb-16 ml-10 relative"
            >
              {/* Year Badge */}
              <span className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-10 flex items-center justify-center w-16 h-16 rounded-full bg-[#F8A900] text-white font-bold text-lg shadow-lg">
                {item.year}
              </span>

              {/* Card */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col gap-3 hover:shadow-xl hover:border-[#F8A900] transition transform hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-[#F8A900] text-[#F8A900] flex items-center justify-center rounded-md">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                </div>
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
  );
}
