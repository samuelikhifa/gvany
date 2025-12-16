import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import gvanylogo from '../assets/gvanylogo.webp';
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-[#0189D1] to-[#01A5F9] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info with Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={gvanylogo}
                alt="GVANY Logo"
                // className="w-12 h-12 object-contain rounded-lg p-1.5"
                className="w-20 h-20 md:w-20 md:h-20 object-contain rounded-xl p-2"
              />
              <div>

              </div>
            </div>
            <p
              className="text-white/90 mb-4 font-semibold text-base"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Sales and Distribution Company Limited
            </p>
            <p
              className="text-white/80 text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Adding Value Across Africa through excellence in marketing, logistics, and distribution services.
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
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-[#E56732] transition-colors text-sm font-medium inline-flex items-center group"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  <span className="group-hover:translate-x-1 transition-transform">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-[#E56732] transition-colors text-sm font-medium inline-flex items-center group"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/80 hover:text-[#E56732] transition-colors text-sm font-medium inline-flex items-center group"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  <span className="group-hover:translate-x-1 transition-transform">Services</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-[#E56732] transition-colors text-sm font-medium inline-flex items-center group"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                </Link>
              </li>
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
              <li>
                <a
                  href="/beverages"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#E56732] transition-colors text-sm font-medium inline-flex items-center group"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  <span className="group-hover:translate-x-1 transition-transform">Beverages</span>
                </a>
              </li>
              <li>
                <a
                  href="/haulage-logistics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#E56732] transition-colors text-sm font-medium inline-flex items-center group"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  <span className="group-hover:translate-x-1 transition-transform">Haulage & Logistics</span>
                </a>
              </li>
              <li>
                <a
                  href="/custom-clearing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#E56732] transition-colors text-sm font-medium inline-flex items-center group"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  <span className="group-hover:translate-x-1 transition-transform">Custom Clearing</span>
                </a>
              </li>
              <li>
                <a
                  href="/agro-allied"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#E56732] transition-colors text-sm font-medium inline-flex items-center group"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  <span className="group-hover:translate-x-1 transition-transform">Agro-Allied Services</span>
                </a>
              </li>
              <li>
                <a
                  href="/real-estate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#E56732] transition-colors text-sm font-medium inline-flex items-center group"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  <span className="group-hover:translate-x-1 transition-transform">Real Estate</span>
                </a>
              </li>
              <li>
                <a
                  href="/consultancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#E56732] transition-colors text-sm font-medium inline-flex items-center group"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  <span className="group-hover:translate-x-1 transition-transform">Consultancy</span>
                </a>
              </li>
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
                <MapPin className="h-5 w-5 text-[#E56732] flex-shrink-0 mt-0.5" />
                <span
                  className="text-white/80 text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Di Maria plaza, Plot 3012 Block 24,<br />
                  Rafiu Babatunde Tinubu Road, Amuwo Odofin, Lagos State.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#E56732] flex-shrink-0" />
                <a
                  href="tel:+234XXXXXXXXX"
                  className="text-white/80 hover:text-[#E56732] transition-colors text-sm"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  +234 090 2914 1004, +234 070 5427 0402
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#E56732] flex-shrink-0" />
                <a
                  href="mailto:info@gvany.com"
                  className="text-white/80 hover:text-[#E56732] transition-colors text-sm"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  gvanysalesltd@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E56732] transition-all duration-300 flex items-center justify-center group hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E56732] transition-all duration-300 flex items-center justify-center group hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E56732] transition-all duration-300 flex items-center justify-center group hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E56732] transition-all duration-300 flex items-center justify-center group hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-white/70 text-sm text-center md:text-left"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              © {currentYear} GVANY Sales and Distribution Company Limited. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="#"
                className="text-white/70 hover:text-[#E56732] transition-colors text-sm"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-white/70 hover:text-[#E56732] transition-colors text-sm"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer