// FOOTER
import { Link } from 'react-router-dom'
import {  Mail, Phone, MapPin } from 'lucide-react'
import afr from '../../../assets/afr.png';

const BEFooter = () => {
    return (
        <footer className="bg-gradient-to-br from-[#015489] to-[#0268AE] text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                           <Link to="/beverages" className="flex items-center gap-3">
                            <img
                                src={afr}
                                alt="L'Antique Beverages Logo"
                                className="w-24 h-24 object-contain"
                            />
                    
                        </Link>
                        </div>
                        <p className="text-white/80 text-sm" style={{ fontFamily: 'var(--font-primary)' }}>Quality beverages for African and global markets</p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Quick Links</h4>
                        <ul className="space-y-2">
                            {[{ name: 'Home', path: '/beverages' }, { name: 'About', path: '/beverages/about' }, { name: 'Services', path: '/beverages/services' }, { name: 'Contact', path: '/beverages/contact' }].map(link => (
                                <li key={link.path}><Link to={link.path} className="text-white/80 hover:text-[#0289DC] text-sm transition-colors" style={{ fontFamily: 'var(--font-primary)' }}>{link.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Services</h4>
                        <ul className="space-y-2 text-sm text-white/80" style={{ fontFamily: 'var(--font-primary)' }}>
                            <li>Beverage Production</li>
                            <li>Brand Development</li>
                            <li>Distribution</li>
                            <li>Quality Assurance</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Contact</h4>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[#0289DC] flex-shrink-0 mt-0.5" /><span className="text-white/80" style={{ fontFamily: 'var(--font-primary)' }}>Lagos, Nigeria</span></div>
                            <div className="flex items-start gap-2"><Phone className="w-4 h-4 text-[#0289DC] flex-shrink-0 mt-0.5" /><span className="text-white/80" style={{ fontFamily: 'var(--font-primary)' }}>+234 070 7065 0040, +234 091 3011 2781</span></div>

                            <div className="flex items-start gap-2"><Mail className="w-4 h-4 text-[#0289DC] flex-shrink-0 mt-0.5" /><span className="text-white/80" style={{ fontFamily: 'var(--font-primary)' }}> gvanyenquiries@gmail.com
                            </span></div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-8 pt-6 text-center">
                    <p className="text-white/70 text-sm" style={{ fontFamily: 'var(--font-primary)' }}>© {new Date().getFullYear()} L'Antique Beverages Ltd. A GVANY Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default BEFooter
