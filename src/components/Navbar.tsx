import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Globe, TrendingUp, Truck, Plane, Leaf, Building2, Briefcase, List } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import gvanylogo from '../assets/gvanylogo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('EN')
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
    setLanguageOpen(false)
  }, [location])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('mobile-menu-open')
    } else {
      document.body.classList.remove('mobile-menu-open')
    }
    return () => document.body.classList.remove('mobile-menu-open')
  }, [isOpen])

  const services = [
    { 
      name: 'Beverages', 
      path: '/beverages',
      icon: TrendingUp
    },
    { 
      name: 'Haulage, Logistics & Supply Chain', 
      path: '/haulage-logistics',
      icon: Truck
    },
    { 
      name: 'Custom Clearing & Forwarding', 
      path: '/custom-clearing',
      icon: Plane
    },
    { 
      name: 'Agro-Allied Services', 
      path: '/agro-allied',
      icon: Leaf
    },
    { 
      name: 'Real Estate', 
      path: '/real-estate',
      icon: Building2
    },
    { 
      name: 'Consultancy Services', 
      path: '/consultancy',
      icon: Briefcase
    },
  ]

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'FR', name: 'Français' },
  ]

  const navLinksBeforeServices = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ]

  const navLinksAfterServices = [
    { name: 'Contact', path: '/contact' },
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
              to="/" 
              className="flex items-center space-x-3 group"
            >
              <motion.div 
                // className="relative w-20 h-20 md:w-16 md:h-16 flex-shrink-0"
                className="relative w-48 h-48 md:w-30 md:h-30 flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src={gvanylogo }
                  alt="GVANY Sales & Distribution Company Limited" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinksBeforeServices.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm xl:text-base font-semibold transition-all duration-300 rounded-lg ${
                    isActivePath(link.path)
                      ? 'text-[#01A5F9]'
                      : 'text-gray-700 hover:text-[#01A5F9] hover:bg-[#E6F7FF]'
                  }`}
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  {link.name}
                  {isActivePath(link.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#01A5F9] to-[#33B6FA]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              
              {/* Services Dropdown - Desktop */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button 
                  className={`flex items-center px-4 py-2 text-sm xl:text-base font-semibold transition-all duration-300 rounded-lg ${
                    location.pathname.includes('/services')
                      ? 'text-[#01A5F9]'
                      : 'text-gray-700 hover:text-[#01A5F9] hover:bg-[#E6F7FF]'
                  }`}
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Services 
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
                    >
                      <div className="bg-gradient-to-r from-[#01A5F9] to-[#33B6FA] px-4 py-3">
                        <p className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-heading)' }}>
                          Our Services
                        </p>
                      </div>
                      
                      <div className="py-2 max-h-[400px] overflow-y-auto scrollbar-hide">
                        <Link
                          to="/services"
                          className="flex items-center px-4 py-3 text-[#01A5F9] hover:bg-[#E6F7FF] transition-colors font-semibold border-b border-gray-100"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          <List className="w-4 h-4 mr-2" />
                          View All Services
                        </Link>
                        
                        {services.map((service) => {
                          const IconComponent = service.icon
                          return (
                            <a
                              key={service.path}
                              href={service.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center px-4 py-3 text-gray-700 hover:bg-[#E6F7FF] hover:text-[#01A5F9] transition-all duration-200 group"
                              style={{ fontFamily: 'var(--font-primary)' }}
                            >
                              <IconComponent className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                              <span className="text-sm font-medium">{service.name}</span>
                            </a>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinksAfterServices.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm xl:text-base font-semibold transition-all duration-300 rounded-lg ${
                    isActivePath(link.path)
                      ? 'text-[#01A5F9]'
                      : 'text-gray-700 hover:text-[#01A5F9] hover:bg-[#E6F7FF]'
                  }`}
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  {link.name}
                  {isActivePath(link.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#01A5F9] to-[#33B6FA]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}

              {/* Language Selector - Desktop */}
              <div
                className="relative"
                onMouseEnter={() => setLanguageOpen(true)}
                onMouseLeave={() => setLanguageOpen(false)}
              >
                <button 
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-[#01A5F9] hover:bg-[#E6F7FF] transition-all duration-300 rounded-lg"
                >
                  <Globe className="h-4 w-4 mr-1" />
                  <span className="text-sm font-semibold">{currentLanguage}</span>
                  <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-300 ${languageOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {languageOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => setCurrentLanguage(lang.code)}
                          className={`w-full flex items-center px-4 py-2 text-sm hover:bg-[#E6F7FF] transition-colors ${
                            currentLanguage === lang.code ? 'bg-[#E6F7FF] text-[#01A5F9] font-semibold' : 'text-gray-700'
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="btn btn-secondary ml-2"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-[#E6F7FF] hover:text-[#01A5F9] transition-colors"
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
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1020] lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-[1025] lg:hidden shadow-2xl overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <div className="bg-gradient-to-r from-[#01A5F9] to-[#33B6FA] px-6 py-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src="/images/gvanylogo.png" 
                    alt="GVANY Logo" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>

              <div className="px-6 py-6 space-y-2">
                {/* Navigation Links - Before Services */}
                {navLinksBeforeServices.map((link, index) => (
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
                          ? 'bg-[#E6F7FF] text-[#01A5F9]'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Services Accordion */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinksBeforeServices.length * 0.05 }}
                >
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition-all"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    <span>Services</span>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pr-2 py-2 space-y-1">
                          <Link
                            to="/services"
                            className="flex items-center px-4 py-2 text-[#01A5F9] hover:bg-[#E6F7FF] rounded-lg text-sm font-semibold"
                          >
                            <List className="w-4 h-4 mr-2" />
                            View All Services
                          </Link>
                          {services.map((service) => {
                            const IconComponent = service.icon
                            return (
                              <a
                                key={service.path}
                                href={service.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#01A5F9] rounded-lg text-sm transition-all"
                              >
                                <IconComponent className="w-4 h-4 mr-2" />
                                <span>{service.name}</span>
                              </a>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Navigation Links - After Services */}
                {navLinksAfterServices.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navLinksBeforeServices.length + 1 + index) * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg font-semibold transition-all ${
                        isActivePath(link.path)
                          ? 'bg-[#E6F7FF] text-[#01A5F9]'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Language Selector Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinksBeforeServices.length + navLinksAfterServices.length + 1) * 0.05 }}
                  className="pt-4 border-t border-gray-200"
                >
                  <p className="px-4 text-xs font-semibold text-gray-500 uppercase mb-2">
                    Language
                  </p>
                  <div className="space-y-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setCurrentLanguage(lang.code)}
                        className={`w-full flex items-center px-4 py-2 rounded-lg text-sm transition-all ${
                          currentLanguage === lang.code
                            ? 'bg-[#E6F7FF] text-[#01A5F9] font-semibold'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navLinksBeforeServices.length + navLinksAfterServices.length + 2) * 0.05 }}
                  className="pt-6"
                >
                  <Link
                    to="/contact"
                    className="block btn btn-secondary w-full text-center"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>

              {/* Mobile Menu Footer */}
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <p className="text-xs text-gray-500 text-center">
                  © 2024 GVANY Sales & Distribution
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar