'use client';

import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

export default function ContactUs() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-r from-gray-100 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#676767]">
            Get in <span className="text-[#F8A900]">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Reach out to Alega Transmissions for inquiries, support, or collaboration. We’d love to hear from you.
          </p>

          <div className="space-y-4 mt-6">
            <div className="flex items-center space-x-3">
              <MapPinIcon className="h-6 w-6 text-[#F8A900]" />
              <p className="text-gray-700">
                No 53, 11th Cross, Visvesvaraya Layout, Bagalguntae, Bengaluru - 560073
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <PhoneIcon className="h-6 w-6 text-[#F8A900]" />
              <p className="text-gray-700">+91-9380463575</p>
            </div>
            <div className="flex items-center space-x-3">
              <EnvelopeIcon className="h-6 w-6 text-[#F8A900]" />
              <p className="text-gray-700">alegatransmissions@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <BuildingOfficeIcon className="h-6 w-6 text-[#F8A900]" />
              <p className="text-gray-700">GSTIN: Updating Soon</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Stylish Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition"
        >
          <h3 className="text-2xl font-semibold text-[#676767] mb-6">Send Us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F8A900] outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F8A900] outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F8A900] outline-none"
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
