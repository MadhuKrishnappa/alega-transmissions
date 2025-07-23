'use client';

import { motion } from 'framer-motion';
import {
  BoltIcon,
  Cog6ToothIcon,
  TruckIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
  SunIcon,
} from '@heroicons/react/24/outline';

export default function IndustriesWeServe() {
  const industries = [
    { title: 'Power Transmission & Generation', icon: BoltIcon },
    { title: 'Pumps, Compressors & Blowers', icon: Cog6ToothIcon },
    { title: 'Material Handling Systems', icon: TruckIcon },
    { title: 'Steel, Cement & Mining', icon: BuildingOffice2Icon },
    { title: 'Marine, Oil & Gas', icon: GlobeAltIcon },
    { title: 'Renewable Energy & Automation', icon: SunIcon },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-300 via-white to-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <h3 className="text-3xl md:text-3xl font-bold text-center text-[#676767] mb-12">
          Industries <span className="text-[#F8A900]">We Serve</span>
        </h3>

        {/* Bullet List */}
        <ul className="space-y-6">
          {industries.map((industry, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 text-gray-700 text-lg font-medium"
            >
              {/* Icon */}
              <span className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                <industry.icon className="h-6 w-6" />
              </span>
              {/* Text */}
              <span className="leading-snug">{industry.title}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
