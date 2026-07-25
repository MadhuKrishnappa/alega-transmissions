'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Phone } from 'lucide-react'

// Configuration for EmailJS
const EMAILJS_PUBLIC_KEY = 'Q8KlTTE0CT9UfuiwC'
const EMAILJS_SERVICE_ID = 'service_7qybeba'
const EMAILJS_CONSULTATION_TEMPLATE_ID = 'template_vip28nt'
const EMAILJS_QUOTE_TEMPLATE_ID = 'template_53fekof'

// Data for 8 Coupling Products
const COUPLING_PRODUCTS = [
  {
    id: 'coupling-1',
    name: 'Disc Coupling',
    tag: 'DISC-01',
    src: '/hero/coupling1.png',
    spec: 'Zero Backlash'
  },
  {
    id: 'coupling-2',
    name: 'Gear Coupling',
    tag: 'GEAR-02',
    src: '/hero/coupling2.png',
    spec: 'High Torque Capacity'
  },
  {
    id: 'coupling-3',
    name: 'Jaw Coupling',
    tag: 'JAW-03',
    src: '/hero/coupling3.png',
    spec: 'Vibration Damping'
  },
  {
    id: 'coupling-4',
    name: 'Industrial Pulley',
    tag: 'PULLEY-04',
    src: '/hero/coupling4.png',
    spec: 'Efficient Power Transmission'
  },
  {
    id: 'coupling-5',
    name: 'Pin & Bush Coupling',
    tag: 'PIN-05',
    src: '/hero/coupling5.png',
    spec: 'Shock Load Absorption'
  },
  {
    id: 'coupling-6',
    name: 'Special Fasteners',
    tag: 'FAST-06',
    src: '/hero/coupling6.png',
    spec: 'High Strength Fastening'
  },
  {
    id: 'coupling-7',
    name: 'Special Fasteners',
    tag: 'FAST-07',
    src: '/hero/coupling7.png',
    spec: 'High Misalignment Tolerance'
  },
  {
    id: 'coupling-8',
    name: 'Tyre Coupling',
    tag: 'TYRE-08',
    src: '/hero/coupling8.png',
    spec: 'Superior Vibration Isolation'
  },
]

