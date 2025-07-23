'use client';

import { motion } from 'framer-motion';
import { CalendarDaysIcon, RocketLaunchIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline';

export default function FutureRoadmap() {
  const roadmap = [
    {
      year: '2025',
      title: 'Facility Commissioning',
      desc: 'Market entry and vendor development with strong quality focus.',
      icon: CalendarDaysIcon,
    },
    {
      year: '2026',
      title: 'Product Diversification',
      desc: 'Expansion of product range with export preparation initiatives.',
      icon: RocketLaunchIcon,
    },
    {
      year: '2027',
      title: 'Global Outreach',
      desc: 'Strategic partnerships and global market presence.',
      icon: GlobeAmericasIcon,
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-300 via-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-3xl font-bold text-center text-[#676767] mb-12">
          Future <span className="text-[#F8A900]">Roadmap</span>
        </h2>

        {/* Vertical Timeline */}
        <div className="relative border-l-4 border-orange-500 ml-8">
          {roadmap.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-10 relative"
            >
              {/* Year Badge */}
              <span className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-10 flex items-center justify-center w-16 h-16 rounded-full bg-orange-500 text-white font-bold text-lg shadow-lg">
                {item.year}
              </span>

              {/* Card */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-6 border border-gray-100 hover:border-[#F8A900] relative z-0">
                <div className="flex items-center mb-3">
                  <item.icon className="w-6 h-6 text-[#F8A900] mr-2" />
                  <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
