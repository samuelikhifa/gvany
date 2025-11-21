// NAVBAR
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Wine } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import afr from '../../../assets/afr.png';
const BENavbar = () => {
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
        { name: 'Home', path: '/beverages' },
        { name: 'About', path: '/beverages/about' },
        { name: 'Services', path: '/beverages/services' },
        { name: 'Contact', path: '/beverages/contact' },
    ]

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-[1030] transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl py-2' : 'bg-white/95 backdrop-blur-md py-3'}`}>
                <div className="container-custom">
                    <div className="flex justify-between items-center h-16">
                        <Link to="/beverages" className="flex items-center gap-3">
                            <img
                                src={afr}
                                alt="L'Antique Beverages Logo"
                                className="w-28 h-28 object-contain"
                            />
                    
                        </Link>


                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map(link => (
                                <Link key={link.path} to={link.path} className={`px-4 py-2 rounded-lg font-semibold transition-colors ${location.pathname === link.path ? 'text-[#0289DC] bg-[#E6F7FD]' : 'text-gray-700 hover:text-[#0289DC]'}`} style={{ fontFamily: 'var(--font-primary)' }}>
                                    {link.name}
                                </Link>
                            ))}
                            {/* <Link to="/contact" className="btn btn-secondary ml-2">Get Started</Link> */}
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
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-[1020] md:hidden" onClick={() => setIsOpen(false)} />
                        <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-[1025] md:hidden shadow-2xl overflow-y-auto">
                            <div className="bg-gradient-to-r from-[#0268AE] to-[#015489] px-6 py-6 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Wine className="w-8 h-8 text-white" />
                                    <div>
                                        <h2 className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>L'Antique</h2>
                                        <p className="text-white/80 text-xs" style={{ fontFamily: 'var(--font-primary)' }}>A GVANY Company</p>
                                    </div>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg bg-white/20">
                                    <X className="h-5 w-5 text-white" />
                                </button>
                            </div>
                            <div className="px-6 py-6 space-y-2">
                                {navLinks.map(link => (
                                    <Link key={link.path} to={link.path} className={`block px-4 py-3 rounded-lg font-semibold ${location.pathname === link.path ? 'bg-[#E6F7FD] text-[#0289DC]' : 'text-gray-700 hover:bg-gray-100'}`} style={{ fontFamily: 'var(--font-primary)' }}>
                                        {link.name}
                                    </Link>
                                ))}
                                {/* <Link to="/contact" className="block btn btn-secondary w-full text-center mt-4">Get Started</Link> */}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default BENavbar