'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AlegaLogo from '../ui/alega-logo'
import { roboto } from '../ui/fonts'

/* -------------------------------------------------------------------------- */
/*                               MENU CONFIG                                  */
/* -------------------------------------------------------------------------- */

const MENU = [
  { id: 'hero', name: 'Home' },

  { group: 'Company' },
  { id: 'overview', name: 'About Us' },

  { group: 'Capabilities' },
  { id: 'product-portfolio', name: 'Products' },
  { id: 'manufacturing-and-engneering', name: 'Manufacturing' },
  { id: 'engneering-services', name: 'Engineering Services' },

  { group: 'Markets & Growth' },
  { id: 'industury-we-serve', name: 'Industries' },
  { id: 'CareersPage', name: 'Careers' },
]

/* -------------------------------------------------------------------------- */
/*                                   HEADER                                   */
/* -------------------------------------------------------------------------- */

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
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
      { threshold: 0.2, rootMargin: '-20% 0px -60% 0px' }
    )

    MENU.forEach(item => {
      if (!item.id) return
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    // Track the standalone contact section anchor explicitly
    const contactEl = document.getElementById('contact-us')
    if (contactEl) observer.observe(contactEl)

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    setActiveSection(id)
    const targetElement = document.getElementById(id)
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - 80
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setMenuOpen(false)
  }

  return (
    <header className={`${roboto.className} fixed top-0 left-0 right-0 z-50`}>
      {/* ----------------------------- MAIN BAR ----------------------------- */}
      <div className="h-20 px-4 sm:px-6 flex items-center justify-between bg-gray-900/95 backdrop-blur-md border-b border-gray-800/60 shadow-lg">
        <div className="cursor-pointer" onClick={() => scrollTo('hero')}>
          <AlegaLogo />
        </div>

        {/* ============================= DESKTOP NAVIGATION ============================= */}
        <nav className="hidden xl:flex items-center gap-8">
          <ul
            ref={navRef}
            className="relative flex items-center gap-6 text-xs font-mono font-bold uppercase tracking-wider text-gray-400"
          >
            {MENU.filter(i => i.id).map(item => (
              <li key={item.id} className="relative">
                <button
                  data-id={item.id}
                  onClick={() => scrollTo(item.id!)}
                  className={`transition-colors py-1 hover:text-white
                    ${activeSection === item.id ? 'text-[#F8A900]' : ''}`}
                >
                  {item.name}

                  {activeSection === item.id && (
                    <motion.span
                      layoutId="desktop-underline"
                      className="absolute left-0 bottom-0 h-[2px] w-full bg-[#F8A900]"
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollTo('contact-us')}
            className={`ml-4 px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest border rounded-md transition-all duration-200
              ${activeSection === 'contact-us' 
                ? 'bg-[#F8A900] text-black border-transparent shadow-md shadow-[#F8A900]/10' 
                : 'border-gray-700 text-gray-300 hover:border-[#F8A900] hover:text-[#F8A900]'
              }`}
          >
            Contact Us
          </button>
        </nav>

        {/* ============================= HAMBURGER BUTTON ============================= */}
        <button
          className="xl:hidden w-10 h-10 relative flex items-center justify-center rounded-lg hover:bg-gray-800 transition-colors focus:outline-none"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle Menu"
        >
          <motion.span
            className="absolute w-5 h-0.5 bg-gray-300"
            animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
          />
          <motion.span
            className="absolute w-5 h-0.5 bg-gray-300"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="absolute w-5 h-0.5 bg-gray-300"
            animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
          />
        </button>
      </div>

      {/* ============================= MOBILE DRAW PANEL ============================= */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dark Mask Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-30 xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Dark Dropdown Console Panel */}
            <motion.div
              className="absolute top-20 left-0 right-0 z-40 bg-gray-950 border-b border-gray-800 shadow-2xl overflow-hidden xl:hidden"
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Subtle Tech Blueprint Grid Accent */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(258,258,258,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(258,258,258,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

              <div className="relative z-10 px-6 py-6 space-y-6">
                {/* Navigation Matrix Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {MENU.map((item, index) =>
                    item.group ? (
                      <div
                        key={index}
                        className="col-span-1 sm:col-span-2 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 mt-2 border-b border-gray-900 pb-1"
                      >
                        // {item.group}
                      </div>
                    ) : (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollTo(item.id!)}
                        className={`text-left text-xs font-mono font-bold uppercase tracking-wide py-1 border-l-2 pl-3 transition-colors
                          ${activeSection === item.id
                            ? 'border-[#F8A900] text-[#F8A900]'
                            : 'border-transparent text-gray-400 hover:text-white'
                          }`}
                        whileHover={{ x: 2 }}
                      >
                        {item.name}
                      </motion.button>
                    )
                  )}
                </div>

                {/* Primary Panel Action Element */}
                <div className="pt-4 border-t border-gray-900">
                  <button
                    onClick={() => scrollTo('contact-us')}
                    className="w-full text-center px-4 py-2.5 bg-[#F8A900] text-black font-mono font-black text-xs uppercase tracking-widest rounded-lg hover:bg-amber-500 transition-colors shadow-lg shadow-[#F8A900]/10"
                  >
                    Contact Us 🚀
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}