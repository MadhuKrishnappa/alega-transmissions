'use client';

import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

export default function ContactUs() {
  return (
    <section id="contact" className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200" />

      {/* Industrial grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]  md:bg-[size:48px_48px] bg-[size:32px_32px]" />

      {/* Watermark Logo */}
      <div
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.04] bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: "url('/alega-logo.png')" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Get in <span className="text-[#F8A900]">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Reach out to Alega Transmissions for inquiries, support, or collaboration. We’d love to hear from you.
          </p>

          <div className="space-y-4 mt-6">
            {[
              { icon: MapPinIcon, text: 'No 53, 11th Cross, Visvesvaraya Layout, Bagalguntae, Bengaluru - 560073' },
              { icon: PhoneIcon, text: '+91-9380463575' },
              { icon: EnvelopeIcon, text: 'alegatransmissions@gmail.com' },
              { icon: BuildingOfficeIcon, text: 'GSTIN: Updating Soon' },
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="w-10 h-10 border border-[#F8A900] text-[#F8A900] flex items-center justify-center rounded-md">
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 backdrop-blur-sm hover:shadow-xl hover:border-[#F8A900] transition"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F8A900] outline-none bg-white/90 backdrop-blur-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F8A900] outline-none bg-white/90 backdrop-blur-sm"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F8A900] outline-none bg-white/90 backdrop-blur-sm"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#F8A900] text-white py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
