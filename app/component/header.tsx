'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AlegaLogo from '../ui/alega-logo'
import { roboto } from '../ui/fonts'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 })
  const pathname = usePathname()

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const navRef = useRef<HTMLUListElement>(null)

  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  // Track which section is active using IntersectionObserver
  useEffect(() => {
    const sections = menuItems.map((item) =>
      document.getElementById(item.href.substring(1))
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((sec) => sec && observer.observe(sec))
    return () => sections.forEach((sec) => sec && observer.unobserve(sec))
  }, [])

  // Animate underline position
  useEffect(() => {
    if (!navRef.current) return
    const activeLink = navRef.current.querySelector<HTMLButtonElement>(
      `[data-section="${activeSection}"]`
    )
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink
      setUnderlineProps({ left: offsetLeft, width: offsetWidth })
    }
  }, [activeSection])

  return (
    <header
      className={`${roboto.className} fixed w-[calc(100%-1rem)] mx-2 mt-3 rounded-2xl border border-yellow-100/40 bg-white/80 backdrop-blur-lg shadow-md z-50 transition-all py-4 md:py-0`}
    >
      <div className="flex justify-between items-center px-4">
        <AlegaLogo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex relative">
          <ul
            ref={navRef}
            className="flex space-x-8 text-gray-700 font-medium relative"
          >
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  data-section={item.href.substring(1)}
                  onClick={() => handleScroll(item.href.substring(1))}
                  className={`px-2 py-1 transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-[#F8A900]'
                      : 'hover:text-[#F8A900]'
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
            {/* Sliding underline */}
            {/* <motion.span
              className="absolute bottom-0 h-[2px] bg-[#F8A900] rounded"
              initial={false}
              animate={{ left: underlineProps.left, width: underlineProps.width }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            /> */}
          </ul>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-3"
          >
            <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleScroll(item.href.substring(1))}
                    className={`block px-2 py-1 rounded transition-colors ${
                      activeSection === item.href.substring(1)
                        ? 'text-[#F8A900] font-semibold'
                        : 'hover:text-[#F8A900] hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
