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

const industries = [
  {
    title: 'Power Transmission & Generation',
    icon: BoltIcon,
    description:
      'Coupling solutions for turbines, generators, motors, and heavy-duty power transmission systems.',
  },
  {
    title: 'Pumps, Compressors & Blowers',
    icon: Cog6ToothIcon,
    description:
      'Precision-engineered couplings designed to handle misalignment, vibration, and high torque loads.',
  },
  {
    title: 'Material Handling Systems',
    icon: TruckIcon,
    description:
      'Reliable power transmission components for conveyors, elevators, cranes, and logistics systems.',
  },
  {
    title: 'Steel, Cement & Mining',
    icon: BuildingOffice2Icon,
    description:
      'Heavy-duty industrial couplings built for extreme loads, harsh environments, and continuous operation.',
  },
  {
    title: 'Marine, Oil & Gas',
    icon: GlobeAltIcon,
    description:
      'Robust coupling solutions engineered for offshore, marine propulsion, and oil & gas applications.',
  },
  {
    title: 'Renewable Energy & Automation',
    icon: SunIcon,
    description:
      'Precision coupling systems supporting wind, solar, and automated industrial machinery.',
  },
];

export default function IndustriesWeServe() {
  return (
    <section id="industries" className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200" />

      {/* Industrial grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]  md:bg-[size:48px_48px] bg-[size:32px_32px]" />

      {/* Watermark Logo */}
      <div
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.04] bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/alega-logo.png')" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 text-center mx-auto"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            Industries We Serve
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Serving <span className="text-[#F8A900]">Every Industry</span>
          </h2>
          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Our precision coupling solutions cater to diverse industrial
            applications, ensuring reliability, high performance, and seamless
            integration into demanding operational environments.
          </p>
        </motion.div>

        {/* Industry Grid */}
        <div className="grid md:grid-cols-2 gap-x-14 gap-y-16">
          {industries.map((item, i) => (
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
  );
}
