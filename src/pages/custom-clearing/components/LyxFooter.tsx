import { Link } from 'react-router-dom'
import {  Mail, Phone, MapPin } from 'lucide-react'
// import lyxlogo from '../assets/images/lyx-logo.png'
import LYX from '../../../assets/LYX.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    // { name: 'Home', path: '/' },
    { name: 'About', path: '/custom-clearing/about' },
    { name: 'Services', path: '/custom-clearing/services' },
    { name: 'Contact', path: '/custom-clearing/contact' },
  ]

  const services = [
    { name: 'Customs Clearance', path: '/custom-clearing/services/' },
    { name: 'Freight Forwarding', path: '/custom-clearing/services' },
    { name: 'Air Freight', path: '/custom-clearing/services' },
    { name: 'Sea Freight', path: '/custom-clearing/services' },
  ]

  return (
    <footer className="bg-gradient-to-br from-[#0272CC] to-[#0188F4] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={LYX} 
                alt="Lyx Logo" 
                className="w-24 h-24 object-contain rounded-lg p-1.5"
              />

            </div>
            <p 
              className="text-white/90 mb-4 font-semibold text-sm"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              A GVANY Company
            </p>
            <p 
              className="text-white/80 text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Expert customs clearing and freight forwarding services across Africa
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-lg font-bold mb-6 text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-white/80 hover:text-[#FF7A00] transition-colors text-sm font-medium inline-flex items-center group"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 
              className="text-lg font-bold mb-6 text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path} 
                    className="text-white/80 hover:text-[#FF7A00] transition-colors text-sm font-medium inline-flex items-center group"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="text-lg font-bold mb-6 text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                <span 
                  className="text-white/80 text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#FF7A00] flex-shrink-0" />
                <a 
                  href="tel:+234xxxxxxxxx"
                  className="text-white/80 hover:text-[#FF7A00] transition-colors text-sm"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  +234 070 7065 0040, +234 091 3011 2781
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#FF7A00] flex-shrink-0" />
                <a 
                  href="mailto:info@lyx.com"
                  className="text-white/80 hover:text-[#FF7A00] transition-colors text-sm"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  gvanyenquiries@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p 
              className="text-white/70 text-sm text-center md:text-left"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              © {currentYear} Lyx Clearing & Forwarding Co. Ltd. A GVANY Company. All rights reserved.
            </p>
            <Link 
              to="https://gvany.com" 
              className="text-white/70 hover:text-[#FF7A00] transition-colors text-sm font-semibold"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Visit GVANY Main Site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer