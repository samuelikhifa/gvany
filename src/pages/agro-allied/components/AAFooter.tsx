
import { Link } from 'react-router-dom'
import {  Mail, Phone, MapPin } from 'lucide-react'
import e from '../../../assets/e.png';

const AAFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-[#D14E1F] to-[#E56732] text-white">

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Link to="/agro-allied" className="flex items-center gap-3">
                <img
                  src={e}
                  alt="agro-allied Logo"
                  className="w-24 h-24 object-contain"
                />

              </Link>
            </div>
            <p className="text-white/80 text-sm" style={{ fontFamily: 'var(--font-primary)' }}>Agricultural Production & Agro-Allied Services</p>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Quick Links</h4>
            <ul className="space-y-2">
              {[{ name: 'Home', path: '/agro-allied' }, { name: 'About', path: '/agro-allied/about' }, { name: 'Services', path: '/agro-allied/services' }, { name: 'Contact', path: '/agro-allied/contact' }].map(link => (
                <li key={link.path}><Link to={link.path} className="text-white/80 hover:text-[#DA9E1B] text-sm transition-colors" style={{ fontFamily: 'var(--font-primary)' }}>{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Services</h4>
            <ul className="space-y-2 text-sm text-white/80" style={{ fontFamily: 'var(--font-primary)' }}>
              <li>Crop Production</li>
              <li>Agro Processing</li>
              <li>Supply & Distribution</li>
              <li>Food Security Support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#DA9E1B]" /><span className="text-white/80" style={{ fontFamily: 'var(--font-primary)' }}>Lagos, Nigeria</span></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#DA9E1B]" /><span className="text-white/80" style={{ fontFamily: 'var(--font-primary)' }}></span>+234 070 7065 0040, +234 091 3011 2781</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#DA9E1B]" /><span className="text-white/80" style={{ fontFamily: 'var(--font-primary)' }}>gvanyenquiries@gmail.com</span></div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-white/70 text-sm" style={{ fontFamily: 'var(--font-primary)' }}>© {new Date().getFullYear()} La Vie Est Belle Consultancy. A GVANY Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


export default AAFooter
