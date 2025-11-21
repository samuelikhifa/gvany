import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Building2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import sek from '../../../assets/sek.png';
const RENavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
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
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/real-estate' },
    { name: 'About', path: '/real-estate/about' },
    { name: 'Services', path: '/real-estate/services' },
    { name: 'Contact', path: '/real-estate/contact' },
  ]

  // const isActive = (path) => location.pathname === path

  const isActive = (path: string) => location.pathname === path


  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1030] transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl py-2' : 'bg-white/95 backdrop-blur-md py-3'
          }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/real-estate" className="flex items-center gap-3 group">


              <img
                src={sek}
                alt="real-estate Logo"
                className="w-28 h-28 object-contain"
              />



            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${isActive(link.path)
                    ? 'text-[#E56732] bg-[#FFF4EF]'
                    : 'text-gray-700 hover:text-[#E56732] hover:bg-gray-100'
                    }`}
                >
                  {link.name}
                </Link>
              ))}


            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[1020] lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white z-[1025] lg:hidden shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E56732] to-[#CC5128] flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-gray-900">Sekiando</span>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="p-2">
                    <X className="h-5 h-5" />
                  </button>
                </div>

                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg font-semibold transition-all ${isActive(link.path)
                        ? 'bg-[#FFF4EF] text-[#E56732]'
                        : 'text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>


              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-20" />
    </>
  )
}



export default RENavbar
