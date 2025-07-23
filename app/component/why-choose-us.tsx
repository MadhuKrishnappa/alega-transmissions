'use client';

import { motion } from 'framer-motion';
import { ShieldCheckIcon, LightBulbIcon, UsersIcon, CurrencyRupeeIcon } from '@heroicons/react/24/outline';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'High-quality, Durable Products',
      desc: 'Engineered with precision and tested to perform under tough conditions.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Innovative Industrial Solutions',
      desc: 'Cutting-edge design and manufacturing techniques to power innovation.',
      icon: LightBulbIcon,
    },
    {
      title: 'Expert Support Team',
      desc: 'A highly skilled and responsive team to guide you at every step.',
      icon: UsersIcon,
    },
    {
      title: 'Competitive Pricing',
      desc: 'Affordable solutions without compromising on quality and reliability.',
      icon: CurrencyRupeeIcon,
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-300 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h3 className="text-3xl md:text-3xl font-bold text-center text-[#676767] mb-12">
          Why <span className="text-[#F8A900]">Choose Us</span>
        </h3>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl p-8 border border-gray-100 hover:border-[#F8A900] transition transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-orange-200">
                <p.icon className="h-8 w-8" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-700 mb-3 group-hover:text-[#F8A900]">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
