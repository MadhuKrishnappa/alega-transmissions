'use client';

import { motion } from 'framer-motion';
import {
  WrenchScrewdriverIcon,
  Cog6ToothIcon,
  CubeIcon,
  TruckIcon,
  FireIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline';

export default function ManufacturingInfrastructure() {
  const items = [
    { title: "Located in Bangalore's industrial zone", icon: CubeIcon },
    { title: "State-of-the-art CNC turning & milling machines", icon: WrenchScrewdriverIcon },
    { title: "Gear Hobbing, Balancing & Surface Finishing Equipment", icon: Cog6ToothIcon },
    { title: "Quality Lab with CMM, Hardness & Surface Roughness Testers", icon: BeakerIcon },
    { title: "Well-supported high-precision machining vendors", icon: TruckIcon },
    { title: "Heat treatment plants for varied mechanical property requirements", icon: FireIcon },
    { title: "Strong supply chain to meet stringent precision standards", icon: Cog6ToothIcon },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-300 via-white to-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h3 className="text-3xl md:text-3xl font-bold text-center text-[#676767] mb-12">
          Manufacturing <span className="text-[#F8A900]">Infrastructure</span>
        </h3>

        {/* Bullet Points */}
        <ul className="space-y-6">
          {items.map((item, i) => (
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
                <item.icon className="h-6 w-6" />
              </span>
              {/* Text */}
              <span className="leading-snug">{item.title}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
