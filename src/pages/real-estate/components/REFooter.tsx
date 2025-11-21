
import { Link } from 'react-router-dom'
import {  Mail, Phone, MapPin } from 'lucide-react'
import sek from '../../../assets/sek.png';
const REFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-[#CC5128] to-[#E56732] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
               <Link to="/real-estate" className="flex items-center gap-3 group">
              
              
                            <img
                              src={sek}
                              alt="real-estate Logo"
                              className="w-20 h-20 object-contain"
                            />
              
              
              
                          </Link>
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
              Premium property solutions across Africa
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
              {[
                { name: 'Home', path: '/real-estate' },
                { name: 'About', path: '/real-estate/about' },
                { name: 'Services', path: '/real-estate/services' },
                { name: 'Contact', path: '/real-estate/contact' }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-white/80 hover:text-[#2C5333] transition-colors text-sm font-medium inline-flex items-center group"
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
              {[
                'Property Development',
                'Sales & Rentals',
                'Property Management',
                'Investment Advisory'
              ].map((service) => (
                <li key={service}>
                  <span 
                    className="text-white/80 text-sm"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    {service}
                  </span>
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
                <MapPin className="h-5 w-5 text-[#2C5333] flex-shrink-0 mt-0.5" />
                <span 
                  className="text-white/80 text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#2C5333] flex-shrink-0" />
                <a 
                  href="tel:+234xxxxxxxxx"
                  className="text-white/80 hover:text-[#2C5333] transition-colors text-sm"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  +234 081 0162 8455
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#2C5333] flex-shrink-0" />
                <a 
                  href="mailto:info@sekiando.com"
                  className="text-white/80 hover:text-[#2C5333] transition-colors text-sm"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  emma.okodugha@gmail.com
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
              © {currentYear} Sekiando Allied Solutions Ltd. A GVANY Company. All rights reserved.
            </p>
            <Link 
              to="https://gvany.com" 
              className="text-white/70 hover:text-[#2C5333] transition-colors text-sm font-semibold"
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


export default REFooter
