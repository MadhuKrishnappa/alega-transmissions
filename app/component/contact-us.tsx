'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    industry: '',
    productService: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Enquiry Submitted:', formData)
  }

  // Helper function to handle Gmail redirection explicitly
  const handleGmailRedirect = (email: string) => {
    const webGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`
    window.open(webGmailUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen pt-24 pb-20 antialiased selection:bg-[#F8A900]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* ================= HEADER SEPARATOR ================= */}
        <header className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F8A900] mb-3">
            <span>Global Connect</span>
            <span className="w-4 h-[1px] bg-gray-300" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight uppercase text-gray-900">
            Contact <span className="text-[#F8A900]">Us.</span>
          </h1>
          <div className="w-full h-[1px] bg-gray-100 mt-8" />
        </header>

        {/* ================= MAIN TWO-COLUMN SPLIT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* ---------------- LEFT COLUMN (Sections 1, 2, 3, 4 & 6) ---------------- */}
          <div className="lg:col-span-6 space-y-12">
            
            {/* 1. Introduction Statement */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <h2 className="text-xl md:text-2xl font-black text-gray-900 uppercase tracking-tight">
                Let's Drive Industrial Motion with Confidence
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                Whether you need a standard coupling solution, expert engineering support, professional refurbishment services, or a customized power transmission stack, our team is standing ready to assist your operations.
              </p>
            </motion.div>

            {/* 2. Main Office Coordinates */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">01 / Registered Office</h3>
              <div className="space-y-2">
                <h4 className="text-base font-extrabold uppercase tracking-wide text-gray-900">
                  Alega Transmissions Private Limited
                </h4>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                  No 446, 12th Cross, 4th Phase,<br />
                  Peenya Industrial Area, Bengaluru – 560058<br />
                  Karnataka, India
                </p>
                <div className="inline-block bg-gray-50 border border-gray-200 text-[10px] font-mono font-bold text-gray-500 px-2 py-0.5 rounded tracking-wider uppercase mt-1">
                  CIN: U35107KA2026PTC215029
                </div>
              </div>

              {/* Fast Comms Rows */}
              <div className="space-y-2 pt-2 font-medium text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[#F8A900]">📞</span>
                  <a href="tel:+919380763575" className="text-gray-700 hover:text-gray-900 transition-colors">
                    +91-93807 63575
                  </a>
                  <span className="text-gray-300">/</span>
                  <a href="tel:+919113284889" className="text-gray-700 hover:text-gray-900 transition-colors">
                    +91-91132 84889
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[#F8A900]">📧</span>
                  <button 
                    onClick={() => handleGmailRedirect('info@alegatransmissions.com')}
                    className="text-gray-700 hover:text-[#F8A900] transition-colors underline text-left font-semibold"
                  >
                    info@alegatransmissions.com
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[#F8A900]">🌐</span>
                  <a href="https://www.alegatransmissions.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors font-semibold">
                    www.alegatransmissions.com
                  </a>
                </div>
              </div>
            </div>

            {/* 3 & 4. Specialized Departments Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
              
              {/* 3. Business Enquiries */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">02 / Quotations & Tech</h3>
                <h4 className="text-sm font-extrabold uppercase tracking-wide text-gray-900">Business Enquiries</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  For product enquiries, quotations, technical discussions, and custom parameters:
                </p>
                <button 
                  onClick={() => handleGmailRedirect('sales@alegatransmissions.com')}
                  className="text-xs font-bold text-[#F8A900] hover:text-amber-600 transition-colors underline block mt-1"
                >
                  sales@alegatransmissions.com
                </button>
              </div>

              {/* 4. Careers */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">03 / Human Capital</h3>
                <h4 className="text-sm font-extrabold uppercase tracking-wide text-gray-900">Careers Pipeline</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  For engineering opportunities, professional growth tracks, and profile submissions:
                </p>
                <button 
                  onClick={() => handleGmailRedirect('careers@alegatransmissions.com')}
                  className="text-xs font-bold text-[#F8A900] hover:text-amber-600 transition-colors underline block mt-1"
                >
                  careers@alegatransmissions.com
                </button>
              </div>
            </div>

            {/* 6. Social Media & Channels */}
            <div className="space-y-3 pt-6 border-t border-gray-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">04 / Ecosystem</h3>
              <h4 className="text-sm font-extrabold uppercase tracking-wide text-gray-900">Follow Us Channels</h4>
              <p className="text-xs text-gray-500 font-medium">
                Stay connected for regular hardware documentation updates, corporate news, and operational milestones.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <a 
                  href="https://www.linkedin.com/company/alega-transmissions-private-limited/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded text-xs font-bold uppercase tracking-wide transition-colors"
                >
                  ✦ LinkedIn
                </a>
                <a 
                  href="https://wa.me/919380763575" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded text-xs font-bold uppercase tracking-wide transition-colors"
                >
                  ✦ WhatsApp Business
                </a>
              </div>
            </div>

          </div>

          {/* ---------------- RIGHT COLUMN (5. Dynamic Enquiry Form) ---------------- */}
          <div className="lg:col-span-6 bg-gray-50 border border-gray-200/60 rounded-2xl p-6 sm:p-10 shadow-sm relative">
            <div className="space-y-2 mb-8">
              {/* <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">Form 10A-EQ</h2> */}
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">
                Send Us an Enquiry
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                Please provide your project specifications below and our engineering team will evaluate and respond.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Full Name field */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Name <span className="text-[#F8A900]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#F8A900] transition-colors font-medium shadow-inner"
                  placeholder="Your Full Name"
                />
              </div>

              {/* Company Name field */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#F8A900] transition-colors font-medium shadow-inner"
                  placeholder="Enterprise or firm entity"
                />
              </div>

              {/* Double Grid Flex Column: Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Email <span className="text-[#F8A900]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#F8A900] transition-colors font-medium shadow-inner"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Phone Number <span className="text-[#F8A900]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#F8A900] transition-colors font-medium shadow-inner"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              {/* Industry field */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Industry Vertical
                </label>
                <input
                  type="text"
                  value={formData.industry}
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#F8A900] transition-colors font-medium shadow-inner"
                  placeholder="e.g., Cement, Power Gen, Mining"
                />
              </div>

              {/* Product/Service field */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Product / Service Required
                </label>
                <input
                  type="text"
                  value={formData.productService}
                  onChange={(e) => setFormData({...formData, productService: e.target.value})}
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#F8A900] transition-colors font-medium shadow-inner"
                  placeholder="e.g., Custom Coupling, Refurbishment"
                />
              </div>

              {/* Core Message block */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Message Details <span className="text-[#F8A900]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#F8A900] transition-colors font-medium shadow-inner resize-none"
                  placeholder="Elaborate on your torque requirements, structural load limits, or configuration metrics..."
                />
              </div>

              {/* Submit Trigger Action Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gray-900 text-white font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-gray-800 active:bg-black transition-colors shadow-sm pt-3.5"
              >
                Submit Enquiry 🚀
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}