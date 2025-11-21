import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, TrendingUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import yas from '../../../assets/yas.png';
const ConNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/consultancy' },
    { name: 'About', path: '/consultancy/about' },
    { name: 'Services', path: '/consultancy/services' },
    { name: 'Contact', path: '/consultancy/contact' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[1030] transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl py-2' : 'bg-white/95 backdrop-blur-md py-3'}`}>
        <div className="container-custom">
          <div className="flex justify-between items-center h-16">
            <Link to="/consultancy" className="flex items-center gap-3">
              
                <img
                  src={yas}
                  alt="consultancy Logo"
                  className="w-24 h-24 object-contain"
                />

            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${location.pathname === link.path
                    ? 'text-[#01A5F9] bg-[#E6F7FF]'
                    : 'text-gray-700 hover:text-[#01A5F9]'
                    }`}
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[1020] md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-[1025] md:hidden shadow-2xl overflow-y-auto"
            >
              <div className="bg-gradient-to-r from-[#2F3E5C] to-[#1F2A3D] px-6 py-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-white" />
                  <div>
                    <h2 className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                      Yorbax Allied Solutions
                    </h2>
                    <p className="text-white/80 text-xs" style={{ fontFamily: 'var(--font-primary)' }}>
                      A GVANY Company
                    </p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg bg-white/20">
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>
              <div className="px-6 py-6 space-y-2">
                {navLinks.map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg font-semibold ${location.pathname === link.path
                      ? 'bg-[#E6F7FF] text-[#01A5F9]'
                      : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}



export default ConNavbar
