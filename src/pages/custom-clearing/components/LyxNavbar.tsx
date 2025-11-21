import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
// import lyxlogo from '../assets/images/lyx-logo.png'
import LYX from '../../../assets/LYX.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setServicesOpen(false)
  }, [location])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('mobile-menu-open')
    } else {
      document.body.classList.remove('mobile-menu-open')
    }
    return () => document.body.classList.remove('mobile-menu-open')
  }, [isOpen])

 
  const navLinks = [
    { name: 'Home', path: '/custom-clearing' },
    { name: 'About', path: '/custom-clearing/about' },
    { name: 'Services', path: '/custom-clearing/services' },
    { name: 'Contact', path: '/custom-clearing/contact' },
  ]

  const isActivePath = (path: string) => {
    return location.pathname === path
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1030] transition-all duration-500 ${
          isScrolled 
            ? 'bg-white shadow-xl py-2' 
            : 'bg-white/95 backdrop-blur-md py-3'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo Section */}
            <Link 
              to="/custom-clearing" 
              className="flex items-center space-x-3 group"
            >
              <motion.div 
                className="relative w-28 h-28 md:w-30 md:h-30 flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src={LYX} 
                  alt="Lyx Clearing & Forwarding" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              \
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm xl:text-base font-semibold transition-all duration-300 rounded-lg ${
                    isActivePath(link.path)
                      ? 'text-[#0188F4]'
                      : 'text-gray-700 hover:text-[#0188F4] hover:bg-[#E5F4FF]'
                  }`}
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  {link.name}
                  {isActivePath(link.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0188F4] to-[#3DA1F6]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              
             

              {/* Contact Info */}
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200">
                <a 
                  href="tel:+234xxxxxxxxxx"
                  className="flex items-center gap-2 text-gray-600 hover:text-[#0188F4] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span 
                    className="text-sm font-medium hidden xl:block"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    +234 081 0162 8455
                  </span>
                </a>
              </div>

              {/* CTA Button */}
              <Link to="/custom-clearing/contact" className="btn btn-primary ml-2">
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-[#E5F4FF] hover:text-[#0188F4] transition-colors"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1020] lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-[1025] lg:hidden shadow-2xl overflow-y-auto"
            >
              <div className="bg-gradient-to-r from-[#0188F4] to-[#3DA1F6] px-6 py-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    // src={lyxlogo} 
                    alt="Lyx Logo" 
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <h2 
                      className="text-white font-bold text-lg"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Lyx Clearing
                    </h2>
                    <p 
                      className="text-white/80 text-xs"
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      A GVANY Company
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>

              <div className="px-6 py-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg font-semibold transition-all ${
                        isActivePath(link.path)
                          ? 'bg-[#E5F4FF] text-[#0188F4]'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  
                  
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                       
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.05 }}
                  className="pt-6 border-t border-gray-200"
                >
                  <div className="space-y-3 mb-6">
                    <a 
                      href="tel:+234xxxxxxxxxx"
                      className="flex items-center gap-3 text-gray-700 hover:text-[#0188F4]"
                    >
                      <Phone className="h-5 w-5" />
                      <span 
                        className="text-sm"
                        style={{ fontFamily: 'var(--font-primary)' }}
                      >
                        +234 081 0162 8455
                      </span>
                    </a>
                    <a 
                      href="mailto:info@lyx.com"
                      className="flex items-center gap-3 text-gray-700 hover:text-[#0188F4]"
                    >
                      <Mail className="h-5 w-5" />
                      <span 
                        className="text-sm"
                        style={{ fontFamily: 'var(--font-primary)' }}
                      >
                        emma.okodugha@gmail.com
                      </span>
                    </a>
                  </div>

                  <Link
                    to="/contact"
                    className="block btn btn-primary w-full text-center"
                  >
                    Get Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar