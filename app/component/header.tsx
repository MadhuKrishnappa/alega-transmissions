'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AlegaLogo from '../ui/alega-logo'
import { roboto } from '../ui/fonts'

/* -------------------------------------------------------------------------- */
/*                               MENU CONFIG                                  */
/* -------------------------------------------------------------------------- */

const MENU = [
  { id: 'home', name: 'Home' },

  { group: 'Company' },
  { id: 'company', name: 'Company Overview' },
  { id: 'why-choose-us', name: 'Why Alega' },
  { id: 'future-roadmap', name: 'Roadmap' },

  { group: 'Capabilities' },
  { id: 'products', name: 'Products' },
  { id: 'technical-strength', name: 'Engineering Strength' },
  { id: 'manufacturing', name: 'Manufacturing' },

  { group: 'Markets' },
  { id: 'industries', name: 'Industries' },
]

/* -------------------------------------------------------------------------- */
/*                                   HEADER                                   */
/* -------------------------------------------------------------------------- */

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navRef = useRef<HTMLUListElement>(null)

  /* ----------------------------- Scroll Spy ----------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    MENU.forEach(item => {
      if (!item.id) return
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
  setActiveSection(id)       // ✅ force highlight immediately
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  setMenuOpen(false)
}


  return (
    <header className={`${roboto.className} fixed top-0 left-0 right-0 z-50`}>
      {/* ----------------------------- BAR ----------------------------- */}
      <div className="h-20 px-6 flex items-center justify-between bg-gray-800/95 backdrop-blur shadow-md">
        <AlegaLogo />

        {/* ============================= DESKTOP ============================= */}
        <nav className="hidden md:flex items-center gap-10">
          <ul
            ref={navRef}
            className="relative flex items-center gap-8 text-sm font-medium text-gray-300"
          >
            {MENU.filter(i => i.id).map(item => (
              <li key={item.id} className="relative">
                <button
                  data-id={item.id}
                  onClick={() => scrollTo(item.id!)}
                  className={`tracking-wide transition-colors pb-1
                    ${
                      activeSection === item.id
                        ? 'text-[#F8A900]'
                        : 'hover:text-[#F8A900]'
                    }`}
                >
                  {item.name}

                  {activeSection === item.id && (
                    <motion.span
                      layoutId="desktop-underline"
                      className="absolute left-0 -bottom-2 h-[2px] w-full bg-[#F8A900]"
                      transition={{
                        type: 'spring',
                        stiffness: 280,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollTo('contact')}
            className="ml-6 px-5 py-2 text-sm font-semibold
              border border-[#F8A900]
              text-[#F8A900]
              hover:bg-[#F8A900]
              hover:text-black
              rounded-lg transition"
          >
            Contact Us
          </button>
        </nav>

        {/* ============================= HAMBURGER ============================= */}
        <button
          className="md:hidden w-10 h-10 relative flex items-center justify-center"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle Menu"
        >
          <motion.span
            className="absolute w-6 h-0.5 bg-gray-300"
            animate={menuOpen ? { rotate: 45 } : { rotate: 0, y: -6 }}
          />
          <motion.span
            className="absolute w-6 h-0.5 bg-gray-300"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="absolute w-6 h-0.5 bg-gray-300"
            animate={menuOpen ? { rotate: -45 } : { rotate: 0, y: 6 }}
          />
        </button>
      </div>

      {/* ============================= MOBILE MENU ============================= */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="absolute top-20 left-0 right-0 z-40
                bg-[#E6E6E6] rounded-b-xl shadow-xl overflow-hidden"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
            >
              {/* Industrial Grid */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0
                  bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),
                      linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)]
                  bg-[size:32px_32px]"
                />
              </div>

              <div className="relative z-10 px-6 py-5">

                {/* Menu Grid */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {MENU.map(item =>
                    item.group ? (
                      <div
                        key={item.group}
                        className="col-span-2 text-xs uppercase tracking-widest
                          text-gray-500 mt-3"
                      >
                        {item.group}
                      </div>
                    ) : (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollTo(item.id!)}
                        className={`text-left text-[15px] font-medium tracking-wide
                          ${
                            activeSection === item.id
                              ? 'text-[#F8A900]'
                              : 'text-gray-800'
                          }`}
                        whileHover={{ x: 4 }}
                      >
                        {item.name}
                      </motion.button>
                    )
                  )}
                </div>

                {/* CTA */}
                <button
                  onClick={() => scrollTo('contact')}
                  className="mt-6 w-full px-4 py-2.5
                    border border-gray-800
                    text-gray-800 font-semibold
                    rounded-md
                    hover:bg-gray-800 hover:text-[#F8A900]
                    transition"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