export default function Hero() {
  const [activeModal, setActiveModal] = useState<'consultation' | 'quote' | null>(null)
  const [activeProductIndex, setActiveProductIndex] = useState<number>(0)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  })

  // Form States (With Phone Added)
  const [consultationData, setConsultationData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    application: 'Standard Coupling',
    notes: ''
  })

  const [quoteData, setQuoteData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    selectedProducts: [] as string[],
    estimatedQuantity: '1-5 units',
    specifications: ''
  })

  // List of product options for checkboxes
  const AVAILABLE_PRODUCTS = [
    'Gear Couplings',
    'Disc Couplings',
    'Pin Bush Couplings',
    'Keyless Locks / Shaft Devices',
    'Industrial Pulleys',
    'Custom Transmission Shafts'
  ]

  const handleProductToggle = (product: string) => {
    setQuoteData(prev => {
      const exists = prev.selectedProducts.includes(product)
      return {
        ...prev,
        selectedProducts: exists
          ? prev.selectedProducts.filter(p => p !== product)
          : [...prev.selectedProducts, product]
      }
    })
  }

  const resetModalState = () => {
    setActiveModal(null)
    setSubmitStatus({ type: null, message: '' })
    setIsSubmitting(false)
  }

  // Handle Technical Consultation Email JS Dispatch
  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const templateParams = {
        from_name: consultationData.name,
        reply_to: consultationData.email,
        phone_number: consultationData.phone,
        company: consultationData.company,
        application: consultationData.application,
        notes: consultationData.notes,
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONSULTATION_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      setSubmitStatus({
        type: 'success',
        message: 'Your consultation request has been sent successfully!'
      })

      // Reset Form State
      setConsultationData({
        name: '',
        email: '',
        phone: '',
        company: '',
        application: 'Standard Coupling',
        notes: ''
      })

      setTimeout(() => resetModalState(), 2000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send request. Please try again or contact support.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle Quote Request Email JS Dispatch
  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const templateParams = {
        from_name: quoteData.name,
        reply_to: quoteData.email,
        phone_number: quoteData.phone,
        company: quoteData.company,
        estimated_quantity: quoteData.estimatedQuantity,
        selected_products: quoteData.selectedProducts.join(', ') || 'None selected',
        specifications: quoteData.specifications,
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_QUOTE_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      setSubmitStatus({
        type: 'success',
        message: 'Your quote request has been sent successfully!'
      })

      // Reset Form State
      setQuoteData({
        name: '',
        email: '',
        phone: '',
        company: '',
        selectedProducts: [],
        estimatedQuantity: '1-5 units',
        specifications: ''
      })

      setTimeout(() => resetModalState(), 2000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send quote request. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const activeProduct = COUPLING_PRODUCTS[activeProductIndex]

  // Filter out the active product to get surrounding items
  const surroundingProducts = COUPLING_PRODUCTS.map((prod, index) => ({ prod, index })).filter(
    item => item.index !== activeProductIndex
  )

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden py-12 md:py-20 bg-gray-50"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8f8f8] to-[#ececec]" />

      {/* Industrial grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] md:bg-[size:48px_48px] bg-[size:32px_32px]" />

      {/* Premium Radial Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 right-[12%] h-[650px] w-[650px] rounded-full bg-[#F8A900]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-[-150px] h-[500px] w-[500px] rounded-full bg-gray-300/30 blur-[120px]" />
      </div>

      {/* Watermark Logo */}
      <div
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: "url('/alega-logo.png')" }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between gap-8">

        {/* ================= HERO TOP SECTION ================= */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT HERO CONTENT */}
          <div className="flex flex-col items-start text-left w-full">

            {/* BADGE */}
            <span className="inline-flex items-center gap-3 rounded-full border border-gray-300/80 bg-white/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500 shadow-sm backdrop-blur-md mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F8A900] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F8A900]"></span>
              </span>
              <span>Alega Transmissions Private Limited</span>
              <span className="h-3 w-[1px] bg-gray-300" />
            </span>

            {/* HEADLINE */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.1] w-full">
              DRIVING INDUSTRIAL
              <br />
              <span className="text-[#F8A900]">MOTION WITH CONFIDENCE</span>
            </h1>

            {/* DETACHED BLOCK CARDS */}
            <div className="mt-8 grid grid-cols-1 gap-4 w-full">
              <div className="relative group rounded-xl border border-gray-200/80 bg-white/40 backdrop-blur-md p-4 transition-all duration-300 hover:border-gray-300 hover:bg-white/80 shadow-sm">
                <div className="absolute top-0 left-4 -translate-y-1/2 bg-[#F8A900] text-[9px] font-black text-black px-2 py-0.5 rounded uppercase tracking-wider">
                  Enterprise Identity
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed pt-1">
                  Founded in <strong>2026</strong>, Alega Transmissions Private Limited is a <strong>Bengaluru-based</strong> engineering company dedicated to industrial coupling design, manufacturing, and customized power transmission solutions.
                </p>
              </div>

              <div className="relative group rounded-xl border border-gray-200/80 bg-white/40 backdrop-blur-md p-4 transition-all duration-300 hover:border-gray-300 hover:bg-white/80 shadow-sm">
                <div className="absolute top-0 left-4 -translate-y-1/2 bg-gray-900 text-[9px] font-black text-white px-2 py-0.5 rounded uppercase tracking-wider">
                  Core Competency
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed pt-1">
                  Alega Transmissions designs and manufactures precision-engineered industrial coupling solutions for reliable power transmission across diverse industrial applications.
                </p>
              </div>
            </div>

          </div>

          {/* ================= RIGHT SECTION WITH RESPONSIVE MOBILE ORBIT ================= */}
          <div className="relative h-[480px] sm:h-[580px] xl:h-[700px] w-full flex items-center justify-center overflow-hidden sm:overflow-visible">

            {/* Architectural Circular Backdrop Frame */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <div className="relative w-[420px] h-[420px] sm:w-[620px] sm:h-[620px] xl:w-[760px] xl:h-[760px]">

                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div
                    className="
                              absolute inset-0
                              bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),
                              linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]
                              bg-[size:40px_40px]
                          "
                  />
                </div>

                <div className="absolute left-20 top-24">
                  <div className="w-52 border-t border-dashed border-gray-400" />
                  <span className="mt-2 block font-mono text-[10px] tracking-[0.25em] text-gray-500">
                    Ø180
                  </span>
                </div>

                <div className="absolute right-20 bottom-24 text-right">
                  <div className="w-44 border-t border-dashed border-gray-400" />
                  <span className="mt-2 block font-mono text-[10px] tracking-[0.25em] text-gray-500">
                    450 Nm
                  </span>
                </div>

                <div className="absolute inset-8">
                  <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-[#F8A900]" />
                  <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-[#F8A900]" />
                  <div className="absolute left-0 bottom-0 h-8 w-8 border-l-2 border-b-2 border-[#F8A900]" />
                  <div className="absolute right-0 bottom-0 h-8 w-8 border-r-2 border-b-2 border-[#F8A900]" />
                </div>

                <div className="absolute left-12 top-1/2 w-28 h-[2px] bg-gradient-to-r from-[#F8A900] to-transparent" />
                <div className="absolute right-12 top-1/3 w-24 h-[2px] bg-gradient-to-l from-[#F8A900] to-transparent" />

                <div className="absolute inset-0">
                  <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8A900]/10 blur-[130px]" />
                </div>

              </div>
            </div>

            {/* Stage Box Container */}
            <div className="relative w-full h-full max-w-[650px]">

              {/* CENTER ACTIVE FEATURED PRODUCT */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProduct.id}
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.85, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative flex flex-col items-center"
                  >
                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                      className="relative w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] lg:w-[280px] lg:h-[280px] filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)]"
                    >
                      <Image
                        src={activeProduct.src}
                        alt={activeProduct.name}
                        fill
                        className="object-contain"
                        priority
                      />
                    </motion.div>

                    <div className="mt-1 sm:mt-2 z-40 bg-gray-900/95 backdrop-blur-md text-white border border-gray-700/80 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full flex items-center gap-2 shadow-xl whitespace-nowrap">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#F8A900] animate-pulse" />
                      <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">{activeProduct.name}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* ORBITING INTERACTIVE SPEC CARDS */}
              {surroundingProducts.map(({ prod, index: originalIndex }, i) => {
                const total = surroundingProducts.length
                const angleDegree = (i * (360 / total)) - 90
                const angleRad = (angleDegree * Math.PI) / 180

                return (
                  <motion.div
                    key={prod.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    style={{
                      '--x-mobile': `${Math.cos(angleRad) * 145}px`,
                      '--y-mobile': `${Math.sin(angleRad) * 145}px`,
                      '--x-desktop': `${Math.cos(angleRad) * 270}px`,
                      '--y-desktop': `${Math.sin(angleRad) * 270}px`,
                    } as React.CSSProperties}
                    className="absolute z-30 left-[calc(50%+var(--x-mobile)-60px)] top-[calc(50%+var(--y-mobile)-24px)] sm:left-[calc(50%+var(--x-desktop)-85px)] sm:top-[calc(50%+var(--y-desktop)-32px)] transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveProductIndex(originalIndex)}
                      className="bg-white/95 backdrop-blur-xl border border-gray-200/90 rounded-xl sm:rounded-2xl p-1.5 sm:p-2.5 shadow-md hover:shadow-2xl hover:border-[#F8A900] hover:scale-105 transition-all flex items-center gap-1.5 sm:gap-2.5 w-[120px] sm:w-[170px] text-left cursor-pointer group"
                    >
                      <div className="relative w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gray-100 p-0.5 sm:p-1 flex-shrink-0 border border-gray-200/80 overflow-hidden">
                        <Image
                          src={prod.src}
                          alt={prod.name}
                          fill
                          className="object-contain p-0.5 group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[7px] sm:text-[8px] font-mono text-[#F8A900] bg-[#F8A900]/10 px-1 py-0.2 rounded font-bold uppercase block w-max mb-0.5">
                          {prod.tag}
                        </span>
                        <h4 className="text-[9px] sm:text-[11px] font-bold text-gray-900 truncate leading-tight">{prod.name}</h4>
                      </div>
                    </button>
                  </motion.div>
                )
              })}

            </div>
          </div>

        </div>

        {/* ================= THE TACTICAL HUD NOTICE BOARD GRID ================= */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch font-sans">

          {/* CARD 1: Why Choose Alega */}
          <div className="group relative lg:col-span-1 bg-white/40 backdrop-blur-xl border border-gray-300/70 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#F8A900] shadow-sm hover:shadow-md rounded-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-[#F8A900] transition-colors" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-transparent group-hover:border-[#F8A900] transition-colors" />
            <div>
              <div className="flex items-center justify-between mb-5 pb-2 border-b border-dashed border-gray-300">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-[#F8A900] bg-[#F8A900]/10 px-1.5 py-0.5 rounded font-bold">VAL-01</span>
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">Why Choose Alega</h3>
                </div>
                <div className="text-[10px] font-mono text-gray-400 group-hover:text-[#F8A900] transition-colors">// CORE_ADV</div>
              </div>

              <div className="space-y-3.5">
                {[
                  { title: "Engineering Expertise", desc: "Backed by 60+ years of combined industry experience." },
                  { title: "Precision Manufacturing", desc: "Modern machining and quality-controlled production processes." },
                  { title: "Quality Assurance", desc: "Inspection, traceability, and performance validation at every stage." },
                  { title: "Custom Solutions", desc: "Application-specific coupling solutions tailored to requirements." },
                  { title: "Responsive Support & Value", desc: "Guidance from design to commissioning at optimal quality/cost." }
                ].map((item, idx) => (
                  <div key={idx} className="relative pl-3 border-l-2 border-gray-200 group-hover:border-[#F8A900]/40 transition-colors">
                    <h4 className="text-xs font-extrabold text-gray-900 flex items-center gap-1.5">
                      <span className="text-[9px] text-gray-400 font-mono">0{idx + 1}</span>
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 2: Core Engineering Capabilities */}
          <div className="relative lg:col-span-1 bg-gray-900 text-white p-6 flex flex-col justify-between shadow-xl shadow-gray-900/10 rounded-xl overflow-hidden ring-1 ring-white/10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(248,169,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(248,169,0,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#F8A900]/10 rounded-full blur-xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-black bg-[#F8A900] px-1.5 py-0.5 rounded font-bold">SYS-02</span>
                  <h3 className="text-xs font-black uppercase tracking-widest text-white">System Capability</h3>
                </div>
                <span className="h-1.5 w-1.5 rounded-full bg-[#F8A900] animate-pulse" />
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10 relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F8A900]" />
                <span className="block text-[9px] font-mono uppercase tracking-widest text-[#F8A900] mb-1">Mission Statement //</span>
                <p className="text-xs text-gray-200 font-medium leading-relaxed">
                  From standard industrial couplings to application-specific engineered solutions, Alega Transmissions delivers reliable torque transmission systems designed for performance, durability, and long service life.
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    const target = document.getElementById('product-portfolio')
                    if (target) {
                      const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      })
                      window.history.pushState(null, '', '#product-portfolio')
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#F8A900] px-4 py-3 text-xs font-black text-black shadow-md transition-all duration-200 hover:bg-[#e09900] uppercase tracking-wider text-center cursor-pointer border-none"
                >
                  View Coupling Solutions
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const target = document.getElementById('contact-us')
                    if (target) {
                      const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      })
                      window.history.pushState(null, '', '#contact-us')
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-xs font-bold text-gray-200 transition-all duration-200 hover:bg-white/10 hover:border-white/40 uppercase tracking-wider cursor-pointer"
                >
                  Request Technical Consultation
                </button>
              </div>
            </div>
          </div>

          {/* CARD 3: Target Sectors & Growth Vision */}
          <div className="group relative lg:col-span-1 bg-white/40 backdrop-blur-xl border border-gray-300/70 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#F8A900] shadow-sm hover:shadow-md rounded-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-[#F8A900] transition-colors" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-transparent group-hover:border-[#F8A900] transition-colors" />

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-dashed border-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-gray-500 bg-gray-200 px-1.5 py-0.5 rounded font-bold">SEC-03</span>
                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">Target Sectors</h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { label: 'Power Transmission', icon: '⚙️' },
                    { label: 'Steel & Cement', icon: '🏭' },
                    { label: 'Mining & Sugar', icon: '🏭' },
                    { label: 'Oil & Gas', icon: '🚢' },
                    { label: 'Paper & Pulp', icon: '🔋' },
                    { label: 'Material Handling', icon: '🚚' }
                  ].map((sector) => (
                    <div key={sector.label} className="flex items-center gap-1.5 bg-white/80 border border-gray-200 p-2 rounded-md transition-all group-hover:border-gray-300">
                      <span className="text-xs filter saturate-50">{sector.icon}</span>
                      <span className="text-[10px] font-bold text-gray-700 tracking-tight">{sector.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3 pb-1 border-b border-dashed border-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-gray-500 bg-gray-200 px-1.5 py-0.5 rounded font-bold">VIS-04</span>
                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">Growth Vision</h3>
                  </div>
                </div>

                <div className="space-y-2 bg-gray-50/80 border border-gray-200/60 rounded-lg p-3 font-mono text-[10px]">
                  {[
                    { label: 'Product Portfolio Expansion', icon: '🚀' },
                    { label: 'Export Market Development', icon: '🌍' },
                    { label: 'Manufacturing Capacity Enhancement', icon: '🏭' },
                    { label: 'Strategic Industry Partnerships', icon: '🤝' }
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-gray-600">
                      <span className="flex items-center gap-1.5 font-sans font-bold">
                        <span className="text-[#F8A900]">›</span> {item.label}
                      </span>
                      <span>[READY]</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-1.5 mt-1.5 border-t border-gray-200 text-gray-900">
                    <span className="flex items-center gap-1.5 font-sans font-black text-xs text-gray-900">
                      <span className="text-green-500">★</span> Global Brand Recognition
                    </span>
                    <span className="text-green-600 font-bold">[ALPHA]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOARD FOOTER BUTTONS ================= */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-gray-200/60 max-w-2xl mx-auto w-full">
          <button
            type="button"
            onClick={() => setActiveModal('quote')}
            className="w-full sm:w-auto text-center rounded-xl bg-gray-900 px-6 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:bg-gray-800 cursor-pointer"
          >
            Request a Quote
          </button>
          <button
            type="button"
            onClick={() => {
              const target = document.getElementById('contact-us')
              if (target) {
                const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                })
                window.history.pushState(null, '', '#contact-us')
              }
            }}
            className="w-full sm:w-auto text-center rounded-xl border border-gray-300 bg-transparent px-6 py-2.5 text-xs font-bold text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Bottom industrial divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[linear-gradient(to_right,#F8A900_40%,transparent_40%)] bg-[length:32px_3px]" />

      {/* ======================================================================== */}
      {/* SHARDED INTERACTIVE MODALS LAYER CONTROL TERMINAL                       */}
      {/* ======================================================================== */}
      <AnimatePresence>
        {activeModal !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">

            {/* Overlay Mask */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetModalState}
              className="fixed inset-0 bg-gray-950/60 backdrop-blur-sm"
            />

            {/* ----------------- DIALOG A: TECHNICAL CONSULTATION ----------------- */}
            {activeModal === 'consultation' && (
              <motion.div
                initial={{ scale: 0.95, y: 10, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 10, opacity: 0 }}
                className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden z-10 text-gray-900 flex flex-col my-8"
              >
                <div className="bg-gray-900 text-white px-5 py-4 flex items-center justify-between border-b border-gray-800">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm font-black uppercase tracking-wider">Technical Consultation</h2>
                    </div>
                    <p className="text-[11px] text-gray-400 font-medium">Direct diagnostic pipeline to Alega application engineering.</p>
                  </div>
                  <button
                    type="button"
                    onClick={resetModalState}
                    className="w-7 h-7 flex items-center justify-center rounded-md border border-gray-800 bg-gray-950/50 text-gray-400 hover:text-white text-xs font-mono transition-colors cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleConsultationSubmit} className="p-5 space-y-4 text-xs font-medium">
                  {submitStatus.type && (
                    <div
                      className={`p-3 rounded-lg text-xs font-bold ${submitStatus.type === 'success'
                          ? 'bg-green-100 text-green-800 border border-green-200'
                          : 'bg-red-100 text-red-800 border border-red-200'
                        }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Contact Name *</label>
                      <input
                        type="text" required placeholder="Jane Doe" value={consultationData.name}
                        onChange={(e) => setConsultationData({ ...consultationData, name: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] focus:bg-white text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Corporate Email *</label>
                      <input
                        type="email" required placeholder="name@company.com" value={consultationData.email}
                        onChange={(e) => setConsultationData({ ...consultationData, email: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] focus:bg-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                        <input
                          type="tel" required placeholder="+91 98765 43210" value={consultationData.phone}
                          onChange={(e) => setConsultationData({ ...consultationData, phone: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] focus:bg-white text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Company Name *</label>
                      <input
                        type="text" required placeholder="Alega Industries" value={consultationData.company}
                        onChange={(e) => setConsultationData({ ...consultationData, company: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] focus:bg-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Transmission Vector Category</label>
                    <select
                      value={consultationData.application}
                      onChange={(e) => setConsultationData({ ...consultationData, application: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] text-sm cursor-pointer appearance-none"
                    >
                      <option value="Standard Industrial Couplings (Gear/Disc/Pin)">Standard Industrial Couplings (Gear/Disc/Pin)</option>
                      <option value="Custom Shaft Lock & Keyless Devices">Custom Shaft Lock & Keyless Devices</option>
                      <option value="High-Traction Industrial Pulleys">High-Traction Industrial Pulleys</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Application Notes</label>
                    <textarea
                      rows={3} placeholder="Specify torque parameters, running speeds, dimensional limits..." value={consultationData.notes}
                      onChange={(e) => setConsultationData({ ...consultationData, notes: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] text-sm resize-none"
                    />
                  </div>
                  <div className="pt-2 flex items-center justify-end gap-3 border-t border-gray-100">
                    <button type="button" onClick={resetModalState} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold uppercase tracking-wider text-[11px] rounded-lg cursor-pointer">Cancel</button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2 bg-[#F8A900] hover:bg-[#e09900] text-black font-black uppercase tracking-wider text-[11px] rounded-lg cursor-pointer shadow-md shadow-[#F8A900]/10 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Dispatching...' : 'Send Request'}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* ----------------- DIALOG B: REQUEST A QUOTE ----------------- */}
            {activeModal === 'quote' && (
              <motion.div
                initial={{ scale: 0.95, y: 10, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 10, opacity: 0 }}
                className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden z-10 text-gray-900 flex flex-col my-8 max-h-[90vh]"
              >
                <div className="bg-gray-900 text-white px-5 py-4 flex items-center justify-between border-b border-gray-800 flex-shrink-0">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm font-black uppercase tracking-wider">Commercial Quote Request</h2>
                    </div>
                    <p className="text-[11px] text-gray-400 font-medium">Configure product requirements for manufacturing batch pricing.</p>
                  </div>
                  <button
                    type="button"
                    onClick={resetModalState}
                    className="w-7 h-7 flex items-center justify-center rounded-md border border-gray-800 bg-gray-950/50 text-gray-400 hover:text-white text-xs font-mono transition-colors cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleQuoteSubmit} className="p-5 space-y-4 text-xs font-medium overflow-y-auto">
                  {submitStatus.type && (
                    <div
                      className={`p-3 rounded-lg text-xs font-bold ${submitStatus.type === 'success'
                          ? 'bg-green-100 text-green-800 border border-green-200'
                          : 'bg-red-100 text-red-800 border border-red-200'
                        }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Contact Name *</label>
                      <input
                        type="text" required placeholder="John Doe" value={quoteData.name}
                        onChange={(e) => setQuoteData({ ...quoteData, name: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Corporate Email *</label>
                      <input
                        type="email" required placeholder="procurement@company.com" value={quoteData.email}
                        onChange={(e) => setQuoteData({ ...quoteData, email: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                        <input
                          type="tel" required placeholder="+91 98765 43210" value={quoteData.phone}
                          onChange={(e) => setQuoteData({ ...quoteData, phone: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Company Name *</label>
                      <input
                        type="text" required placeholder="Infrastructure Corp" value={quoteData.company}
                        onChange={(e) => setQuoteData({ ...quoteData, company: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Volume Run Estimate</label>
                    <select
                      value={quoteData.estimatedQuantity}
                      onChange={(e) => setQuoteData({ ...quoteData, estimatedQuantity: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] text-sm cursor-pointer appearance-none"
                    >
                      <option value="Prototype Block Run (1-5 units)">Prototype Block Run (1-5 units)</option>
                      <option value="Mid-Scale Fleet Integration (6-25 units)">Mid-Scale Fleet Integration (6-25 units)</option>
                      <option value="High Volume Production Run (26-100 units)">High Volume Production Run (26-100 units)</option>
                      <option value="Enterprise Custom Contract (100+ units)">Enterprise Custom Contract (100+ units)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px] block">
                      Target Equipment Allocation (Select Optional Hardware)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-gray-50 border border-gray-200 rounded-xl p-3 shadow-inner">
                      {AVAILABLE_PRODUCTS.map((product) => {
                        const isChecked = quoteData.selectedProducts.includes(product)
                        return (
                          <label
                            key={product}
                            className={`flex items-center gap-2 p-2 rounded-lg border transition-all cursor-pointer text-[11px] font-bold select-none
                              ${isChecked
                                ? 'bg-white border-[#F8A900] text-gray-900 shadow-sm'
                                : 'bg-transparent border-gray-200/60 text-gray-600 hover:bg-gray-100/50'}`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleProductToggle(product)}
                              className="rounded border-gray-300 text-[#F8A900] focus:ring-[#F8A900]"
                            />
                            <span>{product}</span>
                          </label>
                        )
                      })}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-gray-500 uppercase tracking-wider font-bold text-[10px]">Detailed Technical Specifications</label>
                    <textarea
                      rows={3}
                      placeholder="Add key parameters (bore size, torque rating, shaft diameter, operating temperature)..."
                      value={quoteData.specifications}
                      onChange={(e) => setQuoteData({ ...quoteData, specifications: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F8A900] text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3 border-t border-gray-100">
                    <button type="button" onClick={resetModalState} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold uppercase tracking-wider text-[11px] rounded-lg cursor-pointer">Cancel</button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2 bg-gray-900 hover:bg-black text-white font-black uppercase tracking-wider text-[11px] rounded-lg cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

          </div>
        )}
      </AnimatePresence>
    </section>
  )
}