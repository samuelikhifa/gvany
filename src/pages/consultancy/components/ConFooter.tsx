// FOOTER
import { Link } from 'react-router-dom'
import {  Mail, Phone, MapPin } from 'lucide-react'
import yas from '../../../assets/yas.png';
const ConFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1F2A3D] to-[#2F3E5C] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Link to="/consultancy" className="flex items-center gap-3">

                <img
                  src={yas}
                  alt="consultancy Logo"
                  className="w-20 h-20 object-contain"
                />

              </Link>
            </div>
            <p className="text-white/80 text-sm" style={{ fontFamily: 'var(--font-primary)' }}>
              Consultancy and business support services that streamline operations and unlock growth
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/consultancy' },
                { name: 'About', path: '/consultancy/about' },
                { name: 'Services', path: '/consultancy/services' },
                { name: 'Contact', path: '/consultancy/contact' }
              ].map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-[#01A5F9] text-sm transition-colors"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Services
            </h4>
            <ul className="space-y-2 text-sm text-white/80" style={{ fontFamily: 'var(--font-primary)' }}>
              <li>Business Strategy</li>
              <li>Operational Excellence</li>
              <li>Digital Transformation</li>
              <li>Performance Improvement</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#01A5F9] flex-shrink-0 mt-0.5" />
                <span className="text-white/80" style={{ fontFamily: 'var(--font-primary)' }}>
                  Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#01A5F9] flex-shrink-0 mt-0.5" />
                <span className="text-white/80" style={{ fontFamily: 'var(--font-primary)' }}>
                  +234 081 0162 8455
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#01A5F9] flex-shrink-0 mt-0.5" />
                <span className="text-white/80" style={{ fontFamily: 'var(--font-primary)' }}>
                  emma.okodugha@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-white/70 text-sm" style={{ fontFamily: 'var(--font-primary)' }}>
            © {new Date().getFullYear()} Yorbax Allied Solutions Ltd. A GVANY Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default ConFooter