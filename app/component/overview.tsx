'use client';

import { motion } from 'framer-motion';
import { LightBulbIcon, EyeIcon, ShieldCheckIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

export default function WelcomeAlega() {
  const sections = [
    {
      title: 'Overview',
      icon: LightBulbIcon,
      content: `Alega Transmissions is an emerging engineering enterprise focused on the development and manufacturing of high-performance industrial couplings. With a strong foundation in precision machining and mechanical innovation, we serve critical sectors such as Automotive, Aerospace, Oil & Gas, Energy, and Industrial Automation.`,
    },
    {
      title: 'Vision',
      icon: EyeIcon,
      content: `To be a globally recognized provider of innovative, durable, and precision-engineered coupling solutions that empower industries to operate seamlessly.`,
    },
    {
      title: 'Mission',
      icon: ShieldCheckIcon,
      content: `To design, manufacture, and deliver a comprehensive range of couplings that meet international standards, ensuring reliability, performance and customer satisfaction.`,
    },
    {
      title: 'Quality',
      icon: CheckBadgeIcon,
      content: `In-line and Final Quality Checks, Load & Alignment Testing, Documentation and Traceability, and In-process audits.`,
    },
  ];

  return (
    <section
      id="welcome"
      className="relative py-20 bg-gradient-to-r from-gray-300 via-white to-gray-100 overflow-hidden"
    >
      {/* Decorative Background */}
      {/* <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gray-300 rounded-full blur-3xl opacity-30"></div> */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-3xl md:text-3xl font-extrabold text-center text-[#676767] mb-12"
        >
          Welcome to <span className="text-[#F8A900]">Alega Transmissions</span>
        </motion.h2>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                  <section.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#676767] ml-4">
                  {section.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
