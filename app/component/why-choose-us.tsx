'use client';

import { motion } from 'framer-motion';
import { ShieldCheckIcon, LightBulbIcon, UsersIcon, CurrencyRupeeIcon } from '@heroicons/react/24/outline';

const points = [
  {
    title: 'High-quality, Durable Products',
    description: 'Engineered with precision and tested to perform under tough conditions.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Innovative Industrial Solutions',
    description: 'Cutting-edge design and manufacturing techniques to power innovation.',
    icon: LightBulbIcon,
  },
  {
    title: 'Expert Support Team',
    description: 'A highly skilled and responsive team to guide you at every step.',
    icon: UsersIcon,
  },
  {
    title: 'Competitive Pricing',
    description: 'Affordable solutions without compromising on quality and reliability.',
    icon: CurrencyRupeeIcon,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200" />

      {/* Industrial grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]  md:bg-[size:48px_48px] bg-[size:32px_32px]" />

      {/* Watermark Logo */}
      <div
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.04] bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/alega-logo.png')" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Reliable <span className="text-[#F8A900]">Industrial Expertise</span>
          </h2>
         <p className="mt-5 text-gray-600 max-w-2xl">
            Our commitment to quality, innovation, and customer success ensures we deliver solutions
            that empower industries to perform at their best.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-16">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex gap-5"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 border border-[#F8A900] text-[#F8A900] flex items-center justify-center">
                  <point.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {point.description}
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
